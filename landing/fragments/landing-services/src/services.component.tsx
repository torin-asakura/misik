import React               from 'react'
import { forwardRef }      from 'react'

import { Accordeon }       from '@ui/accordeon'
import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { extractFragment } from '@globals/data'
import { extractObjects }  from '@globals/data'
import { useLanguage }     from '@globals/language'

import { List }            from './list'
import { useServices }     from './data'
import { splitItems }      from './helpers'

const Services = forwardRef(({ data }: any, ref: any) => {
  const [language] = useLanguage()
  const services = useServices()

  const items = extractObjects('item', 'contentAddons', data[language])
  const { title } = extractFragment('contentAddons', 'lead', data[language])

  const [leftSide, rightSide] = splitItems(services[language])

  return (
    <Box width='100%' backgroundColor='background.beige' justifyContent='center' ref={ref}>
      <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
      <Layout width={['100%', '100%', 1243]} flexShrink={[5, 5, 0]}>
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
                {leftSide?.map(({ title: leftSideTitle, content }) => (
                  <Column key={leftSideTitle} fill>
                    <Divider />
                    <Layout flexBasis={[28, 28, 40]} />
                    <Accordeon title={leftSideTitle} content={content} />
                    <Layout flexBasis={[28, 28, 40]} />
                  </Column>
                ))}
                <Divider />
              </Column>
            </Box>
            <Layout flexBasis={40} flexShrink={0} />
            <Box height='min-content' width='100%'>
              <Column fill>
                {rightSide?.map(({ title: rightSideTitle, content }) => (
                  <Column key={rightSideTitle} fill>
                    <Divider />
                    <Layout flexBasis={[28, 28, 40]} />
                    <Accordeon title={rightSideTitle} content={content} />
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
