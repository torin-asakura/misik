import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { useLanguage } from '@globals/language'

const Navigation: FC = () => {
  const [language, setLanguage] = useLanguage()

  const switchLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU')
  }

  return (
    <Box width='100%' height={88} justifyContent='center' border='1px solid blue'>
      <Layout width='100%' height='100%' maxWidth={1840}>
        <Row alignItems='center'>
          <Layout>
            <Box width={190} height={32} border='1px solid black'>
              Icon
            </Box>
          </Layout>
          <Layout flexBasis={170} />
          <Row alignItems='center' display={['none', 'none', 'flex']}>
            <Layout>
              <Box width={49} height={19} border='1px solid black'>
                Link
              </Box>
            </Layout>
            <Layout flexBasis={40} />
            <Layout>
              <Box width={49} height={19} border='1px solid black'>
                Link
              </Box>
            </Layout>
          </Row>
          <Layout display={['none', 'none', 'flex']}>
            <Box width={227} height={46} border='1px solid black'>
              Get consult
            </Box>
          </Layout>
          <Layout flexBasis={16} />
          <Layout>
            <Box width={46} height={46} border='1px solid black' onClick={switchLanguage}>
              {language}
            </Box>
          </Layout>
        </Row>
      </Layout>
    </Box>
  )
}
export { Navigation }
