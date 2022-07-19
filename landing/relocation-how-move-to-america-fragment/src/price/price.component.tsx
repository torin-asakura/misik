import React              from 'react'
import { FC }             from 'react'

import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Dollar }         from '@ui/text'
import { Space }          from '@ui/text'

import { prettifyNumber } from '../helpers'

const Price: FC = () => {
  const title = 'Оформите заявку на сайте'
  const pricePerPerson = 15000
  const pricePerFamily = 25000
  const titlePerson = 'За одного человека'
  const titleFamily = 'За семью'
  const contentFamily = '(Дети до 16 - бесплатно)'

  return (
    <Column fill>
      <Row>
        <Text
          textTransform='uppercase'
          fontSize='semiLarge'
          fontWeight='medium'
          fontFamily='secondary'
          lineHeight='extra'
        >
          {title}
        </Text>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Column>
          <Row>
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
            >
              {prettifyNumber(pricePerPerson)}
            </Text>
            <Space />
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
            >
              <Dollar />
            </Text>
          </Row>
          <Layout flexBasis={8} flexShrink={0} />
          <Row>
            <Text fontSize='small' color='text.secondary' lineHeight='extra'>
              {titlePerson}
            </Text>
          </Row>
        </Column>
        <Layout flexBasis={[20, 20, 64]} />
        <Column>
          <Row>
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
            >
              {prettifyNumber(pricePerFamily)}
            </Text>
            <Space />
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
            >
              <Dollar />
            </Text>
          </Row>
          <Layout flexBasis={8} flexShrink={0} />
          <Row width={158}>
            <Layout>
              <Text display='inline' fontSize='small' color='text.secondary' lineHeight='extra'>
                {titleFamily}
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text display='inline' fontSize='small' color='text.disabled' lineHeight='extra'>
                {contentFamily}
              </Text>
            </Layout>
          </Row>
        </Column>
      </Row>
    </Column>
  )
}

export { Price }
