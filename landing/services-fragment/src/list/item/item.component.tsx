import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { Condition }   from '@ui/condition'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Link }        from '@ui/link'
import { Image }       from '@ui/image'
import { Text }        from '@ui/text'
import { messages }    from '@globals/messages'
import { useLanguage } from '@globals/language'

import { ItemProps }   from './item.interface'

const Item: FC<ItemProps> = ({ image, title, content, reverse = false }) => {
  const [language] = useLanguage()

  return (
    <Box width='100%' height={['auto', 'auto', 520]}>
      <Column width='100%' display={['none', 'none', 'flex']}>
        <Condition match={!reverse}>
          <Row height='100%'>
            <Layout width='100%'>
              <Box width='100%' height='100%'>
                <Image src={image?.sourceUrl} alt={image?.altText} contain />
              </Box>
            </Layout>
            <Layout flexBasis={40} />
            <Column width='100%' justifyContent='center'>
              <Text fontFamily='secondary' fontSize='increased' color='text.primary'>
                {title}
              </Text>
              <Layout flexBasis={16} />
              <Text color='text.secondary'>{content}</Text>
              <Layout flexBasis={70} />
              <Layout>
                <Link href='#feedback'>
                  <Button colors='secondary' width={119} height={18}>
                    {messages.orderService[language]}
                  </Button>
                </Link>
              </Layout>
            </Column>
          </Row>
        </Condition>
        <Condition match={reverse}>
          <Row height='100%'>
            <Column width='100%' justifyContent='center'>
              <Text fontFamily='secondary' fontSize='increased' color='text.primary'>
                {title}
              </Text>
              <Layout flexBasis={16} />
              <Text color='text.secondary'>{content}</Text>
              <Layout flexBasis={70} />
              <Layout>
                <Link href='#feedback'>
                  <Button colors='secondary' width={119} height={18}>
                    {messages.orderService[language]}
                  </Button>
                </Link>
              </Layout>
            </Column>
            <Layout flexBasis={40} />
            <Layout width='100%'>
              <Box width='100%' height='100%'>
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
              <Text fontFamily='secondary' fontSize='increased' color='text.primary'>
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Text color='text.secondary'>{content}</Text>
            </Layout>
            <Layout flexBasis={70} />
            <Layout>
              <Link href='#feedback'>
                <Button colors='secondary' width={119} height={18}>
                  {messages.orderService[language]}
                </Button>
              </Link>
            </Layout>
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}
export { Item }
