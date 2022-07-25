import React             from 'react'
import { forwardRef }    from 'react'

import { Divider }       from '@ui/divider'
import { Image }         from '@ui/image'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Link }          from '@ui/link'
import { Text }          from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { Carousel }      from './carousel'
import { MisikLawIcon }  from './icons'
import { usePartners }   from './data'

const About = forwardRef((props, ref: any) => {
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
    <Box
      width='100%'
      height='100%'
      backgroundColor='background.lightBeige'
      justifyContent='center'
      ref={ref}
    >
      <Layout flexBasis={[0, 0, 616]} maxWidth={['auto', 'auto', 430]} />
      <Layout width='100%' maxWidth={1830}>
        <Column width='100%'>
          <Divider />
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          <Layout height={['100%', '100%', 'auto']} flexDirection={['column', 'column', 'row']}>
            <Layout justifyContent='center'>
              <Box position='relative' width={[320, 320, 480]} maxHeight={[320, 320, 480]}>
                <Image alt={alt} src={imageUrl} contain />
                <Box position='absolute' top='30%' left={-16}>
                  <MisikLawIcon />
                </Box>
              </Box>
            </Layout>
            <Layout flexBasis={[40, 40, 204]} />
            <Layout maxWidth={980}>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
              <Column width='100%'>
                <Layout width='100%'>
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
                      fontStyle='italic'
                    >
                      {title.highlighted}
                    </Text>
                  </Text>
                </Layout>
                <Layout flexBasis={[24, 24, 72]} />
                <Divider />
                <Layout flexBasis={[24, 24, 32]} />
                <Layout width='100%'>
                  <Text
                    fontSize={['tiny', 'tiny', 'regular']}
                    color='text.secondary'
                    lineHeight='primary'
                  >
                    {content}
                  </Text>
                </Layout>
              </Column>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
            </Layout>
          </Layout>
          <Layout flexBasis={[0, 0, 160]} />
          <Layout width='100%'>
            <Column
              width='100%'
              alignItems='center'
              justifyContent={['center', 'center', 'flex-start']}
            >
              <Layout flexBasis={[64, 64, 0]} />
              <Layout width='100%' maxWidth={1243}>
                <Divider />
              </Layout>
              <Layout flexBasis={80} />
              <Box width='100%' overflow='hidden'>
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
              </Box>
              <Layout flexBasis={[32, 32, 0]} />
            </Column>
          </Layout>
          <Layout flexBasis={[0, 0, 80]} />
        </Column>
      </Layout>
      <Layout flexBasis={[0, 0, 280]} />
    </Box>
  )
})

export { About }
