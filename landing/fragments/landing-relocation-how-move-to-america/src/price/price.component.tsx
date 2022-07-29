import React                   from 'react'
import { FC }                  from 'react'

import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { Dollar }              from '@ui/text'
import { Space }               from '@ui/text'
import { useLanguage }         from '@globals/language'

import { PriceProps }          from './price.interface'
import { useRelocationPrices } from '../data'
import { extractObject }       from '../helpers'
import { prettifyNumber }      from '../helpers'

const Price: FC<PriceProps> = ({ description }) => {
  const [language] = useLanguage()

  const relocationPrices = useRelocationPrices()

  let pricePerPerson = 0
  let pricePerFamily = 0
  let titlePerson = ''
  let titleFamily = ''
  let contentFamily = ''

  if (relocationPrices) {
    const titleObj = extractObject('one-person', relocationPrices[language])
    const titleFamilyObj = extractObject('family', relocationPrices[language])
    const highlightedTextObj = extractObject('family', relocationPrices[language])
    const pricePerPersonObj = extractObject('one-person', relocationPrices[language])
    const pricePerFamilyObj = extractObject('family', relocationPrices[language])
    titlePerson = titleObj?.title
    titleFamily = titleFamilyObj?.title
    contentFamily = highlightedTextObj?.relocationParams.highlightedtext
    pricePerPerson = pricePerPersonObj?.relocationParams.price
    pricePerFamily = pricePerFamilyObj?.relocationParams.price
  }

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
          {description}
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
              style={{ fontVariantNumeric: 'lining-nums' }}
            >
              {prettifyNumber(pricePerPerson)}
            </Text>
            <Space />
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
              style={{ fontVariantNumeric: 'lining-nums' }}
            >
              <Dollar />
            </Text>
          </Row>
          <Layout flexBasis={8} flexShrink={0} />
          <Row width={158}>
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
              style={{ fontVariantNumeric: 'lining-nums' }}
            >
              {prettifyNumber(pricePerFamily)}
            </Text>
            <Space />
            <Text
              fontSize={['semiBig', 'semiBig', 'increased']}
              lineHeight='small'
              color='text.accent'
              fontFamily='secondary'
              style={{ fontVariantNumeric: 'lining-nums' }}
            >
              <Dollar />
            </Text>
          </Row>
          <Layout flexBasis={8} flexShrink={0} />
          <Row maxWidth={257}>
            <Layout>
              <Text display='inline' fontSize='small' color='text.secondary' lineHeight='extra'>
                {titleFamily}
                <Space />
                <Text display='inline' fontSize='small' color='text.disabled' lineHeight='extra'>
                  {contentFamily}
                </Text>
              </Text>
            </Layout>
          </Row>
        </Column>
      </Row>
    </Column>
  )
}

export { Price }
