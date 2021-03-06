/* eslint-disable no-shadow */

import React              from 'react'
import { forwardRef }     from 'react'
import { useMemo }        from 'react'

import { Reviews }        from '@landing/reviews-fragment'
import { Divider }        from '@ui/divider'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'
import { extractObjects } from '@globals/data'
import { sortByOrder }    from '@globals/data'
import { useLanguage }    from '@globals/language'

const WorkFormat = forwardRef((props, ref: any) => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let { workFormats, title } = useMemo(() => {
    if (!fragments) {
      return { workFormats: [], title: '' }
    }

    workFormats = extractObjects('format', fragments.workformat[language])
    title = extractObject('title', fragments.workformat[language])?.title

    return {
      workFormats,
      title,
    }
  }, [fragments, language])

  return (
    <Box
      width='100%'
      backgroundColor='background.lightBeige'
      id='work_format'
      justifyContent='center'
      ref={ref}
    >
      <Layout flexBasis={[20, 20, 616]} maxWidth={['auto', 'auto', 430]} />
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
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={[60, 60, 64]} flexShrink={0} />
          <Column width='100%'>
            {workFormats.sort(sortByOrder).map(({ title, content }, idx) => (
              <>
                <Divider />
                <Layout flexBasis={32} />
                <Box width='100%' height={['auto', 'auto', 172]}>
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
                <Layout flexBasis={[40, 40, 0]} flexShrink={0} />
              </>
            ))}
          </Column>
          <Row>
            <Reviews />
          </Row>
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
        </Column>
      </Layout>
      <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
    </Box>
  )
})

export { WorkFormat }
