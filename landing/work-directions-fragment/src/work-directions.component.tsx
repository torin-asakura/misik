import React                 from 'react'
import { FC }                from 'react'

import { Divider }           from '@ui/divider'
import { Image }             from '@ui/image'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useLanguage }       from '@globals/language'

import { Carousel }          from './carousel'
import { useWorkDirections } from './data'

const WorkDirections: FC = () => {
  const workDirections = useWorkDirections()
  const [language] = useLanguage()

  return (
    <Box width='100%' height={[290, 290, 380]} backgroundColor='background.lightBeige'>
      <Column fill alignItems='center'>
        <Layout flexBasis={80} />
        <Box width='100%' overflow='hidden' justifyContent='center'>
          <Carousel>
            {workDirections[language].map(({ title, featuredImage }) => (
              <Layout maxWidth={200} maxHeight={220}>
                <Column alignItems='center' itemScope itemType='https://schema.org/Thing'>
                  <Box width={200} height={140}>
                    <Image
                      contain
                      src={featuredImage?.node?.sourceUrl}
                      alt={featuredImage?.node?.altText}
                    />
                  </Box>
                  <Layout flexBasis={24} flexShrink={0} />
                  <Layout height={48}>
                    <Text
                      fontFamily='secondary'
                      fontWeight='medium'
                      fontSize={['medium', 'medium', 'semiLarge']}
                      textAlign='center'
                      textTransform='uppercase'
                      itemProp='name'
                    >
                      {title}
                    </Text>
                  </Layout>
                </Column>
              </Layout>
            ))}
          </Carousel>
        </Box>
        <Layout flexBasis={80} />
        <Layout>
          <Divider />
        </Layout>
      </Column>
    </Box>
  )
}

export { WorkDirections }
