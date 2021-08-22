import React                    from 'react'
import { FC }                   from 'react'

import { Row }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Box }                  from '@ui/layout'

import { SliderContainerProps } from './slider-container.interface'

const SliderContainer: FC<SliderContainerProps> = ({ children, progressContainerWidth }) => (
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
    <Layout width='100%' height='100%'>
      {children}
    </Layout>
  </Row>
)

export { SliderContainer }
