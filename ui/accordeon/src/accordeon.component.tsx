import React                from 'react'
import { FC }               from 'react'
import { useAnimation }     from 'framer-motion'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Drawer }           from '@ui/drawer'
import { Layer }            from '@ui/layer'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useLanguage }      from '@globals/language'
import { messages }         from '@globals/messages'

import { AccordeonProps }   from './accordeon.interface'
import { ContentContainer } from './content-container'
import { Minus }            from './icons'
import { Plus }             from './icons'
import { TriggerContainer } from './trigger-container'

const Accordeon: FC<AccordeonProps> = ({ title, content, isService = true }) => {
  const [active, setActive] = useState<boolean>(false)
  const [language] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const controls = useAnimation()

  if (active) {
    controls.start({ height: 'min-content' })
  }

  if (!active) {
    controls.start({ height: 0, overflow: 'hidden' })
  }

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Column width='100%'>
        <TriggerContainer onClick={() => setActive(!active)}>
          <Layout width={24}>
            <Condition match={!active}>
              <Plus />
            </Condition>
            <Condition match={active}>
              <Minus />
            </Condition>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Text
              fontSize={['semiLarge', 'semiLarge', 'large']}
              fontFamily='secondary'
              textTransform='uppercase'
            >
              {title}
            </Text>
          </Layout>
        </TriggerContainer>
        <Layout>
          <ContentContainer animate={controls} transition={{ duration: 0.2 }}>
            <Layout flexBasis={20} flexShrink={0} />
            <Layout flexShrink={0}>
              <Text fontSize='regular' color='text.secondary' lineHeight='medium'>
                {content}
              </Text>
            </Layout>
            <Condition match={isService}>
              <Layout flexBasis={20} flexShrink={0} />
              <Layout flexShrink={0}>
                <Button colors='secondary' width={119} height={26} onClick={() => setVisible(true)}>
                  {messages.orderService[language]}
                </Button>
              </Layout>
            </Condition>
          </ContentContainer>
        </Layout>
      </Column>
    </>
  )
}

export { Accordeon }
