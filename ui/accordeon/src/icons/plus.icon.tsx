import React          from 'react'
import { FC }         from 'react'
import { motion }     from 'framer-motion'

import { IconsProps } from './icons.interface'

const Plus: FC<IconsProps> = ({ hover }) => (
  <motion.div
    style={{ width: 24, height: 24 }}
    animate={{ rotate: hover ? 90 : 0 }}
    transition={{ duration: 0.3, ease: 'linear' }}
  >
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        d='M24 12L0 12'
        stroke={hover ? '#EA861B' : '#121213'}
        animate={{ d: 'M12 0L12 24' }}
        transition={{ duration: 0.3 }}
        style={{ transition: '.3s' }}
      />
      <motion.path
        d='M24 12L0 12'
        stroke={hover ? '#EA861B' : '#121213'}
        strokeWidth='1.2'
        transition={{ duration: 0.3 }}
        style={{ transition: '.3s' }}
      />
    </svg>
  </motion.div>
)

export { Plus }
