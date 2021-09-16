/* eslint-disable no-shadow */

import React              from 'react'
import { FC }             from 'react'

import { Accordeon }      from '@ui/accordeon'
import { Divider }        from '@ui/divider'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'
import { extractObjects } from '@globals/data'
import { useLanguage }    from '@globals/language'

import { List }           from './list'
import { useServices }    from './data'
import { splitItems }     from './helpers'

const Services: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const services = useServices()

  let items = []
  let title: string = ''

  if (fragments) {
    items = extractObjects('item', fragments.services[language])
    title = extractObject('title', fragments.services[language])?.title
  }

  const [leftSide, rightSide] = splitItems(services[language])

  return (
    <Box
      width='100%'
      minHeight={2302}
      backgroundColor='background.beige'
      justifyContent='flex-end'
      id='services'
    >
      <Layout maxWidth={1280}>
        <Layout flexBasis={[20, 20, 150]} />
        <Column width='100%'>
          <Layout flexBasis={[64, 64, 160]} />
          <Layout width={['100%', '100%', 242]}>
            <Text
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              fontFamily='secondary'
              color='text.primary'
              fontWeight='thin'
            >
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 64]} />
          <Layout>
            <List items={items} />
          </Layout>
          <Layout flexBasis={120} />
          <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
            <Box height='min-content' width='100%'>
              <Column width='100%'>
                {leftSide?.map(({ title, content }) => (
                  <>
                    <Column width='100%'>
                      <Divider />
                      <Layout flexBasis={40} />
                      <Accordeon title={title} content={content} />
                      <Layout flexBasis={40} />
                    </Column>
                  </>
                ))}
                <Divider />
              </Column>
            </Box>
            <Layout flexBasis={40} />
            <Box height='min-content' width='100%'>
              <Column width='100%'>
                {rightSide?.map(({ title, content }) => (
                  <Column width='100%'>
                    <Divider />
                    <Layout flexBasis={40} />
                    <Accordeon title={title} content={content} />
                    <Layout flexBasis={40} />
                  </Column>
                ))}
                <Divider />
              </Column>
            </Box>
          </Row>
          <Layout flexBasis={160} />
        </Column>
        <Layout flexBasis={[20, 20, 0]} />
      </Layout>
      <Layout flexBasis={[0, 0, 320]} />
    </Box>
  )
}
export { Services }
