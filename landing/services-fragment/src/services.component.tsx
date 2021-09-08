import React              from 'react'
import { FC }             from 'react'

import { Accordeon }      from '@ui/accordeon'
import { Condition }      from '@ui/condition'
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

const Services: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let items = []
  let title: string = ''
  let accordeonItems = []

  const splitItems = (items) =>
    items.reduce(
      (result, i, idx) => {
        result[idx % 2 === 0 ? 0 : 1].push(i)
        return result
      },
      [[], []]
    )

  if (fragments) {
    items = extractObjects('item', fragments.services[language])
    title = extractObject('title', fragments.services[language])?.title
    accordeonItems = extractObjects('accordeon', fragments.services[language])
  }

  const [leftSide, rightSide] = splitItems(accordeonItems)

  return (
    <Box width='100%' minHeight={2302}>
      <Layout maxWidth={1280}>
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
            <Column width='100%'>
              {leftSide?.map(({ title, content }) => (
                <Column width='100%'>
                  <Divider />
                  <Layout flexBasis={40} />
                  <Accordeon title={title} content={content} />
                  <Layout flexBasis={40} />
                </Column>
              ))}
              <Divider />
            </Column>
            <Layout flexBasis={40} />
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
          </Row>
          <Layout flexBasis={160} />
        </Column>
      </Layout>
    </Box>
  )
}
export { Services }
