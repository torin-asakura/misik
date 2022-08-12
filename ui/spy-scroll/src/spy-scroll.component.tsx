import React            from 'react'
import { useState }     from 'react'

import { Box }          from '@ui/layout'

import { StepDisplay }  from './step-display'
import { useSpyScroll } from './context'

const SpyScroll = () => {
  const spyScrollStore = useSpyScroll()
  const [active, setActive] = useState<number>(0)

  spyScrollStore.setFunction(setActive)

  return (
    <Box
      width={30}
      position='fixed'
      bottom={64}
      left={32}
      zIndex={10}
      display={['none', 'none', 'flex']}
    >
      <StepDisplay activeDot={active} />
    </Box>
  )
}
export { SpyScroll }
