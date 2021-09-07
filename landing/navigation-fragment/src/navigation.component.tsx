import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Logo }        from '@ui/logo'
import { NextLink }    from '@ui/link'
import { useLanguage } from '@globals/language'

const Navigation: FC = () => {
  const [language, setLanguage] = useLanguage()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  return (
    <Box width='100%' height={88}>
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={21} />
        <Layout width='100%' height='100%' maxWidth={1840}>
          <Row alignItems='center'>
            <Layout>
              <Box width={190} height={32} border='1px solid black'>
                {/* TODO replace with real one */}
                <Logo />
              </Box>
            </Layout>
            <Layout flexBasis={170} />
            <Row alignItems='center' display={['none', 'none', 'flex']}>
              <Layout>
                <NextLink href='/' fontSize='semiRegular'>
                  Link
                </NextLink>
              </Layout>
              <Layout flexBasis={40} />
            </Row>
            <Layout display={['none', 'none', 'flex']}>
              <Button width={227} height={46}>
                Получить консультацию
              </Button>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Button px={0} width={[40, 40, 46]} height={[40, 40, 46]} onClick={switchLanguage}>
                {language.replace('RU', 'РУ')}
              </Button>
            </Layout>
          </Row>
        </Layout>
        <Layout flexBasis={21} />
      </Column>
    </Box>
  )
}
export { Navigation }
