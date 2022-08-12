import React              from 'react'
import { FC }             from 'react'
import { motion }         from 'framer-motion'

import { Backdrop }       from './backdrop'
import { DrawerProps }    from './drawer.interfaces'
import { RendererMobile } from './renderer'

const DrawerMobileNavigation: FC<DrawerProps> = ({ children, active, onClose }) => (
  <RendererMobile active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 100 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', zIndex: 3000 }}
      initial={{ top: '-40%' }}
      animate={{ top: 60 }}
      exit={{ top: '-70%' }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  </RendererMobile>
)

export { DrawerMobileNavigation }
