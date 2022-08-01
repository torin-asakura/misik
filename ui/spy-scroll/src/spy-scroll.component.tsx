import React           from 'react'
import { ReactNode }   from 'react'

import { Box }         from '@ui/layout'

import { StepDisplay } from './step-display'

export interface StepDotsProps {
  children?: ReactNode
  activeDot: number
}

const SpyScroll = ({ children, activeDot }: StepDotsProps) => (
  <>
    <Box
      width={30}
      position='fixed'
      bottom={64}
      left={32}
      zIndex={10}
      display={['none', 'none', 'flex']}
    >
      <StepDisplay activeDot={activeDot} />
    </Box>
    {children}
  </>
)

export { SpyScroll }
