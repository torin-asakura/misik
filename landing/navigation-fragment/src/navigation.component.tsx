import React                  from 'react'
import { FC }                 from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useState }           from 'react'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { Drawer }             from '@ui/drawer'
import { Layer }              from '@ui/layer'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Link }               from '@ui/link'
import { NextLink }           from '@ui/link'
import { Logo }               from '@ui/logo'
import { AnimateOnLoad }      from '@ui/preloader'
import { useLanguage }        from '@globals/language'
import { messages }           from '@globals/messages'

import { NavigationProps }    from './navigation.interface'
import { useMenus }           from './data'

const Navigation: FC<NavigationProps> = ({ home }) => {
  const [language, setLanguage] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const menus = useMenus()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <AnimateOnLoad
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          height: 88,
          zIndex: 10,
        }}
        animation={{ y: 0 }}
        initial={{ y: '-100%' }}
        transition={{ duration: 1 }}
      >
        <Layout flexBasis={[16, 16, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={21} />
          <Layout width='100%' height='100%'>
            <Row alignItems='center'>
              <Box>
                <Logo />
              </Box>
              <Layout flexGrow={1} flexBasis={150} />
              <Row
                maxWidth={797}
                alignItems='center'
                justifyContent='flex-start'
                display={['none', 'none', 'flex']}
              >
                {menus[language][0]?.map(({ label, href }) => (
                  <>
                    <Layout>
                      <Condition match={Array.from(href)[0] === '#'}>
                        <Condition match={home}>
                          <ScrollLink spy smooth to={href.replace('#', '')}>
                            {/* eslint-disable-next-line */}
                            <Link fontSize='semiRegular' onClick={(e) => e.preventDefault()}>
                              {label}
                            </Link>
                          </ScrollLink>
                        </Condition>
                        <Condition match={!home}>
                          <NextLink fontSize='semiRegular' path='/'>
                            {label}
                          </NextLink>
                        </Condition>
                      </Condition>
                      <Condition match={Array.from(href)[0] !== '#'}>
                        <NextLink path={href} fontSize='semiRegular'>
                          {label}
                        </NextLink>
                      </Condition>
                    </Layout>
                    <Layout flexBasis={40} />
                  </>
                ))}
                <Layout flexBasis={40} />
              </Row>
              <Layout flexGrow={1} flexBasis={[16, 16, 1120]} />
              <Box position='absolute' right={[30, 30, 40]}>
                <Layout display={['none', 'none', 'flex']}>
                  <Button width={227} height={46} onClick={() => setVisible(true)}>
                    {messages.getConsult[language]}
                  </Button>
                </Layout>
                <Layout flexBasis={16} flexShrink={0} />
                <Layout>
                  <Button
                    px={0}
                    width={[40, 40, 46]}
                    height={[40, 40, 46]}
                    onClick={switchLanguage}
                  >
                    {language.replace('EN', 'РУ').replace('RU', 'EN')}
                  </Button>
                </Layout>
              </Box>
            </Row>
          </Layout>
          <Layout flexBasis={21} />
        </Column>
        <Layout flexBasis={[20, 20, 240]} />
      </AnimateOnLoad>
    </>
  )
}
export { Navigation }
