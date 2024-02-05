import React                 from 'react'
import { FC }                from 'react'

import { Divider }           from '@ui/divider'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useLanguage }       from '@globals/language'

import { Carousel }          from './carousel'
import { useWorkDirections } from './data'
import { elements }          from './work-directions.contants'

const WorkDirections: FC = () => {
  const workDirections = useWorkDirections()
  const [language] = useLanguage()

  return (
    <Box width='100%' height={['auto', 'auto', 380]} backgroundColor='background.lightBeige'>
      <Column fill alignItems='center'>
        <Layout flexBasis={[40, 40, 80]} />
        <Box width='100%' overflow='hidden' justifyContent='center'>
          <Carousel>
            {workDirections[language].map(({ title }) => (
              <Layout key={title} maxWidth={200} maxHeight={220}>
                <Column alignItems='center' itemScope itemType='https://schema.org/Thing'>
                  <Box width={200} height={140}>
                    {elements[language][title]}
                  </Box>
                  <Layout flexBasis={24} flexShrink={0} />
                  <Layout height={49}>
                    <Text
                      fontFamily='secondary'
                      fontWeight='medium'
                      lineHeight='extra'
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
        <Layout flexBasis={[40, 40, 80]} />
        <Layout width='100%'>
          <Divider />
        </Layout>
      </Column>
    </Box>
  )
}

export { WorkDirections }
