import React             from 'react'
import { FC }            from 'react'
import { useEffect }     from 'react'
import { useRef }        from 'react'
import { useState }      from 'react'
import { useContext }    from 'react'
import { Children }      from 'react'
import { createContext } from 'react'
import { useCarousel }   from '@atls-ui-parts/carousel'

import { Box }           from '@ui/layout'

import { CarouselProps } from './carousel.interface'
import { Slide }         from './slide.component'
import { Wrapper }       from './wrapper.component'
import { Container }     from './container.component'

const Context = createContext({
  trigger: false,
  slideLeft: (x) => {},
  slideRight: (x) => {},
  direction: 'left',
})

const CarouselProvider = (props) => {
  const [trigger, setTrigger] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('left')

  const slideLeft = () => {
    setDirection('left')
    setTrigger(!trigger)
  }
  const slideRight = () => {
    setDirection('right')
    setTrigger(!trigger)
  }

  return <Context.Provider value={{ trigger, slideLeft, slideRight, direction }} {...props} />
}

const CarouselConsumer = Context.Consumer

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
  const context = useContext(Context)

  const direction = 'horizontal'

  const carouselItems = Children.map(children, (child) => <Slide>{child}</Slide>)

  const { slides, activeSlide, slidesLength, slideToIndex, wrapperOptions } = useCarousel(
    containerNode,
    carouselItems,
    {
      direction,
      slidesPerView,
      spaceBetween,
      dragElastic,
      transitionDuration,
      swipeThreshold,
      centered,
      loop,
    }
  )

  useEffect(() => {
    if (context) {
      if (context.direction === 'left' && activeSlide > 0) {
        slideToIndex(activeSlide - 1)
      }
      if (context.direction === 'right' && activeSlide < carouselItems.length)
        slideToIndex(activeSlide + 1)
    }
  }, [context?.trigger, activeSlide, carouselItems.length, context, slideToIndex])

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

export { Carousel, CarouselProvider, CarouselConsumer }
