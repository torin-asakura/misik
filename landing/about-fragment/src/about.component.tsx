import React             from 'react'
import { FC }            from 'react'

import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Image }         from '@ui/image'
import { Text }          from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { usePartners }   from './data'

const About: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const partners = usePartners()

  const title = {
    text: '',
    highlighted: '',
  }
  let content: string = ''
  let imageUrl: string = ''
  let alt: string = ''

  if (fragments) {
    const titleObject = extractObject('title', fragments.about[language])
    title.text = titleObject?.title
    title.highlighted = titleObject?.fragmentParams.highlightedText
    content = titleObject?.content
    imageUrl = titleObject?.featuredImage?.node.sourceUrl
    alt = titleObject?.featuredImage?.node.altText
  }

  return (
    <Box width='100%' height='100%'>
      <Layout flexBasis={[20, 20, 0]} />
      <Column width='100%'>
        <Layout flexBasis={160} />
        <Layout flexDirection={['column', 'column', 'row']}>
          <Layout>
            <Box width={['100%', '100%', 480]} height={480}>
              <Image alt={alt} src={imageUrl} contain />
            </Box>
          </Layout>
          <Layout flexBasis={110} />
          <Layout maxWidth={620}>
            <Layout>
              <Column width='100%'>
                <Layout width={['100%', '100%', 620]}>
                  <Text
                    display='block'
                    fontFamily='secondary'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    fontWeight='thin'
                    color='text.primary'
                  >
                    {title.text.replace(title.highlighted, '')}
                    <Text
                      display='block'
                      fontFamily='secondary'
                      fontSize={['semiBig', 'semiBig', 'semiGiant']}
                      color='text.accent'
                      fontWeight='thin'
                    >
                      {title.highlighted}
                    </Text>
                  </Text>
                </Layout>
                <Layout flexBasis={[24, 24, 72]} />
                <Divider />
                <Layout flexBasis={32} />
                <Layout width={['100%', '100%', 620]} height={145}>
                  <Text
                    fontSize={['tiny', 'tiny', 'regular']}
                    color='text.secondary'
                    lineHeight='primary'
                  >
                    {content}
                  </Text>
                </Layout>
              </Column>
            </Layout>
          </Layout>
        </Layout>
        <Layout flexBasis={160} />
        <Layout maxWidth={1280}>
          <Column width='100%'>
            <Layout flexBasis={[64, 64, 0]} />
            <Divider />
            <Layout flexBasis={80} />
            <Row alignItems='center'>
              {partners.map(({ featuredImage }) => (
                <>
                  <Box width={180} height={90} border='1px solid black'>
                    <Image
                      src={featuredImage?.node.sourceUrl}
                      alt={featuredImage?.node.altText}
                      contain
                    />
                  </Box>
                  <Layout flexBasis={40} />
                </>
              ))}
            </Row>
            <Layout flexBasis={[32, 32, 0]} />
          </Column>
        </Layout>
        <Layout flexBasis={80} />
      </Column>
      <Layout flexBasis={[20, 20, 0]} />
    </Box>
  )
}
export { About }
