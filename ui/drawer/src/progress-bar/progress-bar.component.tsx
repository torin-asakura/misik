import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'

import { usePercent } from './use-percent.hook'

const ProgressBar = () => {
  const scrollPercent = usePercent()

  return (
    <Box
      height={240}
      width={2}
      position='fixed'
      top={171}
      right={31}
      display={['none', 'none', 'flex']}
    >
      <Column fill alignItems='center'>
        <Box backgroundColor='background.lightGray' width={2} height={240}>
          <Box height={`${scrollPercent}%`} backgroundColor='black' width='100%' />
        </Box>
      </Column>
    </Box>
  )
}

export { ProgressBar }
