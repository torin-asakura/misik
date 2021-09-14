import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'
import { motion }          from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

import { Condition }       from '@ui/condition'
import { Button }          from '@ui/button'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { Text }            from '@ui/text'
import { messages }        from '@globals/messages'
import { useLanguage }     from '@globals/language'

import { Minus }           from './icons'
import { Plus }            from './icons'
import { AccordeonProps }  from './accordeon.interface'

// TODO animate

const Accordeon: FC<AccordeonProps> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false)
  const [language] = useLanguage()

  return (
    <Column width='100%'>
      <motion.header
        initial={false}
        style={{
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={() => setActive(!active)}
      >
        <Row height='100%' alignItems='center'>
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
            <Text fontSize='large' fontFamily='secondary'>
              {title}
            </Text>
          </Layout>
        </Row>
      </motion.header>
      <Condition match={active}>
        <Layout flexBasis={20} />
      </Condition>
      <Layout>
        <AnimatePresence initial={false}>
          {active && (
            <>
              <motion.section
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Column width='100%'>
                  <Layout>
                    <Text fontSize='regular' color='text.secondary' lineHeight='medium'>
                      {content}
                    </Text>
                  </Layout>
                  <Layout flexBasis={20} />
                  <Layout>
                    <Link href='#feedback'>
                      <Button colors='secondary' width={119} height={26}>
                        {messages.orderService[language]}
                      </Button>
                    </Link>
                  </Layout>
                </Column>
              </motion.section>
            </>
          )}
        </AnimatePresence>
      </Layout>
    </Column>
  )
}

export { Accordeon }
