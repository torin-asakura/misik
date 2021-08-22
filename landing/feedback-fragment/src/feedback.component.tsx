import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'

const Feedback: FC = () => (
  <Box width='100%' height='100%' py='160px' border='1px solid red'>
    <Layout width='100%' maxWidth={1280}>
      <Column width='100%'>
        <Layout flexBasis={120} />
        <Layout flexDirection={['column', 'column', 'row']} width='100%' height='100%'>
          <Column width='100%'>
            <Box height={16} width='100%' maxWidth={580} border='1px solid black' />
            <Layout flexBasis={32} />
            <Box height={280} width='100%' maxWidth={580} border='1px solid black' />
          </Column>
          <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
          <Box border='1px solid black' width={['100%', '100%', 515]} height={598}>
            Form
          </Box>
        </Layout>
      </Column>
    </Layout>
  </Box>
)

export { Feedback }
