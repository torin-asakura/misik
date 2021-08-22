import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

import { List }   from './list'

const Services: FC = () => (
  <Box width='100%' height='100%' py='160px' border='1px solid red'>
    <Column width='100%'>
      <Layout>
        <Box border='1px solid black' width={['100%', '100%', 242]} height={77}>
          Services
        </Box>
      </Layout>
      <Layout flexBasis={64} />
      <Box width='100%' height={1} backgroundColor='black' />
      <Layout flexBasis={120} />
      <List />
      <Layout flexBasis={120} />
      <Box width='100%' height={560} border='1px solid black'>
        Accordion
      </Box>
    </Column>
  </Box>
)

export { Services }
