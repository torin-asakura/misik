import React           from 'react'
import { FC }          from 'react'

import { Divider }     from '@ui/divider'
import { Image }       from '@ui/image'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { useBenefits } from './data'

const RelocationProgramBenefits: FC = () => {
  const { benefits } = useBenefits()

  const mainText = 'Преимущества нашей программы'

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.beige'>
      <Layout flexBasis={[20, 20, 397]} flexShrink={0} />
      <Layout maxWidth={1284}>
        <Column fill height='auto'>
          <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          <Row>
            <Text
              color='text.primary'
              fontWeight='thin'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
              lineHeight='small'
              fontFamily='secondary'
              textTransform='uppercase'
            >
              {mainText}
            </Text>
          </Row>
          <Layout flexBasis={[32, 32, 64]} flexShrink={0} />
          <Layout>
            <Divider />
          </Layout>
          <Layout flexBasis={[32, 32, 64]} flexShrink={0} />
          <Row flexWrap='wrap'>
            {benefits.map(({ id, title, description }) => (
              <Column key={id} width={['100%', '100%', 388]} marginRight={[0, 0, 40]} height='auto'>
                <Row>
                  <Box width={72} height={72} borderRadius='max' border='1 px solid black'>
                    <Image />
                  </Box>
                </Row>
                <Layout flexBasis={24} />
                <Row>
                  <Text
                    color='text.primary'
                    fontSize='large'
                    lineHeight='small'
                    fontFamily='secondary'
                    textTransform='uppercase'
                    fontWeight='medium'
                  >
                    {title}
                  </Text>
                </Row>
                <Layout flexBasis={16} />
                <Row>
                  <Text
                    color='text.secondary'
                    fontSize={['tiny', 'tiny', 'regular']}
                    lineHeight='big'
                  >
                    {description}
                  </Text>
                </Row>
                <Layout flexBasis={[40, 40, 80]} />
              </Column>
            ))}
          </Row>
          <Layout flexBasis={[64, 64, 80]} flexShrink={0} />
        </Column>
      </Layout>
      <Layout flexBasis={[20, 20, 239]} flexShrink={0} />
    </Box>
  )
}

export { RelocationProgramBenefits }