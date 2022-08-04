import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Button }      from '@ui/button'
import { Condition }   from '@ui/condition'
import { Drawer }      from '@ui/drawer'
import { Image }       from '@ui/image'
import { Layer }       from '@ui/layer'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

import { ItemProps }   from './item.interface'

const Item: FC<ItemProps> = ({ image, title, content, link, reverse = false }) => {
  const [language] = useLanguage()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Box
        width='100%'
        height={['auto', 'auto', 400]}
        itemScope
        itemType='https://schema.org/Thing'
      >
        <Column width='100%' display={['none', 'none', 'flex']}>
          <Condition match={!reverse}>
            <Row height='100%'>
              <Layout>
                <Box width={['100%', '100%', 543]} height='100%'>
                  <Image src={image?.sourceUrl} alt={image?.altText} contain />
                </Box>
              </Layout>
              <Layout flexBasis={40} flexShrink={0} />
              <Column width='100%' justifyContent='center'>
                <Text
                  lineHeight='small'
                  fontFamily='secondary'
                  fontSize='increased'
                  color='text.primary'
                  textTransform='uppercase'
                  itemProp='name'
                >
                  {title}
                </Text>
                <Layout flexBasis={16} />
                {content.split('\n').map((piece, index) => (
                  <>
                    <Text
                      color='text.secondary'
                      lineHeight='big'
                      itemProp='description'
                      fontSize={['tiny', 'tiny', 'regular']}
                    >
                      {piece}
                    </Text>
                    <Layout flexBasis={8} />
                    <Condition match={index === content.split('\n').length - 1}>
                      <Layout flexGrow={1} />
                    </Condition>
                  </>
                ))}
                <Condition match={!link}>
                  <Layout>
                    <Button
                      colors='secondary'
                      width={119}
                      height={18}
                      onClick={() => setVisible(true)}
                    >
                      <Text lineHeight='small'>{messages.orderService[language]}</Text>
                    </Button>
                  </Layout>
                </Condition>
                <Condition match={link}>
                  <Layout>
                    <NextLink path={link}>
                      <Button colors='secondary' height={18}>
                        <Text lineHeight='small'>{messages.moreAboutService[language]}</Text>
                      </Button>
                    </NextLink>
                  </Layout>
                </Condition>
              </Column>
            </Row>
          </Condition>
          <Condition match={reverse}>
            <Row height='100%'>
              <Column width='100%' justifyContent='center'>
                <Text
                  fontFamily='secondary'
                  fontSize='increased'
                  color='text.primary'
                  textTransform='uppercase'
                >
                  {title}
                </Text>
                <Layout flexBasis={16} />
                {content.split('\n').map((piece, index) => (
                  <>
                    <Text
                      color='text.secondary'
                      lineHeight='big'
                      fontSize={['tiny', 'tiny', 'regular']}
                    >
                      {piece}
                    </Text>
                    <Layout flexBasis={16} />
                    <Condition match={index === content.split('\n').length - 1}>
                      <Layout flexGrow={1} />
                    </Condition>
                  </>
                ))}
                <Layout>
                  <Condition match={!link}>
                    <Button
                      colors='secondary'
                      width={119}
                      height={18}
                      onClick={() => setVisible(true)}
                    >
                      <Text lineHeight='small'>{messages.orderService[language]}</Text>
                    </Button>
                  </Condition>
                  <Condition match={link}>
                    <Layout>
                      <NextLink path={link}>
                        <Button colors='secondary' height={18}>
                          <Text lineHeight='small'>{messages.moreAboutService[language]}</Text>
                        </Button>
                      </NextLink>
                    </Layout>
                  </Condition>
                </Layout>
              </Column>
              <Layout flexBasis={40} flexShrink={0} />
              <Layout justifyContent='flex-end'>
                <Box width={['100%', '100%', 543]} height='100%'>
                  <Image src={image?.sourceUrl} alt={image?.altText} contain />
                </Box>
              </Layout>
            </Row>
          </Condition>
        </Column>
        <Column width='100%' display={['flex', 'flex', 'none']}>
          <Layout width='100%'>
            <Box width='100%' height='100%'>
              <Image src={image?.sourceUrl} alt={image?.altText} contain />
            </Box>
          </Layout>
          <Layout flexBasis={50} />
          <Layout>
            <Column width='100%' justifyContent='center'>
              <Layout>
                <Text
                  fontFamily='secondary'
                  fontSize={['moderate', 'moderate', 'increased']}
                  color='text.primary'
                  textTransform='uppercase'
                >
                  {title}
                </Text>
              </Layout>
              <Layout flexBasis={16} />
              {content.split('\n').map((piece) => (
                <Text
                  color='text.secondary'
                  lineHeight='primary'
                  fontSize={['tiny', 'tiny', 'regular']}
                >
                  {piece}
                </Text>
              ))}
              <Layout flexBasis={[24, 24, 70]} />
              <Layout>
                <Condition match={!link}>
                  <Button
                    colors='secondary'
                    width={119}
                    height={18}
                    onClick={() => setVisible(true)}
                  >
                    <Text lineHeight='small'>{messages.orderService[language]}</Text>
                  </Button>
                </Condition>
                <Condition match={link}>
                  <Layout>
                    <NextLink path={link}>
                      <Button colors='secondary' height={18}>
                        <Text lineHeight='small'>{messages.moreAboutService[language]}</Text>
                      </Button>
                    </NextLink>
                  </Layout>
                </Condition>
              </Layout>
            </Column>
          </Layout>
        </Column>
      </Box>
    </>
  )
}
export { Item }
