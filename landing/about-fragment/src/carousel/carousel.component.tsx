import React           from 'react'
import { FC }          from 'react'
import { Children }    from 'react'
import { Swiper }      from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

import { Layout }      from '@ui/layout'

const Desktop: FC = ({ children }) => (
  <Swiper
    slidesPerView={6}
    spaceBetween={40}
    loop
    height={90}
    width={1830}
    touchEventsTarget='container'
    preventClicks={false}
  >
    {Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
)

const Mobile: FC = ({ children }) => (
  <Swiper
    slidesPerView={2}
    spaceBetween={20}
    loop
    height={60}
    width={375}
    touchEventsTarget='container'
    preventClicks={false}
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
    <Layout display={['flex', 'flex', 'none']}>
      <Mobile>{children}</Mobile>
    </Layout>
  </>
)

export { Carousel }
