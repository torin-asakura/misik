import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Logo }          from '@ui/logo'
import { Link }          from '@ui/link'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'

const Footer: FC = () => {
  const { fragments } = useData()

  const by = {
    title: '',
    content: '',
  }

  if (fragments) {
    const byObj = extractObject('copyright', fragments.about.RU)
    by.title = byObj?.title
    by.content = byObj?.content
  }

  return (
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
          <Row height='100%' alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
            <Layout flexGrow={1} />
            <Layout>
              <Text color='text.secondary' fontSize='regular'>
                {by.title}
              </Text>
              <Space />
              <Link
                href='https://torinasakura.name/'
                target='_blank'
                rel='me'
                title={by.content}
                color='text.secondary'
                fontSize='regular'
              >
                {by.content}
              </Link>
            </Layout>
          </Row>
        </Column>
      </Layout>
      <Layout flexBasis={20} />
    </Box>
  )
}
export { Footer }
