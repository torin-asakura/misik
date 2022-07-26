import React                    from 'react'
import { Children }             from 'react'
import { Swiper as SwiperCore } from 'swiper'
import { forwardRef }           from 'react'
import { useState }             from 'react'

import { Swiper }               from '@ui/carousel'
import { SwiperSlide }          from '@ui/carousel'
import { Box }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Column }               from '@ui/layout'
import { normalizeString }      from '@globals/data'
import { useLanguage }          from '@globals/language'
import { useSwiper }            from '@ui/carousel'

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
      swiper={swiper}
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
      width='100%'
      borderRadius='big'
      backgroundColor='background.beige'
      justifyContent='center'
    >
      <Layout flexBasis={[20, 20, 0]} />
      <Layout width='100%' maxWidth={1243}>
        <Column justifyContent='center' width='100%'>
          <Layout display={['none', 'none', 'flex']}>
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              height={372}
              width={1243}
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
              spaceBetween={40}
              height={300}
              width={295}
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
        </Column>
      </Layout>
      <Layout flexBasis={[0, 0, 280]} flexShrink={[0, 0, 1]} />
    </Box>
  )
})
