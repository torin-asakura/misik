import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { Divider }        from '@ui/divider'
import { Image }          from '@ui/image'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { ArrowRightIcon } from '../icons'
import { ArrowLeftIcon }  from '../icons'
import { ItemProps }      from './item.interface'

const Avatar = ({ imageUrl }) => (
  <Box width={[56, 56, 50]} height={[56, 56, 50]} borderRadius='max' overflow='hidden'>
    <Image src={imageUrl} />
  </Box>
)

const Name = ({ title, description }) => (
  <Column width={159}>
    <Row>
      <Text
        fontFamily='secondary'
        lineHeight='extra'
        fontWeight='medium'
        fontSize='semiLarge'
        textTransform='uppercase'
      >
        {title}
      </Text>
    </Row>
    <Row>
      <Text color='text.secondary' lineHeight='extra' fontSize='small'>
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

const Item: FC<ItemProps> = ({ title, content, description, imageUrl, swiper }) => (
  <Box
    width='100%'
    height={[444, 444, 372]}
    backgroundColor='background.beige'
    borderRadius='big'
    overflow={['visible', 'visible', 'hidden']}
    itemScope
    itemType='https://schema.org/Review'
  >
    <Layout flexBasis={[20, 20, 52]} flexShrink={0} />
    <Column fill>
      <Layout flexBasis={[20, 20, 52]} flexShrink={0} />
      <Row>
        <Layout flexGrow={1} />
        <Row width={558} height={[242, 242, 113]} overflow='hidden'>
          <Content content={content} />
        </Row>
      </Row>
      <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
      <Row>
        <Divider />
      </Row>
      <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
      <Row height={[355, 355, 257]}>
        <Column display={['none', 'none', 'flex']}>
          <Avatar imageUrl={imageUrl} />
        </Column>
        <Layout flexBasis={[0, 0, 16]} flexShrink={0} />
        <Row fill display={['none', 'none', 'flex']}>
          <Layout>
            <Name title={title} description={description} />
          </Layout>
          <Layout flexBasis={[56, 56, 373]} flexShrink={[0, 0, 0]} />
          <Row alignItems='center'>
            <Layout width={128}>
              <Layout display={['none', 'none', 'flex']}>
                <Button width={56} height={56} onClick={() => swiper?.slidePrev()}>
                  <Layout>
                    <ArrowLeftIcon />
                  </Layout>
                </Button>
              </Layout>
              <Layout flexBasis={16} />
              <Layout display={['none', 'none', 'flex']}>
                <Button width={56} height={56} onClick={() => swiper?.slideNext()}>
                  <Layout>
                    <ArrowRightIcon />
                  </Layout>
                </Button>
              </Layout>
            </Layout>
          </Row>
          <Layout flexBasis={48} />
        </Row>
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
          <Layout flexGrow={1} />
          <Row justifyContent='center'>
            <Layout>
              <Button size='medium' width={40} height={40} onClick={() => swiper?.slidePrev()}>
                <Layout>
                  <ArrowLeftIcon />
                </Layout>
              </Button>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Button size='medium' width={40} height={40} onClick={() => swiper?.slideNext()}>
                <Layout>
                  <ArrowRightIcon />
                </Layout>
              </Button>
            </Layout>
          </Row>
        </Column>
      </Row>
      <Layout flexBasis={[20, 20, 58]} flexShrink={0} />
    </Column>
    <Layout flexBasis={[20, 20, 35]} flexShrink={0} />
  </Box>
)
export { Item }
