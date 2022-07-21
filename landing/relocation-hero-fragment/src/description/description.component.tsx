import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const Description: FC = ({ children }) => (
  <Layout maxWidth={466}>
    <Row>
      <Text fontSize='regular' fontWeight='normal' lineHeight='big' color='text.secondary'>
        {children}
      </Text>
    </Row>
  </Layout>
)

export { Description }
