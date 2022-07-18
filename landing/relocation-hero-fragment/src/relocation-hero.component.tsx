import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Layout }      from '@ui/layout'

import { Container }   from './container'
import { Content }     from './content'
import { Description } from './description'

const RelocationHero: FC = () => {
  const [, setVisible] = useState<boolean>(false)

  const language = 'RU'
  const title = 'Ваша программа переезда в'
  const highlighted = 'США'
  const description =
    'Убежище в Америке для себя и всей семьи. Гарантируем подачу документов с первого раза.'

  const image = {
    url: 'https://wp.misik.pro/wp-content/uploads/2022/07/background.png',
    alt: 'Переезд в США',
  }

  return (
    <Container
      backgroundUrl={image.url}
      altText={image.alt}
      language={language}
      setVisible={setVisible}
      height={668}
    >
      <Layout>
        <Content language='RU' highlightedText={highlighted}>
          {title}
        </Content>
      </Layout>
      <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
      <Layout>
        <Description>{description}</Description>
      </Layout>
      <Layout flexBasis={[106, 106, 120]} flexShrink={0} />
    </Container>
  )
}

export { RelocationHero }
