import React             from 'react'
import { FC }            from 'react'
import { useMemo }       from 'react'

import { Image }         from '@ui/image'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

const RelocationOurRole: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let { title, highlighted, imageUrl, imageAlt, content, additionalContent } = useMemo(() => {
    if (!(fragments && fragments.relocationourrole)) {
      return {
        title: '',
        highlighted: '',
        imageUrl: '',
        imageAlt: '',
        content: '',
        additionalContent: '',
      }
    }

    const titleObj = extractObject('title', fragments.relocationourrole[language])
    const contentObj = extractObject('content', fragments.relocationourrole[language])
    const additionalContentObj = extractObject(
      'additional-content',
      fragments.relocationourrole[language]
    )
    title = titleObj?.title
    highlighted = titleObj?.fragmentParams.highlightedText
    content = contentObj?.title
    additionalContent = additionalContentObj?.title
    imageUrl = titleObj?.featuredImage?.node.sourceUrl
    imageAlt = titleObj?.featuredImage?.node.altText

    return {
      title,
      highlighted,
      imageUrl,
      imageAlt,
      content,
      additionalContent,
    }
  }, [fragments, language])

  return (
    <Box width='100%' backgroundColor='background.lightBeige' justifyContent='center'>
      <Layout width='100%' maxWidth={1243}>
        <AnimateOnLoad
          initial={{ opacity: 0, y: '100%' }}
          transition={{ duration: 1 }}
          animation={{ y: 0, opacity: 1 }}
        >
          <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
          <Column>
            <Layout flexBasis={[64, 64, 160]} />
            <Layout
              alignItems='flex-end'
              flexDirection={['column-reverse', 'column-reverse', 'row']}
            >
              <Column height='auto' width={['100%', '100%', 660]}>
                <Layout>
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
                </Layout>
                <Layout flexBasis={[16, 16, 32]} flexShrink={0} />
                <Column>
                  <Row>
                    <Text
                      color='text.secondary'
                      fontSize={['tiny', 'tiny', 'regular']}
                      lineHeight='big'
                    >
                      {content}
                    </Text>
                  </Row>
                  <Layout flexBasis={[0, 0, 32]} />
                  <Row>
                    <Text
                      color='text.secondary'
                      fontSize={['tiny', 'tiny', 'regular']}
                      lineHeight='big'
                    >
                      {additionalContent}
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Layout flexBasis={40} flexShrink={0} />
              <Box width={[335, 335, 543]} height={[216, 216, 350]}>
                <Image alt={imageAlt} src={imageUrl} contain />
              </Box>
            </Layout>
            <Layout flexBasis={[64, 64, 160]} />
          </Column>
          <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
        </AnimateOnLoad>
      </Layout>
    </Box>
  )
}

export { RelocationOurRole }
