import React                      from 'react'
import { FC }                     from 'react'
import { useState }               from 'react'
import { useEffect }              from 'react'

import { Button }                 from '@ui/button'
import { Condition }              from '@ui/condition'
import { Drawer }                 from '@ui/drawer'
import { DrawerMobileNavigation } from '@ui/drawer'
import { Layer }                  from '@ui/layer'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { NextLink }               from '@ui/link'
import { Link }                   from '@ui/link'
import { Logo }                   from '@ui/logo'
import { AnimateOnLoad }          from '@ui/preloader'
import { useLocomotiveScroll }    from '@forks/react-locomotive-scroll'
import { useLanguage }            from '@globals/language'
import { messages }               from '@globals/messages'

import { BurgerIcon }             from './icons'
import { CloseIcon }              from './icons'
import { NavigationListMobile }   from './navigation-list-mobile'
import { useNavigation }          from './data'

const Navigation: FC = () => {
  const navigation = useNavigation()
  const [language, setLanguage] = useLanguage()
  const { scroll } = useLocomotiveScroll()
  const [visible, setVisible] = useState<boolean>(false)
  const [isNavVisible, setNavVisible] = useState<boolean>(true)
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false)

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (instance) => {
        if (instance.delta.y > instance.scroll.y && isNavVisible) {
          setNavVisible(false)
        }

        if (instance.delta.y < instance.scroll.y && !isNavVisible) {
          setNavVisible(true)
        }
      })
    }
  }, [scroll, isNavVisible, setNavVisible])

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <DrawerMobileNavigation active={isMobileNav} onClose={() => setIsMobileNav(false)}>
        <NavigationListMobile />
      </DrawerMobileNavigation>
      <AnimateOnLoad
        style={{
          width: '100%',
          position: 'fixed',
          zIndex: 3000,
          top: 0,
          left: 0,
        }}
        animation={{ y: 0 }}
        initial={{ y: '-100%' }}
        transition={{ duration: 1 }}
        active={isNavVisible}
      >
        <Box
          width='100%'
          zIndex={3000}
          height={[60, 60, 88]}
          backgroundColor={isMobileNav ? 'white' : 'transparent'}
          style={{ transition: '0.4s' }}
        >
          <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
          <Row alignItems='center' height='100%'>
            <Layout minWidth={34} minHeight={32} display={['flex', 'flex', 'none']}>
              <Button
                colors='transparent'
                size='ghost'
                onClick={() => setIsMobileNav(!isMobileNav)}
              >
                <BurgerIcon toggle={isMobileNav} />
              </Button>
              <Button
                colors='transparent'
                size='ghost'
                onClick={() => setIsMobileNav(!isMobileNav)}
              >
                <CloseIcon toggle={isMobileNav} />
              </Button>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={24} flexShrink={0} />
            <Layout>
              <Logo />
            </Layout>
            <Layout flexGrow={1} flexBasis={[0, 0, 168]} flexShrink={0} />
            <Row alignItems='center' justifyContent='flex-start' display={['none', 'none', 'flex']}>
              {navigation[language]?.reverse().map(({ title, elementsMenu, content }) => (
                <>
                  <Layout>
                    <Condition match={elementsMenu?.externalLink !== null}>
                      <Link href={elementsMenu.externalLink} fontSize='semiRegular'>
                        {title}
                      </Link>
                    </Condition>
                    <Condition match={elementsMenu?.externalLink === null}>
                      <NextLink path={content} fontSize='semiRegular'>
                        {title}
                      </NextLink>
                    </Condition>
                  </Layout>
                  <Layout flexBasis={40} />
                </>
              ))}
              <Layout flexBasis={40} />
            </Row>
            <Layout flexGrow={1} />
            <Box width='100%' justifyContent='flex-end'>
              <Layout display={['none', 'none', 'flex']}>
                <Button width={227} height={46} onClick={() => setVisible(true)}>
                  {messages.getConsult[language]}
                </Button>
              </Layout>
              <Layout flexBasis={16} flexShrink={0} />
              <Layout>
                <Button px={0} width={[40, 40, 46]} height={[40, 40, 46]} onClick={switchLanguage}>
                  {language.replace('EN', 'РУ').replace('RU', 'EN')}
                </Button>
              </Layout>
            </Box>
          </Row>
          <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
        </Box>
      </AnimateOnLoad>
    </>
  )
}
export { Navigation }
