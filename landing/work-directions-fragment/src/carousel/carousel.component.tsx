import React           from 'react'
import { FC }          from 'react'
import { Children }    from 'react'

import { Swiper }      from '@ui/carousel'
import { SwiperSlide } from '@ui/carousel'
import { Autoplay }    from '@ui/carousel'
import { Layout }      from '@ui/layout'

const Desktop: FC = ({ children }) => (
  <Swiper
    modules={[Autoplay]}
    slidesPerView={6}
    spaceBetween={160}
    width={1830}
    height={220}
    touchEventsTarget='container'
    autoplay={{
      delay: 2000,
    }}
    loop
    grabCursor
  >
    {Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
)

const Tablet: FC = ({ children }) => (
  <Swiper
    modules={[Autoplay]}
    spaceBetween={20}
    slidesPerView={3}
    width={850}
    height={210}
    touchEventsTarget='container'
    autoplay={{
      delay: 2000,
    }}
    loop
    centeredSlides
  >
    {Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
)

const Mobile: FC = ({ children }) => (
  <Swiper
    modules={[Autoplay]}
    spaceBetween={40}
    slidesPerView={2}
    width={375}
    height={220}
    touchEventsTarget='container'
    autoplay={{
      delay: 2000,
    }}
    loop
  >
    {Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
)

const Carousel: FC = ({ children }) => (
  <>
    <Layout display={['none', 'none', 'flex']}>
      <Desktop>{children}</Desktop>
    </Layout>
    <Layout display={['none', 'flex', 'none']}>
      <Tablet>{children}</Tablet>
    </Layout>
    <Layout display={['flex', 'none', 'none']}>
      <Mobile>{children}</Mobile>
    </Layout>
  </>
)

export { Carousel }
