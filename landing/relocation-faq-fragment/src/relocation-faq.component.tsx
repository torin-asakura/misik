import React             from 'react'
import { FC }            from 'react'
import { useMemo }       from 'react'

import { Accordeon }     from '@ui/accordeon'
import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { useFAQ }        from './data'

const RelocationFaq: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  const faqs = useFAQ()

  let { title, highlighted } = useMemo(() => {
    if (!(fragments && fragments.relocationfaq)) {
      return { title: '', highlighted: '' }
    }

    const titleObj = extractObject('title', fragments.relocationfaq[language])
    title = titleObj?.title
    highlighted = titleObj?.fragmentParams.highlightedText

    return {
      title,
      highlighted,
    }
  }, [fragments, language])

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
                  {title}
                  <Space />
                  <Text
                    display='inline'
                    color='text.accent'
                    fontFamily='secondary'
                    fontWeight='thin'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    lineHeight='small'
                  >
                    {highlighted}
                  </Text>
                </Text>
              </Row>
              <Layout flexBasis={40} flexShrink={0} />
              <Box width={['100%', '100%', 660]} height='min-content'>
                <Column>
                  {faqs[language].map(({ id, title: titleFaq, content }) => (
                    <Column key={id} fill>
                      <Divider />
                      <Layout flexBasis={40} />
                      <Accordeon title={titleFaq} content={content} isService={false} />
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
