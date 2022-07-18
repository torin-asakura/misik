import React                    from 'react'
import { Children }             from 'react'
import { Swiper as SwiperCore } from 'swiper'
import { Swiper }               from 'swiper/react'
import { SwiperSlide }          from 'swiper/react'
import { forwardRef }           from 'react'
import { useState }             from 'react'
import { useSwiper }            from 'swiper/react'

import { Button }               from '@ui/button'
import { Box }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Text }                 from '@ui/text'
import { normalizeString }      from '@globals/data'
import { useLanguage }          from '@globals/language'
import { messages }             from '@globals/messages'

import { ArrowRightIcon }       from './icons'
import { ArrowLeftIcon }        from './icons'
import { Item }                 from './item'
import { useReviews }           from './data'

export const Reviews = forwardRef((props, ref) => {
  const [language] = useLanguage()
  const reviews = useReviews()
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  const carouselChildren = reviews[language].map((review) => (
    <Item
      title={normalizeString(review.title)}
      description={normalizeString(review.excerpt)}
      content={normalizeString(review.content)}
      imageUrl={review.featuredImage?.node?.mediaItemUrl}
    />
  ))

  const CarouselControlsExporter = () => {
    const swiperInstance = useSwiper()

    if (!swiper) setSwiper(swiperInstance)

    return null
  }

  return (
    <Box
      ref={ref as any}
      px={['32px', '32px', '0px']}
      backgroundColor='background.lightBeige'
      justifyContent='center'
    >
      <Layout width='100%' maxWidth={1830}>
        <Column justifyContent='center' width='100%'>
          <Layout flexBasis={120} />
          <Row alignItems='center'>
            <Text
              fontFamily='secondary'
              fontWeight='thin'
              textTransform='uppercase'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
            >
              {messages.reviews[language]}
            </Text>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Layout width={128}>
              <Layout display={['none', 'none', 'flex']}>
                <Button width={44} onClick={() => swiper?.slidePrev()}>
                  <Layout>
                    <ArrowLeftIcon />
                  </Layout>
                </Button>
              </Layout>
              <Layout flexBasis={16} />
              <Layout display={['none', 'none', 'flex']}>
                <Button width={44} onClick={() => swiper?.slideNext()}>
                  <Layout>
                    <ArrowRightIcon />
                  </Layout>
                </Button>
              </Layout>
            </Layout>
          </Row>
          <Layout flexBasis={48} />
          <Layout display={['none', 'none', 'flex']}>
            <Swiper
              slidesPerView={2}
              spaceBetween={40}
              height={300}
              touchEventsTarget='container'
              grabCursor
              loop
            >
              {Children.map(carouselChildren, (child) => (
                <SwiperSlide>
                  <CarouselControlsExporter />
                  {child}
                </SwiperSlide>
              ))}
            </Swiper>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Swiper
              slidesPerView={1}
              spaceBetween={32}
              height={300}
              touchEventsTarget='container'
              grabCursor
            >
              {Children.map(carouselChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Swiper>
          </Layout>
          <Layout flexBasis={120} />
        </Column>
      </Layout>
    </Box>
  )
})
