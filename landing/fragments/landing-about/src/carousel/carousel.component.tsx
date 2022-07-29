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
    spaceBetween={40}
    loop
    height={90}
    width={1243}
    touchEventsTarget='container'
    autoplay={{
      delay: 2000,
    }}
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
    autoplay={{
      delay: 2000,
    }}
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
