import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'

const WorkFormat: FC = () => (
  <Box width='100%' height='100%' border='1px solid red'>
    <Column width='100%'>
      <Layout flexBasis={160} />
      <Layout>
        <Box width={536} height={77} border='1px solid black'>
          Work format
        </Box>
      </Layout>
      <Layout flexBasis={64} />
      <Box width='100%' height={1} backgroundColor='black' />
      <Layout flexBasis={64} />
      <Layout flexDirection={['column', 'column', 'row']}>
        <Box width={['100%', '100%', 400]} height={250} border='1px solid blue' />
        <Box width={['100%', '100%', 400]} height={250} border='1px solid blue' />
        <Box width={['100%', '100%', 400]} height={250} border='1px solid blue' />
      </Layout>
      <Layout flexBasis={240} />
      <Layout width='100%' maxWidth={1280}>
        <Column justifyContent='center' width='100%'>
          <Layout flexBasis={120} />
          <Row>
            <Box height={64} width='100%' border='1px solid black'>
              Отзывы клиентов
            </Box>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Box height={64} width='100%' border='1px solid black'>
              Arrows
            </Box>
          </Row>
          <Layout flexBasis={48} />
          <Row>
            {[...Array(3)].map(() => (
              <>
                <Box width={100} height={100} border='1px solid blue' />
                <Layout flexBasis={32} />
              </>
            ))}
          </Row>
          <Layout flexBasis={120} />
        </Column>
      </Layout>
      <Layout flexBasis={160} />
    </Column>
  </Box>
)

export { WorkFormat }
