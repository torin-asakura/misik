import React                   from 'react'
import { FC }                  from 'react'

import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'

import { ScrollProgressProps } from './scroll-progress.interface'

const ScrollProgress: FC<ScrollProgressProps> = ({ children, progressContainerWidth }) => (
  <Row height='100%'>
    <Box
      height='100%'
      width={progressContainerWidth}
      alignItems='flex-end'
      padding='30px'
      display={['none', 'none', 'flex']}
    >
      <Box width={18} height={333} border='1px solid black'>
        Scroll progress
      </Box>
    </Box>
    <Layout flexBasis={360} />
    <Column width='100%'>{children}</Column>
  </Row>
)

export { ScrollProgress }
