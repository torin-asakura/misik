import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Image }          from '@ui/image'
import { useData }        from '@globals/data'
import { extractObjects } from '@globals/data'
import { sortByOrder }    from '@globals/data'
import { useLanguage }    from '@globals/language'

import { useReviews }     from './data'

const WorkFormat: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const reviews = useReviews()

  let workFormats = []

  if (fragments) {
    workFormats = extractObjects('format', fragments.workformat[language])
  }

  return (
    <Box width='100%' height='100%' border='1px solid red'>
      <Layout maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={160} />
          <Layout>
            <Box width={536} height={77} border='1px solid black'>
              Work format
            </Box>
          </Layout>
          <Layout flexBasis={64} />
          <Box width='100%' height={1} backgroundColor='black' />
          <Layout flexBasis={64} />
          <Layout flexDirection={['column', 'column', 'row']}>
            {workFormats.sort(sortByOrder).map(({ title, content }) => (
              <Box width={['100%', '100%', 400]} height={250} border='1px solid blue'>
                {title}
                {content}
              </Box>
            ))}
          </Layout>
          <Layout flexBasis={240} />
          <Layout width='100%' maxWidth={1280}>
            <Column justifyContent='center' width='100%'>
              <Layout flexBasis={120} />
              <Row>
                <Box height={64} width='100%' border='1px solid black'>
                  Отзывы клиентов
                </Box>
                <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
                <Box height={64} width='100%' border='1px solid black'>
                  Arrows
                </Box>
              </Row>
              <Layout flexBasis={48} />
              <Row>
                {reviews.map(({ title, content, excerpt, featuredImage }) => (
                  <>
                    <Box width={100} height={100} border='1px solid blue'>
                      <Image
                        src={featuredImage?.node.link}
                        alt={featuredImage?.node.altText}
                        contain
                      />
                      {title}
                      {excerpt}
                      {content}
                    </Box>
                    <Layout flexBasis={32} />
                  </>
                ))}
              </Row>
              <Layout flexBasis={120} />
            </Column>
          </Layout>
          <Layout flexBasis={160} />
        </Column>
      </Layout>
    </Box>
  )
}
export { WorkFormat }
