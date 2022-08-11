import React        from 'react'
import { FC }       from 'react'
import { motion }   from 'framer-motion'

import { IconProps } from './icon.interface'

const BurgerIcon: FC<IconProps> = ({ toggle }) => (
  <motion.div
    style={{ width: 32, height: 32 }}
    animate={{
      opacity: toggle ? 0 : 1,
      width: toggle ? 0 : 32,
      height: toggle ? 0 : 32,

      display: toggle ? 'none' : 'flex',
    }}
    transition={{ duration: 0.5 }}
  >
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='1' y='11' width='30' height='1.5' fill='#696766' />
      <rect x='1' y='15.5' width='30' height='1.5' fill='#696766' />
      <rect x='1' y='20' width='16' height='1.5' fill='#696766' />
    </svg>
  </motion.div>
)

export { BurgerIcon }
