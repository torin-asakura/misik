import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { Drawer }          from '@ui/drawer'
import { Layer }           from '@ui/layer'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Logo }            from '@ui/logo'
import { useLanguage }     from '@globals/language'
import { messages }        from '@globals/messages'

import { NavigationProps } from './navigation.interface'
import { useMenus }        from './data'

const Navigation: FC<NavigationProps> = ({ contacts }) => {
  const [language, setLanguage] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const menus = useMenus()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  const contactsHidden = ['#services', '#work_format', '#reviews']

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Box width='100%' position='fixed' top={0} left={0} height={88} zIndex={10}>
        <Layout flexBasis={[16, 16, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={21} />
          <Layout width='100%' height='100%'>
            <Row alignItems='center'>
              <Layout>
                <Logo />
              </Layout>
              <Layout flexBasis={170} flexShrink={0} />
              <Row alignItems='center' display={['none', 'none', 'flex']}>
                {menus[language][0]?.map(({ label, href }) => (
                  <Condition match={!(contacts && contactsHidden.includes(href))}>
                    <Layout>
                      <NextLink href={href} fontSize='semiRegular'>
                        {label}
                      </NextLink>
                    </Layout>
                    <Layout flexBasis={40} />
                  </Condition>
                ))}
                <Layout flexBasis={40} />
              </Row>
              <Layout flexGrow={3} />
              <Layout display={['none', 'none', 'flex']}>
                <Button width={227} height={46} onClick={() => setVisible(true)}>
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
        <Layout flexBasis={[16, 16, 40]} flexShrink={0} />
      </Box>
    </>
  )
}
export { Navigation }
