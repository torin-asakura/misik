import React                        from 'react'
import { FC }                       from 'react'

import { Carousel as BaseCarousel } from '@ui/carousel'
import { Layout }                   from '@ui/layout'

const Desktop: FC = ({ children }) => (
  <BaseCarousel
    slidesPerView={6}
    centered={false}
    loop
    spaceBetween={40}
    height={90}
    width='100%'
    timeout={false}
  >
    {children}
  </BaseCarousel>
)

const Mobile: FC = ({ children }) => (
  <BaseCarousel
    slidesPerView={2}
    centered
    loop
    spaceBetween={20}
    height={60}
    width='100%'
    timeout={false}
  >
    {children}
  </BaseCarousel>
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
