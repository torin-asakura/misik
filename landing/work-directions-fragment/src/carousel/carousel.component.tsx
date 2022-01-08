import React                        from 'react'
import { FC }                       from 'react'

import { Carousel as BaseCarousel } from '@ui/carousel'
import { Layout }                   from '@ui/layout'

const Desktop: FC = ({ children }) => (
  <BaseCarousel
    slidesPerView={6}
    centered={false}
    loop
    spaceBetween={140}
    height={220}
    width='100%'
    timeout={false}
  >
    {children}
  </BaseCarousel>
)

const Mobile: FC = ({ children }) => (
  <BaseCarousel
    slidesPerView={2}
    centered={false}
    loop
    spaceBetween={20}
    height={210}
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
    <Layout display={['flex', 'none', 'none']}>
      <Mobile>{children}</Mobile>
    </Layout>
  </>
)

export { Carousel }
