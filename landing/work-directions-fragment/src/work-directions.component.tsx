import React                 from 'react'
import { FC }                from 'react'

import { Divider }           from '@ui/divider'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Image }             from '@ui/image'
import { Text }              from '@ui/text'
import { useLanguage }       from '@globals/language'

import { useWorkDirections } from './data'
import { Carousel }          from './carousel'

const WorkDirections: FC = () => {
  const workDirections = useWorkDirections()
  const [language] = useLanguage()

  return (
    <Box
      width='100%'
      minHeight={[290, 290, 380]}
      backgroundColor='background.lightBeige'
      overflowX='scroll'
    >
      <Column width='100%'>
        <Layout flexBasis={80} />
        <Carousel>
          {workDirections[language].map(({ title, featuredImage }) => (
            <>
              <Column alignItems='center'>
                <Box width={200} height={140}>
                  <Image
                    contain
                    src={featuredImage?.node?.sourceUrl}
                    alt={featuredImage?.node?.altText}
                  />
                </Box>
                <Layout flexBasis={16} />
                <Layout>
                  <Text
                    fontFamily='secondary'
                    fontWeight='medium'
                    fontSize={['medium', 'medium', 'semiLarge']}
                    textAlign='center'
                    textTransform='uppercase'
                  >
                    {title}
                  </Text>
                </Layout>
              </Column>
              <Layout flexBasis={80} flexShrink={0} />
            </>
          ))}
        </Carousel>
        <Layout flexBasis={80} />
        <Divider />
      </Column>
    </Box>
  )
}

export { WorkDirections }
