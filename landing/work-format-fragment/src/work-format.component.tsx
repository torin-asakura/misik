import React              from 'react'
import { FC }             from 'react'

import { Divider }        from '@ui/divider'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Image }          from '@ui/image'
import { Text }           from '@ui/text'
import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'
import { extractObjects } from '@globals/data'
import { sortByOrder }    from '@globals/data'
import { useLanguage }    from '@globals/language'

import { useReviews }     from './data'

const WorkFormat: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const reviews = useReviews()

  let workFormats = []
  let title: string = ''

  if (fragments) {
    workFormats = extractObjects('format', fragments.workformat[language])
    title = extractObject('title', fragments.workformat[language])?.title
  }

  return (
    <Box
      width='100%'
      minHeight={1000}
      backgroundColor='background.lightBeige'
      justifyContent='flex-end'
      id='work_format'
    >
      <Layout maxWidth={1280}>
        <Layout flexBasis={[20, 20, 0]} />
        <Column width='100%'>
          <Layout flexBasis={160} />
          <Layout>
            <Text
              fontFamily='secondary'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              fontWeight='thin'
            >
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={64} />
          <Divider />
          <Layout flexBasis={64} />
          <Layout width='100%' flexDirection={['column', 'column', 'row']}>
            {workFormats.sort(sortByOrder).map(({ title, content }, idx) => (
              <>
                <Box width={['100%', '100%', 400]}>
                  <Column width='100%'>
                    <Box
                      border='1px solid'
                      borderColor='background.lightGray'
                      borderRadius='huge'
                      width={[56, 56, 72]}
                      height={[56, 56, 72]}
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Layout>
                        <Text fontSize='tiny'>{`0${idx + 1}`}</Text>
                      </Layout>
                    </Box>
                    <Layout flexBasis={32} />
                    <Layout>
                      <Text fontFamily='secondary' fontSize='enlarged'>
                        {title}
                      </Text>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout>
                      <Text color='text.secondary' fontSize='regular' lineHeight='primary'>
                        {content}
                      </Text>
                    </Layout>
                  </Column>
                </Box>
                <Layout flexBasis={40} />
              </>
            ))}
          </Layout>
          <Layout flexBasis={240} />
          {/* <Layout width='100%' maxWidth={1280}> */}
          {/*  <Column justifyContent='center' width='100%'> */}
          {/*    <Layout flexBasis={120} /> */}
          {/*    <Row> */}
          {/*      <Box height={64} width='100%' border='1px solid black'> */}
          {/*        Отзывы клиентов */}
          {/*      </Box> */}
          {/*      <Layout flexGrow={1} flexBasis={[64, 64, 0]} /> */}
          {/*      <Box height={64} width='100%' border='1px solid black'> */}
          {/*        Arrows */}
          {/*      </Box> */}
          {/*    </Row> */}
          {/*    <Carousel spaceBetween={40}> */}
          {/*      {reviews.map(({ title, content, excerpt, featuredImage }) => ( */}
          {/*        <> */}
          {/*          <Box width={100} height={100} border='1px solid blue'> */}
          {/*            <Image */}
          {/*              src={featuredImage?.node.link} */}
          {/*              alt={featuredImage?.node.altText} */}
          {/*              contain */}
          {/*            /> */}
          {/*            {title} */}
          {/*            {excerpt} */}
          {/*            {content} */}
          {/*          </Box> */}
          {/*          <Layout flexBasis={32} /> */}
          {/*        </> */}
          {/*      ))} */}
          {/*    </Carousel> */}
          {/*    <Layout flexBasis={120} /> */}
          {/*  </Column> */}
          {/* </Layout> */}
          <Layout flexBasis={160} />
        </Column>
      </Layout>
      <Layout flexBasis={[16, 16, 320]} />
    </Box>
  )
}
export { WorkFormat }
