import React               from 'react'
import { Children }        from 'react'
import { forwardRef }      from 'react'
import { useState }        from 'react'

import { Swiper }          from '@ui/carousel'
import { SwiperSlide }     from '@ui/carousel'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { normalizeString } from '@globals/data'
import { useLanguage }     from '@globals/language'

import { Item }            from './item'
import { Popover }         from './popover'
import { useReviews }      from './data'

export const Reviews = forwardRef((props, ref) => {
  const [language] = useLanguage()
  const reviews = useReviews()
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const carouselChildren = reviews[language].map((review, index) => (
    <Item
      title={normalizeString(review.title)}
      description={normalizeString(review.excerpt)}
      content={normalizeString(review.content)}
      imageUrl={review.featuredImage?.node?.mediaItemUrl}
      onClick={() => setActiveItem(index)}
    />
  ))

  return (
    <>
      <Popover
        visible={activeItem}
        setVisible={setActiveItem}
        reviews={reviews}
        language={language}
      />
      <Box
        ref={ref as any}
        width='100%'
        backgroundColor='background.lightBeige'
        justifyContent='center'
      >
        <Layout flexBasis={[20, 20, 397]} flexShrink={1} maxWidth={['auto', 'auto', 430]} />
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
                  <SwiperSlide>{child}</SwiperSlide>
                ))}
              </Swiper>
            </Layout>
            <Box
              backgroundColor='background.beige'
              borderRadius='big'
              display={['flex', 'flex', 'none']}
            >
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
                  <SwiperSlide>{child}</SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          </Column>
        </Layout>
        <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
      </Box>
    </>
  )
})
