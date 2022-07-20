import React             from 'react'
import { FC }            from 'react'

import { Accordeon }     from '@ui/accordeon'
import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'

import { useQuestions }  from './data'

const RelocationFaq: FC = () => {
  const { questions } = useQuestions()

  const mainText = {
    title: 'Часто задаваемые',
    highlighted: 'Вопросы',
  }

  return (
    <Box width='100%' height='100%' justifyContent='center' backgroundColor='background.beige'>
      <Layout width='100%' maxWidth={1243}>
        <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
        <Column>
          <Layout flexBasis={[64, 64, 160]} />
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
          >
            <Layout flexDirection={['column', 'column', 'row']}>
              <Row width={['100%', '100%', 543]}>
                <Text
                  display='inline'
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='thin'
                  fontSize={['semiBig', 'semiBig', 'semiGiant']}
                  lineHeight='small'
                >
                  {mainText.title}
                  <Space />
                  <Text
                    display='inline'
                    color='text.accent'
                    fontFamily='secondary'
                    fontWeight='thin'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    lineHeight='small'
                  >
                    {mainText.highlighted}
                  </Text>
                </Text>
              </Row>
              <Layout flexBasis={40} flexShrink={0} />
              <Box width={['100%', '100%', 660]} height='min-content'>
                <Column>
                  {questions.map(({ id, title, content }) => (
                    <Column key={id} fill>
                      <Divider />
                      <Layout flexBasis={40} />
                      <Accordeon title={title} content={content} isService={false} />
                      <Layout flexBasis={40} />
                    </Column>
                  ))}
                  <Divider />
                </Column>
              </Box>
            </Layout>
          </AnimateOnLoad>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
        <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
      </Layout>
    </Box>
  )
}

export { RelocationFaq }
