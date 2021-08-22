import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'

const About: FC = () => (
  <Box border='1px solid red' width='100%' height='100%' py='80px'>
    <Column width='100%'>
      <Layout flexBasis={80} />
      <Layout flexDirection={['column', 'column', 'row']}>
        <Layout>
          <Box width={['100%', '100%', 480]} height={480} border='1px solid black'>
            Photo
          </Box>
        </Layout>
        <Layout flexBasis={110} />
        <Layout maxWidth={620}>
          <Layout>
            <Column width='100%'>
              <Layout>
                <Box width={['100%', '100%', 620]} height={231} border='1px solid black'>
                  Title
                </Box>
              </Layout>
              <Layout flexBasis={72} />
              <Box width='100%' height={1} backgroundColor='black' />
              <Layout flexBasis={32} />
              <Layout>
                <Box width={['100%', '100%', 620]} height={145} border='1px solid black'>
                  Desc
                </Box>
              </Layout>
            </Column>
          </Layout>
        </Layout>
      </Layout>
      <Layout flexBasis={160} />
      <Layout maxWidth={1280}>
        <Column width='100%'>
          <Box width='100%' height={1} backgroundColor='black' />
          <Layout flexBasis={80} />
          <Row alignItems='center'>
            <Box width={180} height={90} border='1px solid black' />
            <Layout flexBasis={40} />
            <Box width={180} height={90} border='1px solid black' />
          </Row>
        </Column>
      </Layout>
    </Column>
  </Box>
)

export { About }
