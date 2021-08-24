import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Image }     from '@ui/image'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ image, title, content, reverse = false }) => (
  <Box width='100%' height={520} border='1px solid black'>
    <Column width='100%'>
      <Condition match={!reverse}>
        <Row height='100%'>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid red'>
              <Image src={image?.link} alt={image?.altText} contain />
            </Box>
          </Layout>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid green'>
              {title}
              {content}
            </Box>
          </Layout>
        </Row>
      </Condition>
      <Condition match={reverse}>
        <Row height='100%'>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid green'>
              {title}
              {content}
            </Box>
          </Layout>
          <Layout width='100%'>
            <Box width='100%' height='100%' border='1px solid red'>
              <Image src={image?.link} alt={image?.altText} contain />
            </Box>
          </Layout>
        </Row>
      </Condition>
    </Column>
  </Box>
)
export { Item }
