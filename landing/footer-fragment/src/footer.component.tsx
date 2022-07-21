import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { Image }             from '@ui/image'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Link }              from '@ui/link'
import { Logo }              from '@ui/logo'
import { Text }              from '@ui/text'
import { Space }             from '@ui/text'
import { useData }           from '@globals/data'
import { extractObject }     from '@globals/data'
import { normalizeString }   from '@globals/data'

import { useSocialNetworks } from './data'

const Footer: FC = () => {
  const { fragments } = useData()
  const socialNetworks = useSocialNetworks()

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
      height={221}
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
            {socialNetworks.map(({ content, featuredImage }, index) => (
              <>
                <Condition match={index !== 0}>
                  <Layout flexBasis={24} />
                </Condition>
                <Layout>
                  <Link href={normalizeString(content)} target='_blank'>
                    <Button px={0} width={[40, 40, 48]} height={[40, 40, 48]}>
                      <Layout width={21} height={21}>
                        <Image
                          width={21}
                          height={21}
                          src={featuredImage.node.sourceUrl}
                          alt={featuredImage.node.altText}
                          contain
                        />
                      </Layout>
                    </Button>
                  </Link>
                </Layout>
              </>
            ))}
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
          <Layout flexBasis={24} />
        </Column>
      </Layout>
      <Layout flexBasis={20} />
    </Box>
  )
}
export { Footer }
