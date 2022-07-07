import React               from 'react'
import { forwardRef }      from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'
import { normalizeString } from '@globals/data'
import { useLanguage }     from '@globals/language'
import { messages }        from '@globals/messages'
import { useCarousel }     from '@ui/carousel'

import { ArrowRightIcon }  from './icons'
import { ArrowLeftIcon }   from './icons'
import { Item }            from './item'
import { useReviews }      from './data'

export const Reviews = forwardRef((props, ref) => {
  const [language] = useLanguage()
  const reviews = useReviews()

  const carouselChildren = reviews[language].map((review) => (
    <Item
      title={normalizeString(review.title)}
      description={normalizeString(review.excerpt)}
      content={normalizeString(review.content)}
      imageUrl={review.featuredImage?.node?.mediaItemUrl}
    />
  ))

  const { carousel: desktopCarousel, useControls: useDesktopControls } = useCarousel({
    children: carouselChildren,
    spaceBetween: 40,
    slidesPerView: 2,
    height: 300,
    centered: false,
  })

  const { carousel: mobileCarousel } = useCarousel({
    children: carouselChildren,
    spaceBetween: 32,
    slidesPerView: 1,
    height: 300,
    centered: true,
  })

  const { prevProp: desktopPrevProp, nextProp: desktopNextProp } = useDesktopControls()

  return (
    <Box
      ref={ref as any}
      px={['32px', '32px', '0px']}
      backgroundColor='background.lightBeige'
      justifyContent='center'
    >
      <Layout width='100%' maxWidth={1280}>
        <Column justifyContent='center' width='100%'>
          <Layout flexBasis={120} />
          <Row alignItems='center'>
            <Text
              fontFamily='secondary'
              fontWeight='thin'
              textTransform='uppercase'
              fontSize={['semiBig', 'semiBig', 'semiGiant']}
            >
              {messages.reviews[language]}
            </Text>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Layout width={128}>
              <Layout display={['none', 'none', 'flex']}>
                <Button width={44} onClick={desktopPrevProp?.onClick}>
                  <Layout>
                    <ArrowLeftIcon />
                  </Layout>
                </Button>
              </Layout>
              <Layout flexBasis={16} />
              <Layout display={['none', 'none', 'flex']}>
                <Button width={44} onClick={desktopNextProp?.onClick}>
                  <Layout>
                    <ArrowRightIcon />
                  </Layout>
                </Button>
              </Layout>
            </Layout>
          </Row>
          <Layout flexBasis={48} />
          <Layout display={['none', 'none', 'flex']}>{desktopCarousel}</Layout>
          <Layout display={['flex', 'flex', 'none']}>{mobileCarousel}</Layout>
          <Layout flexBasis={120} />
        </Column>
      </Layout>
    </Box>
  )
})
