import React                         from 'react'
import { FC }                        from 'react'
import { useState }                  from 'react'
import { useEffect }                 from 'react'
import { useRef }                    from 'react'
import ScrollLock                    from 'react-scrolllock'
import { useAnimation }              from 'framer-motion'

import { Button }                    from '@ui/button'
import { Condition }                 from '@ui/condition'
import { Form }                      from '@ui/form'
import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Text }                      from '@ui/text'
import { useData }                   from '@globals/data'
import { extractObject }             from '@globals/data'
import { useLanguage }               from '@globals/language'

import { Blackout }                  from './blackout'
import { DrawerProvider }            from './context'
import { CrossIcon }                 from './icons'
import { Container }                 from './container'
import { createOutsideClickHandler } from './outside-click.handler'

const Drawer: FC = ({ children }) => {
  const [active, setActive] = useState<boolean>(false)
  const [language] = useLanguage()
  const { fragments } = useData()
  const blackoutControls = useAnimation()
  const drawerControls = useAnimation()
  const drawerNode = useRef(null)

  const close = () => {
    drawerControls
      .start({
        x: '100%',
      })
      .then(() => setActive(false))
    blackoutControls.start({
      opacity: 0,
    })
  }

  const duration = 0.3
  const clickHandler = createOutsideClickHandler(drawerNode, close)

  let title: string = ''
  let content: string = ''

  if (fragments) {
    const titleObj = extractObject('drawer', fragments.feedback[language])
    title = titleObj?.title
    content = titleObj?.content
  }

  useEffect(() => {
    if (active) {
      blackoutControls.start({
        opacity: 1,
      })

      drawerControls.start({ x: 0 })
    }
  }, [active, drawerControls, blackoutControls])

  return (
    <DrawerProvider value={[active, setActive]}>
      <Condition match={active}>
        <Blackout
          animate={blackoutControls}
          initial={{ opacity: 0 }}
          transition={{ duration }}
          onClick={clickHandler}
        >
          <Container
            animate={drawerControls}
            width={['100%', '100%', 720]}
            transition={{ duration }}
            initial={{ x: '100%' }}
            ref={drawerNode}
          >
            <Column width='100%'>
              <Layout flexBasis={20} />
              <Row justifyContent={['flex-start', 'flex-start', 'flex-end']}>
                <Layout flexBasis={10} />
                <Layout>
                  <Button colors='transparent' width={24} height={24} px={1} py={1} onClick={close}>
                    <CrossIcon />
                  </Button>
                </Layout>
                <Layout flexBasis={24} />
              </Row>
              <Layout flexBasis={20} />
              <Box px={['20px', '20px', '64px']}>
                <Column width='100%'>
                  <Layout>
                    <Text
                      fontSize={['moderate', 'moderate', 'increased']}
                      fontFamily='secondary'
                      lineHeight={['normal', 'normal', 'medium']}
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
              </Box>
            </Column>
          </Container>
        </Blackout>
      </Condition>
      <ScrollLock isActive={active}>
        <div>{children}</div>
      </ScrollLock>
    </DrawerProvider>
  )
}

export { Drawer }
