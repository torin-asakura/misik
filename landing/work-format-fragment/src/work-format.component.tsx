/* eslint-disable no-shadow */

import React              from 'react'
import { FC }             from 'react'
import { forwardRef }     from 'react'

import { Divider }        from '@ui/divider'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useScrollTrap }  from '@ui/spy-scroll'
import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'
import { extractObjects } from '@globals/data'
import { sortByOrder }    from '@globals/data'
import { useLanguage }    from '@globals/language'

const WorkFormat: FC = forwardRef((ref: any) => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const trapRef = useScrollTrap('work-format')

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
      id='work_format'
      ref={ref}
    >
      <Layout flexBasis={[0, 0, 240]} />
      <Layout maxWidth={1830}>
        <Layout flexBasis={[20, 20, 210]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={120} />
          <Layout>
            <Text
              fontFamily='secondary'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              fontWeight='thin'
              textTransform='uppercase'
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
                <Box width='100%'>
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
                      <Text fontFamily='secondary' fontSize='enlarged' textTransform='uppercase'>
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
          {/* TODO update with reviews */}
          {/* <Layout flexBasis={240} /> */}
          {/* <Layout width='100%' maxWidth={1280}> */}
          {/*  <CarouselProvider> */}
          {/* <Column fill justifyContent='center'> */}
          {/*   <Row alignItems='center' justifyContent='space-between'> */}
          {/*     <Layout> */}
          {/*       <Text textTransform='uppercase' fontSize='semiGiant' fontFamily='secondary'> */}
          {/*         {reviewsTitle} */}
          {/*       </Text> */}
          {/*     </Layout> */}
          {/*     <Box> */}
          {/*       <Layout> */}
          {/*         <CarouselConsumer> */}
          {/*           {({ slideLeft }) => ( */}
          {/*             <ArrowLeft onClick={slideLeft} /> */}
          {/*           )} */}
          {/*         </CarouselConsumer> */}
          {/*       </Layout> */}
          {/*       <Layout flexBasis={16} flexShrink={0} /> */}
          {/*       <Layout> */}
          {/*         <CarouselConsumer> */}
          {/*           {({ slideRight }) => ( */}
          {/*             <ArrowRight onClick={slideRight} /> */}
          {/*           )} */}
          {/*         </CarouselConsumer> */}
          {/*       </Layout> */}
          {/*     </Box> */}
          {/*   </Row> */}
          {/*   <Layout flexBasis={64} /> */}
          {/*   <Carousel width='100%' height='100%' spaceBetween={64} slidesPerView={2} centered={false}> */}
          {/*     {reviews.reduce((acc, item) => [...acc, item, item],[]).map(({ title, content, excerpt, featuredImage }) => ( */}
          {/*         <Box width={[315,315,620]}> */}
          {/*           <Column fill> */}
          {/*             <Divider /> */}
          {/*             <Layout flexBasis={40} /> */}
          {/*             <Box fill> */}
          {/*               <Column> */}
          {/*                 <Box width={64} height={64} borderRadius='huge' overflow='hidden'> */}
          {/*                   <Image */}
          {/*                     src={featuredImage?.node.link} */}
          {/*                     alt={featuredImage?.node.altText} */}
          {/*                     contain */}
          {/*                   /> */}
          {/*                 </Box> */}
          {/*               </Column> */}
          {/*               <Layout flexBasis={24} /> */}
          {/*               <Column> */}
          {/*                 <Layout> */}
          {/*                   <Text fontSize='semiLarge' fontFamily='secondary' textTransform='uppercase' fontWeight='medium'> */}
          {/*                     {title} */}
          {/*                   </Text> */}
          {/*                 </Layout> */}
          {/*                 <Layout flexBasis={8} /> */}
          {/*                 <Layout> */}
          {/*                   <Text fontSize='small' color='text.secondary'> */}
          {/*                     {excerpt} */}
          {/*                   </Text> */}
          {/*                 </Layout> */}
          {/*                 <Layout flexBasis={29} /> */}
          {/*                 <Layout> */}
          {/*                   <Text fontSize='small' color='text.secondary'> */}
          {/*                     {content} */}
          {/*                   </Text> */}
          {/*                 </Layout> */}
          {/*               </Column> */}
          {/*             </Box> */}
          {/*           </Column> */}
          {/*         </Box> */}
          {/*     ))} */}
          {/*   </Carousel> */}
          {/*   <Layout flexBasis={120} /> */}
          {/* </Column> */}
          {/*  </CarouselProvider> */}
          {/* </Layout> */}
          {/* <Layout flexBasis={120} /> */}
        </Column>
      </Layout>
      <Layout flexBasis={[16, 16, 240]} />
    </Box>
  )
})

export { WorkFormat }
