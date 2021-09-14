import React       from 'react'
import { FC }      from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Row }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Logo }    from '@ui/logo'

const Footer: FC = () => (
  <Box
    alignItems='center'
    justifyContent='center'
    width='100%'
    height={163}
    backgroundColor='background.beige'
  >
    <Layout flexBasis={20} />
    <Layout height='100%' width='100%' maxWidth={1280}>
      <Column width='100%'>
        <Layout flexBasis={65} />
        <Divider />
        <Layout flexBasis={65} />
        <Row height='100%'>
          <Logo />
        </Row>
      </Column>
    </Layout>
    <Layout flexBasis={20} />
  </Box>
)

export { Footer }
