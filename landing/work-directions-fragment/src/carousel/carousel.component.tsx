import React           from 'react'
import { FC }          from 'react'

import { Layout }      from '@ui/layout'
import { useCarousel } from '@ui/carousel'

const Desktop: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 6,
    spaceBetween: 120,
    centered: false,
    height: 220,
    width: 1830,
    loop: true,
  })

  return carousel
}

const Mobile: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 20,
    centered: true,
    height: 210,
    loop: true,
  })

  return carousel
}

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
