import React           from 'react'
import { ReactNode }   from 'react'

import { Box }         from '@ui/layout'

import { StepDisplay } from './step-display'

interface StepDotsProps {
  children?: ReactNode
  activeDot: number
  total: number
}

const SpyScroll = ({ children, activeDot, total }: StepDotsProps) => {

  return (
    <>
      <Box
        height={333}
        width={18}
        position='fixed'
        bottom={64}
        left={32}
        zIndex={10}
        display={['none', 'none', 'flex']}
      >
        <StepDisplay activeDot={activeDot} total={total} />
      </Box>
      {children}
    </>
  )
}

export { SpyScroll }
