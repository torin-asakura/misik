import React                  from 'react'
import { FC }                 from 'react'
import { useEffect }          from 'react'
import { useRef }             from 'react'
import { Children }           from 'react'
import { useCarousel }        from '@atls-ui-parts/carousel'
import { useAddonPagination } from '@atls-ui-parts/carousel'
import { useAddonNavigation } from '@atls-ui-parts/carousel'

import { Box }                from '@ui/layout'

import { CarouselProps }      from './carousel.interface'
import { Slide }              from './slide.component'
import { Wrapper }            from './wrapper.component'
import { Container }          from './container.component'

const Carousel: FC<CarouselProps> = ({
  children,
  width,
  height,
  slidesPerView = 1,
  spaceBetween = 30,
  dragElastic = 0.5,
  transitionDuration = 0.5,
  swipeThreshold = 10000,
  centered = true,
  loop = true,
  timeout = false,
}) => {
  const containerNode = useRef(null)
  const wrapperNode = useRef(null)

  const direction = 'horizontal'

  const carouselItems = Children.map(children, (child) => <Slide>{child}</Slide>)

  const { slides, activeSlide, slidesLength, slideToIndex, slideToTwoIndexes, wrapperOptions } =
    useCarousel(containerNode, carouselItems, {
      direction,
      slidesPerView,
      spaceBetween,
      dragElastic,
      transitionDuration,
      swipeThreshold,
      centered,
      loop,
    })

  const withPagination = useAddonPagination({
    slidesLength,
    activeSlide,
    slideTo: slideToIndex,
    slidesPerView,
    centered,
    loop,
  })

  const { prevProp, nextProp } = useAddonNavigation({
    slidesLength,
    activeSlide,
    slideTo: slideToIndex,
    slideToTwo: slideToTwoIndexes,
    slidesPerView,
    centered,
    loop,
  })

  useEffect(() => {
    const timer =
      (timeout !== false &&
        setTimeout(() => {
          slideToIndex(activeSlide === slidesLength ? 1 : activeSlide + 1)
          // @ts-ignore
        }, timeout)) ||
      null

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timeout, activeSlide, slidesLength, slideToIndex])

  return (
    <Box display='block' width={width} height={height}>
      <Container ref={containerNode}>
        <Wrapper ref={wrapperNode} direction={direction} {...wrapperOptions}>
          {slides}
        </Wrapper>
      </Container>
    </Box>
  )
}

export { Carousel }
