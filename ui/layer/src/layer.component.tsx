/* eslint-disable react-hooks/rules-of-hooks */

import React             from 'react'
import { FC }            from 'react'
import { useEffect }     from 'react'
import { useCallback }   from 'react'
import ScrollLock        from 'react-scrolllock'
import { createPortal }  from 'react-dom'
import document          from 'global/document'
import { nanoid }        from 'nanoid'
import { useAnimation }  from 'framer-motion'

import { Button }        from '@ui/button'
import { Condition }     from '@ui/condition'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'
import { Form }          from '@ui/form'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { Container }     from './container'
import { LayerProps }    from './layer.interface'
import { CrossIcon }     from './icons'

export const Layer: FC<LayerProps> = ({
  children,
  visible,
  onClose,
  scroll = false,
  opacity = 'none',
  center = false,
  top = 0,
  left = 0,
  privacyPolicy = false,
  ...props
}) => {
  const blackoutId = nanoid()
  const childrenId = nanoid()
  const main = useAnimation()
  const [language] = useLanguage()
  const { fragments } = useData()

  let title: string = ''
  let content: string = ''
  let privacyTitle: string = ''
  let privacyContent: string = ''

  if (fragments) {
    const titleObj = extractObject('drawer', fragments.feedback[language])
    const privacyObj = extractObject('privacy-policy', fragments.feedback[language])

    title = titleObj?.title
    content = titleObj?.content
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
            right='20px'
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
            alignItems={['center', 'center', 'auto']}
          >
            <Box
              width={['100%', '100%', 720]}
              px={['20px', '20px', '64px']}
              backgroundColor='background.beige'
              borderRadius='atomic'
            >
              <Condition match={!privacyPolicy}>
                <Column fill>
                  <Layout flexBasis={64} />
                  <Layout>
                    <Text
                      fontSize={['moderate', 'moderate', 'increased']}
                      fontFamily='secondary'
                      lineHeight={['normal', 'normal', 'medium']}
                      textTransform='uppercase'
                    >
                      {title}
                    </Text>
                  </Layout>
                  <Layout flexBasis={16} />
                  <Text color='text.secondary' fontSize={['tiny', 'tiny', 'regular']}>
                    {content}
                  </Text>
                  <Layout />
                  <Layout flexBasis={50} />
                  <Layout>
                    <Form />
                  </Layout>
                </Column>
              </Condition>
              <Condition match={privacyPolicy}>
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
            </Box>
          </Box>
        </Container>
      </ScrollLock>,
      document.body
    )
  }
  return null
}
