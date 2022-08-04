import React             from 'react'
import { FC }            from 'react'
import { useMemo }       from 'react'

import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Link }          from '@ui/link'
import { Logo }          from '@ui/logo'
import { Socials }       from '@ui/socials'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'

const Footer: FC = () => {
  const { fragments } = useData()

  let { title, content } = useMemo(() => {
    if (!fragments) {
      return { title: '', content: '' }
    }

    const byObj = extractObject('copyright', fragments.about.RU)
    title = byObj?.title
    content = byObj?.content

    return {
      title,
      content,
    }
  }, [fragments])

  return (
    <Box
      alignItems='center'
      justifyContent='center'
      width='100%'
      height={221}
      marginTop='auto'
      backgroundColor='background.beige'
    >
      <Layout flexBasis={20} />
      <Layout height='100%' width='100%' maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={62} />
          <Row alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
            <Layout flexGrow={1} />
            <Socials footer />
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Divider />
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Layout flexGrow={1} />
            <Layout>
              <Text color='text.secondary' fontSize='regular'>
                {title}
              </Text>
              <Space />
              <Link
                href='https://torinasakura.name/'
                target='_blank'
                rel='me'
                title={content}
                color='text.secondary'
                fontSize='regular'
              >
                {content}
              </Link>
            </Layout>
          </Row>
          <Layout flexBasis={24} />
        </Column>
      </Layout>
      <Layout flexBasis={20} />
    </Box>
  )
}
export { Footer }
