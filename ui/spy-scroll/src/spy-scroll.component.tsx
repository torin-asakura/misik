import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'

import { Provider }       from './context'
import { SpyScrollStore } from './store'
import { StepDisplay }    from './step-display'

const SpyScroll: FC = ({ children }) => {
  const store = new SpyScrollStore()

  return (
    <Provider value={store}>
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
    </Provider>
  )
}

export { SpyScroll }
