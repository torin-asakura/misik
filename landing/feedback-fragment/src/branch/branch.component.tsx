import React                from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Copy }             from '@ui/copy'
import { Divider }          from '@ui/divider'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { useMessengerIcon } from '../data'

export const Branch = ({
  title,
  highlighted,
  address,
  phone,
  messengers,
  workingHours,
  workingHoursHighlighted,
  index,
}) => {
  const messengerIcons = new Map()

  // eslint-disable-next-line
  messengers?.forEach((messenger) => messengerIcons.set(messenger, useMessengerIcon(messenger)))

  const getMessengerLink = (messenger) =>
    ({
      whatsapp: `https://wa.me/${phone}`,
      viber: `viber://chat?number=%2B${phone}`,
    }[messenger])

  return (
    <Box width='100%'>
      <Column fill>
        <Row>
          <Text
            display='inline'
            fontFamily='secondary'
            fontWeight='thin'
            fontSize={['moderate', 'moderate', 'increased']}
            textTransform='uppercase'
          >
            {title.replace(highlighted, '')}
          </Text>
          <Text
            fontFamily='secondary'
            color='text.accent'
            fontWeight='thin'
            fontSize={['moderate', 'moderate', 'increased']}
            textTransform='uppercase'
            fontStyle='italic'
          >
            <Space />
            {highlighted}
          </Text>
        </Row>
        <Layout flexBasis={[8, 8, 16]} />
        <Row>
          <Text fontSize={['semiRegular', 'semiRegular', 'regular']} color='text.secondary'>
            {address}
          </Text>
        </Row>
        <Layout flexBasis={[16, 16, 32]} />
        <Row>
          <Divider />
        </Row>
        <Layout flexBasis={[16, 16, 32]} />
        <Row
          alignItems={messengers?.length > 0 ? 'flex-start' : ['center', 'center', 'flex-start']}
          width='100%'
        >
          <Link
            href={`tel:${phone}`}
            fontSize={['large', 'large', 'enlarged']}
            fontWeight='thin'
            itemProp='telephone'
            fontFamily='secondary'
            style={{ fontVariantNumeric: 'lining-nums' }}
          >
            {phone}
          </Link>
          <Layout flexBasis={16} flexShrink={0} />
          <Row>
            <Layout display={['flex', 'flex', 'none']}>
              <Copy content={phone} />
            </Layout>
            {messengers?.map((messenger) => (
              <>
                <Layout flexBasis={16} />
                <Link href={getMessengerLink(messenger)} target='_blank'>
                  <Box width={[32, 32, 40]} height={[32, 32, 40]}>
                    <Button width='100%' height='100%' px={0}>
                      <Layout>
                        <Image
                          src={messengerIcons.get(messenger)?.sourceUrl}
                          alt={messengerIcons.get(messenger)?.altText}
                          contain
                        />
                      </Layout>
                    </Button>
                  </Box>
                </Link>
              </>
            ))}
          </Row>
        </Row>
        <Layout flexBasis={[8, 8, 12]} />
        <Condition match={index === 0}>
          <Row>
            <Layout>
              <Text fontSize={['semiRegular', 'semiRegular', 'regular']} color='text.secondary'>
                {workingHours}
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text fontSize={['semiRegular', 'semiRegular', 'regular']} color='text.accent'>
                {workingHoursHighlighted.substr(0, workingHoursHighlighted.indexOf(' '))}
              </Text>
            </Layout>
          </Row>
        </Condition>
        <Condition match={index === 1}>
          <Row>
            <Layout>
              <Text fontSize={['semiRegular', 'semiRegular', 'regular']} color='text.secondary'>
                {workingHours}
              </Text>
            </Layout>
            <Space />
            <Layout>
              <Text fontSize={['semiRegular', 'semiRegular', 'regular']} color='text.accent'>
                {workingHoursHighlighted.substr(8, workingHoursHighlighted.indexOf(' '))}
              </Text>
            </Layout>
          </Row>
        </Condition>
      </Column>
    </Box>
  )
}
