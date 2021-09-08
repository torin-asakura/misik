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
    <Box width='100%' height={88} position='sticky' top={0} left={0}>
      <Layout flexBasis={[16, 16, 0]} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={21} />
        <Layout width='100%' height='100%' maxWidth={1840}>
          <Row alignItems='center'>
            <Layout>
              <Logo />
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
              <Button width={227} height={46} disabled>
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
      <Layout flexBasis={[16, 16, 0]} />
    </Box>
  )
}
export { Navigation }
