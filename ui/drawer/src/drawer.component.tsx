import React             from 'react'
import { FC }            from 'react'
import { motion }        from 'framer-motion'

import { Button }        from '@ui/button'
import { Condition }     from '@ui/condition'
import { Form }          from '@ui/form'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Box }           from '@ui/layout'
import { Text }          from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { Backdrop }      from './backdrop'
import { Container }     from './container'
import { DrawerProps }   from './drawer.interfaces'
import { CrossIcon }     from './icons'
import { Renderer }      from './renderer'

const Drawer: FC<DrawerProps> = ({ active, onClose, display = 'form' }) => {
  const [language] = useLanguage()
  const { fragments } = useData()

  let title: string = ''
  let content: string = ''
  let privacyTitle: string = ''
  let privacyContent: string = ''

  if (fragments) {
    const titleObj = extractObject('drawer', fragments.feedback[language])
    const privacyObj = extractObject('privacy-policy', fragments.feedback[language])

    title = titleObj?.title
    content = titleObj?.content
    privacyTitle = privacyObj?.title
    privacyContent = privacyObj?.content
  }

  return (
    <Renderer active={active}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', right: '-100%', top: 0, height: '100%', zIndex: 1000 }}
        animate={{ right: 0 }}
        exit={{ right: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <Column width='100%'>
            <Layout flexBasis={20} />
            <Row justifyContent={['flex-start', 'flex-start', 'flex-end']}>
              <Layout flexBasis={10} />
              <Layout>
                <Button colors='transparent' width={24} height={24} px={1} py={1} onClick={onClose}>
                  <CrossIcon />
                </Button>
              </Layout>
              <Layout flexBasis={24} />
            </Row>
            <Layout flexBasis={20} />
            <Condition match={display === 'form'}>
              <Box width={['100%', '100%', 720]} px={['20px', '20px', '64px']}>
                <Column width='100%'>
                  <Layout>
                    <Text
                      fontSize={['moderate', 'moderate', 'increased']}
                      fontFamily='secondary'
                      lineHeight={['normal', 'normal', 'medium']}
                      textTransform='uppercase'
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
            </Condition>
            <Condition match={display === 'privacy-policy'}>
              <Column width={['100%', '100%', 720]} px={['20px', '20px', '64px']}>
                <Layout flexBasis={64} />
                <Layout>
                  <Text fontFamily='secondary' fontSize='enlarged'>
                    {privacyTitle}
                  </Text>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text fontSize='regular' lineHeight='primary' color='text.secondary'>
                    {privacyContent}
                  </Text>
                </Layout>
                <Layout flexBasis={32} />
                <Row>
                  <Button width='100%' onClick={onClose}>
                    OK
                  </Button>
                </Row>
                <Layout flexBasis={32} />
              </Column>
            </Condition>
          </Column>
        </Container>
      </motion.div>
    </Renderer>
  )
}
export { Drawer }
