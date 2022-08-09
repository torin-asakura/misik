import { AnimationOptions } from 'framer-motion'
import { MotionStyle }      from 'framer-motion'
import { Transition }       from 'framer-motion'
import { CSSProperties }    from 'react'

export interface AnimateOnLoadProps {
  animation: MotionStyle & AnimationOptions<any> & any
  initial: MotionStyle & any
  transition: Transition
  delay?: number
  style?: CSSProperties
  active?: boolean
}
