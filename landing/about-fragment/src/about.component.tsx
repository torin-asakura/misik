import React             from 'react'
import { FC }            from 'react'

import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Image }         from '@ui/image'
import { Text }          from '@ui/text'
import { Link }          from '@ui/link'
import { useScrollTrap } from '@ui/spy-scroll'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { usePartners }   from './data'
import { Carousel }      from './carousel'

const About: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const partners = usePartners()
  const trapRef = useScrollTrap('about')

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
    <Box
      width='100%'
      height='100vh'
      backgroundColor='background.lightBeige'
      minHeight={[1703, 1703, 'auto']}
      ref={trapRef}
    >
      <Layout flexBasis={[20, 20, 240]} />
      <Layout width='100%' maxWidth={1280}>
        <Layout flexBasis={[20, 20, 120]} />
        <Column width='100%'>
          <Divider />
          <Layout flexBasis={160} />
          <Layout height={['100%', '100%', 'auto']} flexDirection={['column', 'column', 'row']}>
            <Layout flexBasis={[20, 20, 150]} />
            <Layout>
              <Box width={['100%', '100%', 480]} height={480}>
                <Image alt={alt} src={imageUrl} contain />
              </Box>
            </Layout>
            <Layout flexBasis={110} />
            <Layout height={['auto', 'auto', '100%']} maxWidth={620}>
              <Layout flexBasis={[20, 20, 0]} />
              <Column width='100%'>
                <Layout width={['100%', '100%', 620]}>
                  <Text
                    display='inline'
                    fontFamily='secondary'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    fontWeight='thin'
                    color='text.primary'
                    textTransform='uppercase'
                  >
                    {title.text?.replace(title.highlighted, '')}
                    <Text
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
                <Layout width={['100%', '100%', 620]}>
                  <Text
                    fontSize={['tiny', 'tiny', 'regular']}
                    color='text.secondary'
                    lineHeight='primary'
                  >
                    {content}
                  </Text>
                </Layout>
              </Column>
              <Layout flexBasis={[20, 20, 0]} />
            </Layout>
          </Layout>
          <Layout flexBasis={[0, 0, 160]} />
          <Layout maxWidth={1280}>
            <Column width='100%' justifyContent={['center', 'center', 'flex-start']}>
              <Layout flexBasis={[64, 64, 0]} />
              <Divider />
              <Layout flexBasis={80} />
              <Carousel>
                {partners.map(({ featuredImage, clientsParameters }) => (
                  <Box width={180} height={90}>
                    <Link href={clientsParameters?.ssylka} target='_blank'>
                      <Image
                        src={featuredImage?.node.sourceUrl}
                        alt={featuredImage?.node.altText}
                        contain
                      />
                    </Link>
                  </Box>
                ))}
              </Carousel>
              <Layout flexBasis={[32, 32, 0]} />
            </Column>
          </Layout>
          <Layout flexBasis={80} />
        </Column>
      </Layout>
      <Layout flexBasis={[16, 16, 240]} />
    </Box>
  )
}
export { About }
