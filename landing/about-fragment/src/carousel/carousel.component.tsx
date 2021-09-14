import React                        from 'react'
import { FC }                       from 'react'

import { Carousel as BaseCarousel } from '@ui/carousel'
import { Layout }                   from '@ui/layout'

const Desktop = ({ children }) => (
  <BaseCarousel
    slidesPerView={6}
    centered={false}
    loop
    spaceBetween={40}
    height={90}
    width='100%'
    timeout={2000}
  >
    {children}
  </BaseCarousel>
)

const Mobile = ({ children }) => (
  <BaseCarousel
    slidesPerView={2}
    centered
    loop
    spaceBetween={20}
    height={60}
    width={375}
    timeout={2000}
  >
    {children}
  </BaseCarousel>
)

const Carousel = ({ children }) => (
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
