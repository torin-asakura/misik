import React      from 'react'
import { FC }     from 'react'
import { motion } from 'framer-motion'

const Minus: FC = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <motion.path
      d='M12 0L12 24'
      stroke='#121213'
      strokeWidth='1.2'
      animate={{ d: 'M24 12L0 12' }}
      transition={{ duration: 0.3 }}
    />
    <path d='M24 12L0 12' stroke='#121213' strokeWidth='1.2' />
  </svg>
)

export { Minus }
