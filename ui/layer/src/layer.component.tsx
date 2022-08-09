import React                      from 'react'
import ScrollLock                 from 'react-scrolllock'
import document                   from 'global/document'
import { FC }                     from 'react'
import { useAnimation }           from 'framer-motion'
import { nanoid }                 from 'nanoid'
import { useEffect }              from 'react'
import { useCallback }            from 'react'
import { createPortal }           from 'react-dom'

import { Button }                 from '@ui/button'
import { Condition }              from '@ui/condition'
import { Form }                   from '@ui/form'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'
import { useData }                from '@globals/data'
import { extractObject }          from '@globals/data'
import { useLanguage }            from '@globals/language'

import { Container }              from './container'
import { CrossIcon }              from './icons'
import { LayerProps }             from './layer.interface'
import { useServiceDescriptions } from './data'

export const Layer: FC<LayerProps> = ({
  children,
  visible,
  onClose,
  scroll = false,
  opacity = 'none',
  center = false,
  top = 0,
  left = 0,
  display = 'form',
  ...props
}) => {
  const blackoutId = nanoid()
  const childrenId = nanoid()
  const main = useAnimation()
  const [language] = useLanguage()
  const { fragments } = useData()
  const serviceDescriptions = useServiceDescriptions()

  let titleFeedback: string = ''
  let contentFeedback: string = ''
  let privacyTitle: string = ''
  let privacyContent: string = ''
  let relocationTitle: string = ''

  if (fragments) {
    const titleObj = extractObject('drawer', fragments.feedback[language])
    const privacyObj = extractObject('privacy-policy', fragments.feedback[language])
    const relocationTitleObj = extractObject(
      'drawer-title',
      fragments.relocationhowmovetous[language]
    )
    relocationTitle = relocationTitleObj?.title
    titleFeedback = titleObj?.title
    contentFeedback = titleObj?.content
    privacyTitle = privacyObj?.title
    privacyContent = privacyObj?.content
  }

  const close = useCallback(() => {
    main
      .start({
        opacity: 0,
      })
      .then(onClose)
  }, [main, onClose])

  const handleClick = useCallback(
    (event) => {
      if (
        event.target.contains(document.getElementById(blackoutId)) ||
        event.target === document.getElementById(blackoutId)
      )
        close()
    },
    [blackoutId, close]
  )

  document.addEventListener('click', handleClick)

  useEffect(() => {
    main.start({
      opacity: 1,
    })

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick, main])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  })

  if (visible) {
    return createPortal(
      <Layout display={['flex', 'flex', 'none']}>
        <ScrollLock>
          <Container
            animate={main}
            initial={{ opacity: 0 }}
            scroll={scroll}
            opacity={opacity}
            id={blackoutId}
            justifyContent='center'
            alignItems='center'
            backgroundColor={['background.beige', 'background.beige', 'rgba(0, 0, 0, 0.4)']}
            {...props}
          >
            <Box
              position='absolute'
              top='20px'
              left='20px'
              display={['flex', 'flex', 'none']}
              onClick={close}
              style={{
                cursor: 'pointer',
              }}
            >
              <CrossIcon color='black' />
            </Box>
            <Box
              position='absolute'
              top='30px'
              right='30px'
              display={['none', 'none', 'flex']}
              onClick={close}
              style={{
                cursor: 'pointer',
              }}
            >
              <CrossIcon color='white' />
            </Box>
            <Box
              id={childrenId}
              width={['100%', '100%', 'auto']}
              height={['100%', '100%', 'auto']}
              justifyContent={['center', 'center', 'auto']}
            >
              <Box
                width={['100%', '100%', 720]}
                px={['20px', '20px', '64px']}
                backgroundColor='background.beige'
                borderRadius='atomic'
              >
                <Condition match={display === 'form'}>
                  <Column fill>
                    <Layout flexBasis={80} flexShrink={0} />
                    <Layout>
                      <Text
                        fontSize={['moderate', 'moderate', 'increased']}
                        fontFamily='secondary'
                        lineHeight={['normal', 'normal', 'medium']}
                        textTransform='uppercase'
                      >
                        {titleFeedback}
                      </Text>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Text color='text.secondary' fontSize={['tiny', 'tiny', 'regular']}>
                      {contentFeedback}
                    </Text>
                    <Layout />
                    <Layout flexBasis={50} />
                    <Layout>
                      <Form />
                    </Layout>
                    <Layout flexBasis={48} flexShrink={0} />
                  </Column>
                </Condition>
                <Condition match={display === 'privacy-policy'}>
                  <Column fill>
                    <Layout flexBasis={64} />
                    <Layout>
                      <Text fontFamily='secondary' fontSize='enlarged'>
                        {privacyTitle}
                      </Text>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout>
                      <Text fontSize='regular' lineHeight='primary' color='text.secondary'>
                        {privacyContent}
                      </Text>
                    </Layout>
                    <Layout flexBasis={32} />
                    <Row>
                      <Button width='100%' onClick={close}>
                        OK
                      </Button>
                    </Row>
                    <Layout flexBasis={32} />
                  </Column>
                </Condition>
                <Condition match={display === 'relocation-description'}>
                  <Column fill>
                    <Layout flexBasis={80} flexShrink={0} />
                    <Layout>
                      <Text textTransform='uppercase' fontFamily='secondary' fontSize='semiBig'>
                        {relocationTitle}
                      </Text>
                    </Layout>
                    <Layout flexBasis={48} flexShrink={0} />
                    <Column height='auto'>
                      {serviceDescriptions[language].map(({ id, title, content }) => (
                        <Column key={id} fill>
                          <Row>
                            <Text
                              fontSize='semiLarge'
                              style={{ fontVariantNumeric: 'lining-nums' }}
                              lineHeight='primary'
                              textTransform='uppercase'
                              fontFamily='secondary'
                            >
                              {title}
                            </Text>
                          </Row>
                          <Layout flexBasis={16} />
                          <Row>
                            <Text
                              style={{ fontVariantNumeric: 'lining-nums' }}
                              lineHeight='primary'
                              color='text.secondary'
                              fontSize='tiny'
                            >
                              {content}
                            </Text>
                          </Row>
                          <Layout flexBasis={40} />
                        </Column>
                      ))}
                    </Column>
                  </Column>
                </Condition>
              </Box>
            </Box>
          </Container>
        </ScrollLock>
      </Layout>,
      document.body
    )
  }
  return null
}
