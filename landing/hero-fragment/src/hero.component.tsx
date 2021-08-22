import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

const Hero: FC = () => (
  <Box border='1px solid red' width='100%' height='100%'>
    <Column width='100%'>
      <Layout flexBasis={80} />
      <Box border='1px solid black' height={288} width={864}>
        Title
      </Box>
      <Layout flexGrow={1} />
      <Box border='1px solid black' width={215} height={34}>
        Get consult
      </Box>
      <Layout flexBasis={80} />
    </Column>
  </Box>
)

export { Hero }
