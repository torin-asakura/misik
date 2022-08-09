import React               from 'react'
import { forwardRef }      from 'react'

import { Reviews }         from '@landing/reviews-fragment'
import { Condition }       from '@ui/condition'
import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'
import { extractFragment } from '@globals/data'
import { extractObjects }  from '@globals/data'
import { useLanguage }     from '@globals/language'

const WorkFormat = forwardRef(({ data }: any, ref: any) => {
  const [language] = useLanguage()

  let items = []
  let mainTitle = ''

  if (data) {
    items = extractObjects('item', 'contentAddons', data[language])
    mainTitle = extractFragment('contentAddons', 'lead', data[language]).title
  }

  return (
    <Box width='100%' backgroundColor='background.lightBeige' justifyContent='center' ref={ref}>
      <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
      <Layout width='100%' maxWidth={1243}>
        <Column width='100%'>
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          <Layout>
            <Text
              fontFamily='secondary'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              fontWeight='thin'
              textTransform='uppercase'
            >
              {mainTitle}
            </Text>
          </Layout>
          <Layout flexBasis={[60, 60, 64]} flexShrink={0} />
          <Column width='100%'>
            {items.map(({ contentAddons: { title, content } }, idx) => (
              <Column>
                <Column height={['100%', '100%', 120]}>
                  <Layout>
                    <Divider />
                  </Layout>
                  <Layout flexBasis={32} flexShrink={0} />
                  <Box width='100%' height={['auto', 'auto', 140]}>
                    <Layout width='100%' flexDirection={['column', 'column', 'row']}>
                      <Box
                        border='1px solid'
                        borderColor='background.lightGray'
                        borderRadius='huge'
                        minWidth={[56, 56, 52]}
                        maxWidth={[56, 56, 52]}
                        height={[56, 56, 52]}
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Row justifyContent='center'>
                          <Text fontSize='tiny'>{`0${idx + 1}`}</Text>
                        </Row>
                      </Box>
                      <Layout flexBasis={[24, 24, 181]} />
                      <Row maxWidth={200}>
                        <Text fontFamily='secondary' fontSize='enlarged' textTransform='uppercase'>
                          {title}
                        </Text>
                      </Row>
                      <Layout flexBasis={[16, 16, 300]} />
                      <Row maxWidth={544}>
                        <Text color='text.secondary' fontSize='regular' lineHeight='primary'>
                          {content}
                        </Text>
                      </Row>
                    </Layout>
                  </Box>
                </Column>
                <Condition match={idx !== items.length - 1}>
                  <Layout flexBasis={[40, 40, 52]} flexShrink={0} />
                </Condition>
              </Column>
            ))}
          </Column>
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          <Layout>
            <Reviews />
          </Layout>
        </Column>
      </Layout>
      <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 1, 1]} />
    </Box>
  )
})

export { WorkFormat }
