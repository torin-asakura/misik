import DOMPurify            from 'dompurify'
import React                from 'react'
import { FC }               from 'react'
import { useAnimation }     from 'framer-motion'
import { useState }         from 'react'
import { useRef }           from 'react'
import { useEffect }        from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Drawer }           from '@ui/drawer'
import { Image }            from '@ui/image'
import { Layer }            from '@ui/layer'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useLanguage }      from '@globals/language'
import { messages }         from '@globals/messages'
import { useHover }         from '@ui/utils'

import { AccordeonProps }   from './accordeon.interface'
import { ArrowContainer }   from './arrow-container'
import { ContentContainer } from './content-container'
import { Minus }            from './icons'
import { Arrow }            from './icons'
import { Plus }             from './icons'
import { TriggerContainer } from './trigger-container'

const Accordeon: FC<AccordeonProps> = ({
  title,
  content,
  isService = true,
  variant = 'primary',
  image,
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [language] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const controls = useAnimation()
  const [hiddenContent, setHiddenContent] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()

  const contentRef = useRef(null as null | HTMLDivElement)

  if (active) {
    controls.start({ height: 'min-content' })
  }

  if (!active) {
    controls.start({ height: variant === 'primary' ? 0 : 70, overflow: 'hidden' })
  }

  useEffect(() => {
    if (contentRef && contentRef.current) {
      setHiddenContent(contentRef!.current.clientHeight < 80)
    }
  }, [contentRef])

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Layer scroll visible={visible} onClose={() => setVisible(false)} />
      <Column width='100%'>
        <Condition match={variant === 'primary'}>
          <TriggerContainer onClick={() => setActive(!active)}>
            <Layout width={24} {...hoverProps}>
              <Condition match={!active}>
                <Plus hover={hover} />
              </Condition>
              <Condition match={active}>
                <Minus />
              </Condition>
            </Layout>
            <Layout flexBasis={20} />
            <Layout {...hoverProps}>
              <Text
                fontSize={['semiLarge', 'semiLarge', 'large']}
                fontFamily='secondary'
                textTransform='uppercase'
                lineHeight='small'
                color={hover && !active ? 'text.accent' : 'text.primary'}
                style={{ transition: '.2s' }}
              >
                {title}
              </Text>
            </Layout>
          </TriggerContainer>
          <Layout>
            <ContentContainer animate={controls} transition={{ duration: 0.2 }}>
              <Layout flexBasis={20} flexShrink={0} />
              <Layout flexShrink={0}>
                <Layout flexBasis={44} flexShrink={0} />
                <Column>
                  {content.split('<point>').map((point) => (
                    <Text fontSize='regular' color='text.secondary' lineHeight='big'>
                      {point.replace('</point>', '')}
                    </Text>
                  ))}
                </Column>
              </Layout>
              <Condition match={isService}>
                <Layout flexBasis={20} flexShrink={0} />
                <Layout flexShrink={0}>
                  <Layout flexBasis={44} flexShrink={0} />
                  <Button
                    colors='secondary'
                    width={119}
                    height={26}
                    onClick={() => setVisible(true)}
                  >
                    {messages.orderService[language]}
                  </Button>
                </Layout>
              </Condition>
            </ContentContainer>
          </Layout>
        </Condition>
        <Condition match={variant === 'secondary'}>
          <Column>
            <Row>
              <Box width={72} height={72} borderRadius='max' border='1 px solid black'>
                <Image alt={image?.node?.altText} src={image?.node?.sourceUrl} />
              </Box>
            </Row>
            <Layout flexBasis={24} />
            <Row>
              <Text
                color='text.primary'
                fontSize='large'
                lineHeight='small'
                fontFamily='secondary'
                textTransform='uppercase'
                fontWeight='medium'
              >
                {title}
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <ContentContainer animate={controls} transition={{ duration: 0.2 }}>
              <Row ref={contentRef}>
                <Text
                  color='text.secondary'
                  fontSize={['tiny', 'tiny', 'regular']}
                  lineHeight='big'
                >
                  <Column dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
                </Text>
              </Row>
              <Condition match={!hiddenContent}>
                <Layout flexBasis={[20, 20, 80]} />
              </Condition>
            </ContentContainer>
          </Column>
          <Condition match={!hiddenContent}>
            <TriggerContainer onClick={() => setActive(!active)}>
              <Box width='100%' boxShadow='lightBeige'>
                <Column fill alignItems='center' justifyContent='center'>
                  <Layout flexBasis={12} />
                  <Row>
                    <Layout>
                      <Text fontSize='tiny' lineHeight='small'>
                        {messages.more[language]}
                      </Text>
                    </Layout>
                    <Layout flexBasis={10} />
                    <ArrowContainer isOpen={active} alignItems='center'>
                      <Arrow />
                    </ArrowContainer>
                  </Row>
                </Column>
              </Box>
            </TriggerContainer>
          </Condition>
        </Condition>
      </Column>
    </>
  )
}

export { Accordeon }
