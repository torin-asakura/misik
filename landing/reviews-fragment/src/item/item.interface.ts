import { Swiper as SwiperCore } from 'swiper'

export interface ItemProps {
  title: string
  description: string
  content: string
  imageUrl: string
  swiper: SwiperCore | null
}
