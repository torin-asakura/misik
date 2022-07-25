/* eslint-disable no-shadow */

import React              from 'react'
import { forwardRef }     from 'react'

import { Divider }        from '@ui/divider'
import { Box }            from '@ui/layout'
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

  let workFormats = []
  let title: string = ''

  if (fragments) {
    workFormats = extractObjects('format', fragments.workformat[language])
    title = extractObject('title', fragments.workformat[language])?.title
  }

  return (
    <Box
      width='100%'
      backgroundColor='background.lightBeige'
      id='work_format'
      justifyContent='center'
      ref={ref}
    >
      <Layout flexBasis={[20, 20, 616]} maxWidth={['auto', 'auto', 430]} />
      <Layout maxWidth={1830}>
        <Column width='100%'>
          <Layout flexBasis={[64, 64, 160]} />
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
          <Layout flexBasis={[32, 32, 64]} />
          <Divider />
          <Layout flexBasis={[32, 32, 64]} />
          <Layout width='100%' flexDirection={['column', 'column', 'row']}>
            {workFormats.sort(sortByOrder).map(({ title, content }, idx) => (
              <>
                <Box width='100%'>
                  <Column width='100%'>
                    <Box
                      border='1px solid'
                      borderColor='background.lightGray'
                      borderRadius='huge'
                      width={[56, 56, 72]}
                      height={[56, 56, 72]}
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Layout>
                        <Text fontSize='tiny'>{`0${idx + 1}`}</Text>
                      </Layout>
                    </Box>
                    <Layout flexBasis={[24, 24, 32]} />
                    <Layout>
                      <Text fontFamily='secondary' fontSize='enlarged' textTransform='uppercase'>
                        {title}
                      </Text>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout>
                      <Text color='text.secondary' fontSize='regular' lineHeight='primary'>
                        {content}
                      </Text>
                    </Layout>
                  </Column>
                </Box>
                <Layout flexBasis={40} flexShrink={0} />
              </>
            ))}
          </Layout>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
      </Layout>
      <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
    </Box>
  )
})

export { WorkFormat }
