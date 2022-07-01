import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
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

const getColor = (step: number) => {
  if (step === 0) return 'background.transparentWhite'
  if (step === 1) return 'background.lightBeige'
  if (step === 2) return 'background.beige'
  if (step === 3) return 'background.lightBeige'
  if (step === 4) return 'background.beige'
  return 'background.transparentWhite'
}

const Navigation: FC<NavigationProps> = ({ contacts, activeDot }) => {
  const [language, setLanguage] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const menus = useMenus()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  const contactsHidden = ['#services', '#work_format', '#reviews']

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Box
        width='100%'
        position='fixed'
        top={0}
        left={0}
        height={88}
        zIndex={10}
        backgroundColor={getColor(activeDot!)}
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
              <Layout flexGrow={1} />
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
        <Layout flexBasis={[16, 16, 40]} />
      </Box>
    </>
  )
}
export { Navigation }
