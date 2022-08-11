import React        from 'react'
import { FC }       from 'react'
import { motion }   from 'framer-motion'

import { IconProps } from './icon.interface'

const CloseIcon: FC<IconProps> = ({ toggle }) => (
  <motion.div
    style={{ width: 32, height: 32 }}
    animate={{
      opacity: toggle ? 1 : 0,
      width: toggle ? 32 : 0,
      height: toggle ? 32 : 0,
      display: toggle ? 'flex' : 'none',
    }}
    transition={{ duration: 0.5 }}
  >
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='5.92371'
        y='4.61304'
        width='30'
        height='1.5'
        transform='rotate(45 5.92371 4.61304)'
        fill='#EA861B'
      />
      <rect
        x='4.86304'
        y='25.8262'
        width='30'
        height='1.5'
        transform='rotate(-45 4.86304 25.8262)'
        fill='#EA861B'
      />
    </svg>
  </motion.div>
)

export { CloseIcon }
