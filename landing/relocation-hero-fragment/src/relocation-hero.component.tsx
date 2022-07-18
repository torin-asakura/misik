import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Layout }      from '@ui/layout'
import { messages }    from '@globals/messages'

import { Container }   from './container'
import { Content }     from './content'
import { CTA }         from './CTA'
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
    <Container backgroundUrl={image.url} altText={image.alt} height={668}>
      <Content language='RU' highlightedText={highlighted}>
        {title}
      </Content>
      <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
      <Description description={description} />
      <Layout flexBasis={[106, 106, 120]} flexShrink={0} />
      <CTA setVisible={setVisible} message={messages.getConsult[language]} />
      <Layout flexBasis={[40, 40, 80]} flexShrink={0} />
    </Container>
  )
}

export { RelocationHero }
