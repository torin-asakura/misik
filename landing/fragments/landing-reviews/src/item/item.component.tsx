import React                    from 'react'
import { FC }                   from 'react'
import { Swiper as SwiperCore } from 'swiper'
import { useState }             from 'react'

import { Button }               from '@ui/button'
import { Divider }              from '@ui/divider'
import { Image }                from '@ui/image'
import { Layout }               from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { TextEllipsis }         from '@ui/text'
import { useLanguage }          from '@globals/language'
import { messages }             from '@globals/messages'
import { useSwiper }            from '@ui/carousel'

import { PlusIcon }             from '../icons'
import { ArrowRightIcon }       from '../icons'
import { ArrowLeftIcon }        from '../icons'
import { ItemProps }            from './item.interface'

const Avatar = ({ imageUrl }) => (
  <Box width={50} height={50} borderRadius='max' overflow='hidden'>
    <Image src={imageUrl} />
  </Box>
)

const Name = ({ description }) => (
  <Column>
    <Row>
      <Text
        fontFamily='secondary'
        lineHeight='extra'
        fontWeight='medium'
        fontSize={['medium', 'medium', 'semiLarge']}
        textTransform='uppercase'
        whiteSpace='nowrap'
      >
        {description.substring(0, description.lastIndexOf('.'))}
      </Text>
    </Row>
    <Row>
      <Text
        whiteSpace='nowrap'
        color='text.secondary'
        lineHeight='extra'
        fontSize={['tiny', 'tiny', 'small']}
      >
        {description.substring(description.length, description.lastIndexOf('.')).replace(/\./g, '')}
      </Text>
    </Row>
  </Column>
)

const Content = ({ title, content, language, onClick }) => (
  <Layout width='100%' flexDirection={['column', 'column', 'row']}>
    <Row>
      <Text
        color='text.primary'
        fontFamily='secondary'
        lineHeight='default'
        fontSize={['large', 'large', 'increased']}
        itemProp='reviewBody'
      >
        {title}
      </Text>
    </Row>
    <Layout flexGrow={[0, 0, 1]} flexBasis={[20, 20, 0]} flexShrink={[0, 0, 1]} />
    <Row>
      <Column>
        <Layout height={90} overflow='hidden' display={['none', 'none', 'flex']}>
          <TextEllipsis
            color='text.secondary'
            fontSize='regular'
            lineHeight='primary'
            itemProp='reviewBody'
            lineClamp={3}
          >
            {content}
          </TextEllipsis>
        </Layout>
        <Layout height={100} overflow='hidden' display={['flex', 'flex', 'none']}>
          <TextEllipsis
            color='text.secondary'
            fontSize='tiny'
            lineHeight='primary'
            itemProp='reviewBody'
            lineClamp={4}
          >
            {content}
          </TextEllipsis>
        </Layout>
        <Layout flexBasis={[20, 20, 8]} />
        <Layout display={['none', 'none', 'flex']}>
          <Button size='normal' colors='ternary' p={0} onClick={onClick}>
            <PlusIcon />
            {messages.more[language]}
          </Button>
        </Layout>
        <Layout display={['flex', 'flex', 'none']}>
          <Button size='small' colors='ternary' p={0} onClick={onClick}>
            <PlusIcon />
            {messages.more[language]}
          </Button>
        </Layout>
      </Column>
    </Row>
  </Layout>
)

const Item: FC<ItemProps> = ({ title, content, description, imageUrl, onClick }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [language] = useLanguage()

  const swiperInstance = useSwiper()

  if (!swiper) {
    setSwiper(swiperInstance)
  }

  return (
    <Box
      width='100%'
      height={[424, 424, 372]}
      backgroundColor='background.beige'
      borderRadius='big'
      overflow={['visible', 'visible', 'hidden']}
      itemScope
      itemType='https://schema.org/Review'
    >
      <Layout flexBasis={[0, 0, 52]} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={[20, 20, 52]} flexShrink={0} />
        <Row>
          <Row height={['100%', '100%', 135]} overflow='hidden'>
            <Content onClick={onClick} title={title} content={content} language={language} />
          </Row>
        </Row>
        <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
        <Row>
          <Divider />
        </Row>
        <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
        <Row height={[424, 424, 257]}>
          <Column display={['none', 'none', 'flex']}>
            <Avatar imageUrl={imageUrl} />
          </Column>
          <Layout flexBasis={[0, 0, 16]} flexShrink={0} />
          <Row fill display={['none', 'none', 'flex']}>
            <Layout>
              <Name description={description} />
            </Layout>
            <Layout flexBasis={[56, 56, 0]} flexShrink={[0, 0, 1]} />
            <Row alignItems='center'>
              <Layout flexGrow={[0, 0, 1]} />
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
              <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, 80]} flexShrink={0} />
            </Row>
          </Row>
          <Column fill justifyContent='flex-end' display={['flex', 'flex', 'none']}>
            <Row>
              <Layout>
                <Avatar imageUrl={imageUrl} />
              </Layout>
              <Layout flexBasis={20} />
              <Layout>
                <Name description={description} />
              </Layout>
            </Row>
            <Layout flexGrow={1} flexBasis={[24, 24, 0]} />
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
      <Layout flexBasis={[0, 0, 35]} flexShrink={0} />
    </Box>
  )
}
export { Item }
