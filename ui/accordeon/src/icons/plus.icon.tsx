import styled         from '@emotion/styled'

import React          from 'react'
import { FC }         from 'react'
import { motion }     from 'framer-motion'

import { IconsProps } from './icons.interface'

const Path = styled.path({
  strokeDasharray: 1,
  animationName: 'draw',
  animationDuration: '1s',
})

const Plus: FC<IconsProps> = ({ hover }) => (
  <motion.div animate={{ rotate: hover ? 90 : 0 }} transition={{ duration: 0.4, ease: 'linear' }}>
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        pathLength={1}
        strokeLinecap='round'
        d='M0 12H12M24 12H12M12 0V12M12 24L12 12'
        stroke={hover ? '#EA861B' : 'black'}
        stroke-width='1.25'
      />
    </svg>
  </motion.div>
)

export { Plus }
