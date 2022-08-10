import React               from 'react'
import { forwardRef }      from 'react'

import { Divider }         from '@ui/divider'
import { Image }           from '@ui/image'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Link }            from '@ui/link'
import { Text }            from '@ui/text'
import { Space }           from '@ui/text'
import { extractFragment } from '@globals/data'
import { useLanguage }     from '@globals/language'

import { Carousel }        from './carousel'
import { MisikLawIcon }    from './icons'
import { usePartners }     from './data'

const About = forwardRef(({ data }: any, ref: any) => {
  const [language] = useLanguage()
  const partners = usePartners()

  const leadObject = extractFragment('contentAddons', 'lead', data[language])
  const descObject = extractFragment('contentAddons', 'description', data[language])

  const title = leadObject?.content
  const highlighted = leadObject?.highlightedtext
  const content = descObject?.content
  const imageUrl = leadObject?.image?.sourceUrl
  const imageAlt = leadObject?.image?.altText

  return (
    <Box
      width='100%'
      height='100%'
      backgroundColor='background.lightBeige'
      justifyContent='center'
      ref={ref}
    >
      <Layout flexBasis={[0, 0, 397]} />
      <Layout width='100%' maxWidth={1243}>
        <Column width='100%'>
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          <Layout height={['100%', '100%', 'auto']} flexDirection={['column', 'column', 'row']}>
            <Layout justifyContent='center'>
              <Box position='relative' width={[320, 320, 530]} maxHeight={[320, 320, 480]}>
                <Image alt={imageAlt} src={imageUrl} contain />
                <Box position='absolute' top='34%' left={[-7, -7, 3]}>
                  <Layout display={['none', 'none', 'flex']}>
                    <MisikLawIcon width={141} height={141} />
                  </Layout>
                  <Layout display={['flex', 'flex', 'none']}>
                    <MisikLawIcon width={96} height={96} />
                  </Layout>
                </Box>
              </Box>
            </Layout>
            <Layout flexBasis={40} flexShrink={0} />
            <Layout maxWidth={660}>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
              <Column width='100%'>
                <Layout width='100%'>
                  <Text
                    display='inline'
                    fontFamily='secondary'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    fontWeight='thin'
                    color='text.primary'
                    lineHeight='small'
                    textTransform='uppercase'
                  >
                    {title}
                    <Space />
                    <Text
                      fontFamily='secondary'
                      fontSize={['semiBig', 'semiBig', 'semiGiant']}
                      color='text.accent'
                      lineHeight='small'
                      fontWeight='thin'
                      fontStyle='italic'
                    >
                      {highlighted}
                    </Text>
                  </Text>
                </Layout>
                <Layout flexBasis={[24, 24, 101]} />
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
              <Layout flexBasis={[32, 64, 64]} />
              <Box width='100%' justifyContent='center' overflow='hidden'>
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
          <Layout flexBasis={[0, 0, 64]} />
        </Column>
      </Layout>
      <Layout flexBasis={[0, 0, 280]} />
    </Box>
  )
})

export { About }
