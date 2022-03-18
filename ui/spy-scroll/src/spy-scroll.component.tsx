import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'

import { StepDisplay }    from './step-display'

interface StepDotsProps {
  children: any
  activeDot: number
}

const SpyScroll: FC = ({ children, activeDot }: StepDotsProps) => {

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
        <StepDisplay />
      </Box>
      {children}
    </>
  )
}

export { SpyScroll }
