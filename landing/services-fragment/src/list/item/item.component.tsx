import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ reverse = false }) => (
  <Box width='100%' height={520} border='1px solid black'>
    <Column width='100%'>
      <Box width='100%' height={1} backgroundColor='black' />
      <Layout flexBasis={120} />
      <Condition match={!reverse}>
        <Row height='100%'>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid red'>
              Image
            </Box>
          </Layout>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid green'>
              Content
            </Box>
          </Layout>
        </Row>
      </Condition>
      <Condition match={reverse}>
        <Row height='100%'>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid green'>
              Content
            </Box>
          </Layout>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid red'>
              Image
            </Box>
          </Layout>
        </Row>
      </Condition>
    </Column>
  </Box>
)

export { Item }
