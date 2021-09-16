import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { useDrawer }   from '@ui/drawer'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Logo }        from '@ui/logo'
import { NextLink }    from '@ui/link'
import { useStep }     from '@ui/spy-scroll'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

import { useMenus }    from './data'

const Navigation: FC = () => {
  const [language, setLanguage] = useLanguage()
  const [, setActive] = useDrawer()
  const menus = useMenus()
  const step = useStep()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  const getColor = (stepIdx) => {
    if (stepIdx === 0) return 'background.transparentWhite'
    if (stepIdx === 1) return 'background.lightBeige'
    if (stepIdx === 2) return 'background.lightBeige'
    if (stepIdx === 3) return 'background.beige'
    if (stepIdx === 4) return 'background.lightBeige'
    if (stepIdx === 5) return 'background.beige'
    if (stepIdx === 6) return 'background.beige'
    return 'background.beige'
  }

  return (
    <Box
      width='100%'
      position='fixed'
      top={0}
      left={0}
      height={88}
      zIndex={10}
      backgroundColor={getColor(step)}
      style={{ transition: '.1s' }}
    >
      <Layout flexBasis={[16, 16, 40]} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={21} />
        <Layout width='100%' height='100%' maxWidth={1840}>
          <Row alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
            <Layout flexBasis={170} />
            <Row alignItems='center' display={['none', 'none', 'flex']}>
              {menus[language][0]?.map(({ label, href }) => (
                <>
                  <Layout>
                    <NextLink href={href} fontSize='semiRegular'>
                      {label}
                    </NextLink>
                  </Layout>
                  <Layout flexBasis={40} />
                </>
              ))}
              <Layout flexBasis={40} />
            </Row>
            <Layout flexGrow={1} />
            <Layout display={['none', 'none', 'flex']}>
              <Button width={227} height={46} onClick={() => setActive(true)}>
                {messages.getConsult[language]}
              </Button>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Button px={0} width={[40, 40, 46]} height={[40, 40, 46]} onClick={switchLanguage}>
                {language.replace('EN', 'РУ').replace('RU', 'EN')}
              </Button>
            </Layout>
          </Row>
        </Layout>
        <Layout flexBasis={21} />
      </Column>
      <Layout flexBasis={[16, 16, 40]} />
    </Box>
  )
}
export { Navigation }
