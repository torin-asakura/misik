import React                from 'react'
import { FC }               from 'react'

import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { DescriptionProps } from './description.interface'

const Description: FC<DescriptionProps> = ({ description }) => (
  <Layout maxWidth={466}>
    <Row>
      <Text fontSize='regular' fontWeight='normal' lineHeight='big' color='text.secondary'>
        {description}
      </Text>
    </Row>
  </Layout>
)

export { Description }
