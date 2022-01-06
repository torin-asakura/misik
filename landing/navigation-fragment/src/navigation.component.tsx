import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'
import { useEffect }       from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layer }           from '@ui/layer'
import { Logo }            from '@ui/logo'
import { NextLink }        from '@ui/link'
import { useStep }         from '@ui/spy-scroll'
import { useLanguage }     from '@globals/language'
import { messages }        from '@globals/messages'

import { useMenus }        from './data'
import { NavigationProps } from './navigation.interface'

const getColor = (step: string) => {
  if (step === 'hero' || '') return 'background.transparentWhite'
  if (step === 'about') return 'background.lightBeige'
  if (step === 'services') return 'background.beige'
  if (step === 'work-format') return 'background.lightBeige'
  if (step === 'feedback') return 'background.beige'
  return 'background.transparentWhite'
}

const Navigation: FC<NavigationProps> = ({ contacts }) => {
  const [language, setLanguage] = useLanguage()
  const [visible, setVisible] = useState<boolean>(false)
  const [step, setStep] = useState<string>('')
  const menus = useMenus()
  const store = useStep()

  useEffect(() => {
    store.on('update-step', setStep)
  }, [store])

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
