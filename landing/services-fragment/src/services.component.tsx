/* eslint-disable no-shadow */

import React              from 'react'
import { forwardRef }     from 'react'

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

const Services = forwardRef((props, ref: any) => {
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
      backgroundColor='background.beige'
      id='services'
      justifyContent='center'
      ref={ref}
    >
      <Layout flexBasis={[20, 20, 450]} flexShrink={[0, 0, 1]} />
      <Layout width='100%' maxWidth={1830}>
        <Column fill>
          <Layout flexBasis={[64, 64, 160]} />
          <Layout width={['100%', '100%', 242]}>
            <Text
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              fontFamily='secondary'
              color='text.primary'
              fontWeight='thin'
              textTransform='uppercase'
            >
              {title}
            </Text>
          </Layout>
          <Layout>
            <List items={items} />
          </Layout>
          <Layout flexBasis={[48, 48, 120]} />
          <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
            <Box height='min-content' width='100%'>
              <Column fill>
                {leftSide?.map(({ title, content }) => (
                  <Column fill>
                    <Divider />
                    <Layout flexBasis={[28, 28, 40]} />
                    <Accordeon title={title} content={content} />
                    <Layout flexBasis={[28, 28, 40]} />
                  </Column>
                ))}
                <Divider />
              </Column>
            </Box>
            <Layout flexBasis={40} />
            <Box height='min-content' width='100%'>
              <Column fill>
                {rightSide?.map(({ title, content }) => (
                  <Column fill>
                    <Divider />
                    <Layout flexBasis={[28, 28, 40]} />
                    <Accordeon title={title} content={content} />
                    <Layout flexBasis={[28, 28, 40]} />
                  </Column>
                ))}
                <Divider />
              </Column>
            </Box>
          </Row>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
      </Layout>
      <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
    </Box>
  )
})

export { Services }
