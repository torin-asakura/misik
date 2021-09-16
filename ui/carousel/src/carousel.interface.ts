import { CarouselProps as BaseProps } from '@atls-ui-parts/carousel'

export interface CarouselProps extends Omit<BaseProps, 'direction'> {
  width: number | string | number[] | string[]
  height: number | string | number[] | string[]
  timeout?: number | boolean
}
