import React         from 'react'
import { FC }        from 'react'

import { Divider }   from '@ui/divider'
import { Image }     from '@ui/image'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'

const Avatar = ({ imageUrl }) => (
  <Box
    width={[56, 56, 64]}
    height={[56, 56, 64]}
    borderRadius='max'
    overflow='hidden'
    backgroundColor='red'
  >
    <Image src={imageUrl} />
  </Box>
)

const Name = ({ title, description }) => (
  <Column>
    <Row>
      <Text fontFamily='secondary' fontSize='semiLarge' textTransform='uppercase'>
        {title}
      </Text>
    </Row>
    <Layout flexBasis={8} />
    <Row>
      <Text color='text.secondary' fontSize='small'>
        {description}
      </Text>
    </Row>
  </Column>
)

const Content = ({ content }) => (
  <Text color='text.secondary' fontSize='regular' lineHeight='primary' itemProp='reviewBody'>
    {content}
  </Text>
)

const Item: FC<ItemProps> = ({ title, content, description, imageUrl }) => (
  <Box
    width={['100%', '100%', 601]}
    height={276}
    backgroundColor='background.lightBeige'
    borderRadius='normal'
    overflow='hidden'
    itemScope
    itemType='https://schema.org/Review'
  >
    <Column fill>
      <Row>
        <Divider />
      </Row>
      <Layout flexBasis={[24, 24, 40]} />
      <Row height={[355, 355, 257]}>
        <Column display={['none', 'none', 'flex']}>
          <Avatar imageUrl={imageUrl} />
        </Column>
        <Layout flexBasis={[0, 0, 24]} />
        <Column fill display={['none', 'none', 'flex']}>
          <Layout>
            <Name title={title} description={description} />
          </Layout>
          <Layout flexBasis={29} />
          <Row>
            <Content content={content} />
          </Row>
        </Column>
        <Column fill display={['flex', 'flex', 'none']}>
          <Row>
            <Layout>
              <Avatar imageUrl={imageUrl} />
            </Layout>
            <Layout flexBasis={20} />
            <Layout>
              <Name title={title} description={description} />
            </Layout>
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Content content={content} />
          </Row>
        </Column>
      </Row>
    </Column>
  </Box>
)
export { Item }
