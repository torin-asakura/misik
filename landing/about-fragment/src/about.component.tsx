import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Image }         from '@ui/image'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { usePartners }   from './data'

const About: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const partners = usePartners()

  let title: string = ''
  let content: string = ''
  let imageUrl: string = ''
  let alt: string = ''

  if (fragments) {
    const titleObject = extractObject('title', fragments.about[language])
    title = titleObject?.title
    content = titleObject?.content
    imageUrl = titleObject?.featuredImage.node.link
    alt = titleObject?.featuredImage.node.altText
  }

  return (
    <Box border='1px solid red' width='100%' height='100%'>
      <Column width='100%'>
        <Layout flexBasis={100} />
        <Row>
          <Box width={200} height={220} border='1px solid black' />
          <Layout flexBasis={80} />
          <Box width={200} height={220} border='1px solid black' />
        </Row>
        <Layout flexBasis={80} />
        <Box width='100%' height={1} backgroundColor='black' />
        <Layout flexBasis={160} />
        <Layout flexDirection={['column', 'column', 'row']}>
          <Layout>
            <Box width={['100%', '100%', 480]} height={480} border='1px solid black'>
              <Image alt={alt} src={imageUrl} contain />
            </Box>
          </Layout>
          <Layout flexBasis={110} />
          <Layout maxWidth={620}>
            <Layout>
              <Column width='100%'>
                <Layout>
                  <Box width={['100%', '100%', 620]} height={231} border='1px solid black'>
                    {title}
                  </Box>
                </Layout>
                <Layout flexBasis={72} />
                <Box width='100%' height={1} backgroundColor='black' />
                <Layout flexBasis={32} />
                <Layout>
                  <Box width={['100%', '100%', 620]} height={145} border='1px solid black'>
                    {content}
                  </Box>
                </Layout>
              </Column>
            </Layout>
          </Layout>
        </Layout>
        <Layout flexBasis={160} />
        <Layout maxWidth={1280}>
          <Column width='100%'>
            <Box width='100%' height={1} backgroundColor='black' />
            <Layout flexBasis={80} />
            <Row alignItems='center'>
              {partners.map(({ featuredImage }) => (
                <>
                  <Box width={180} height={90} border='1px solid black'>
                    <Image src={featuredImage.node.link} alt={featuredImage.node.altText} contain />
                  </Box>
                  <Layout flexBasis={40} />
                </>
              ))}
            </Row>
          </Column>
        </Layout>
        <Layout flexBasis={80} />
      </Column>
    </Box>
  )
}
export { About }
