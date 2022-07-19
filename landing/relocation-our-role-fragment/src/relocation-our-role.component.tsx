import React      from 'react'
import { FC }     from 'react'

import { Image }  from '@ui/image'
import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'
import { Space }  from '@ui/text'

const RelocationOurRole: FC = () => {
  const mainText = {
    title: 'Наша роль и ответсвтенность в',
    highlighted: 'Вашем переезде',
  }

  const image = {
    imageUrl: 'https://wp.misik.pro/wp-content/uploads/2022/07/our-role.png',
    altText: 'Наша роль и ответсвтенность',
  }

  const content =
    'Мы занимаемся как организацией переезда, так и решением любого вопроса на территории США.'
  const additionalContent =
    'Мы понимаем, что кардинальное изменение жизни — это стресс. Поэтому мы всегда выслушаем, поможем, поддержим и выполним свою работу вовремя и без вовлечения вас в сам процесс.'

  return (
    <Box width='100%' backgroundColor='background.lightBeige' justifyContent='center'>
      <Layout width='100%' maxWidth={1243}>
        <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
        <Column>
          <Layout flexBasis={[64, 64, 160]} />
          <Layout alignItems='flex-end' flexDirection={['column-reverse', 'column-reverse', 'row']}>
            <Column height='auto' width={['100%', '100%', 660]}>
              <Layout>
                <Text
                  display='inline'
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='thin'
                  fontSize={['semiBig', 'semiBig', 'semiGiant']}
                  lineHeight='small'
                >
                  {mainText.title}
                  <Space />
                  <Text
                    display='inline'
                    color='text.accent'
                    fontFamily='secondary'
                    fontWeight='thin'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    lineHeight='small'
                  >
                    {mainText.highlighted}
                  </Text>
                </Text>
              </Layout>
              <Layout flexBasis={[16, 16, 32]} flexShrink={0} />
              <Column>
                <Row>
                  <Text
                    color='text.secondary'
                    fontSize={['tiny', 'tiny', 'regular']}
                    lineHeight='big'
                  >
                    {content}
                  </Text>
                </Row>
                <Layout flexBasis={[0, 0, 32]} />
                <Row>
                  <Text
                    color='text.secondary'
                    fontSize={['tiny', 'tiny', 'regular']}
                    lineHeight='big'
                  >
                    {additionalContent}
                  </Text>
                </Row>
              </Column>
            </Column>
            <Layout flexBasis={40} flexShrink={0} />
            <Box width={[335, 335, 543]} height={[216, 216, 350]}>
              <Image alt={image.altText} src={image.imageUrl} contain />
            </Box>
          </Layout>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
        <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
      </Layout>
    </Box>
  )
}

export { RelocationOurRole }
