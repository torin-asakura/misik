import React             from 'react'
import { FC }            from 'react'
import { useMemo }       from 'react'

import { Layout }        from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { Container }     from './container'
import { Content }       from './content'
import { Description }   from './description'

const RelocationHero: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let { title, highlighted, description, imageUrl, mobileImageUrl } = useMemo(() => {
    if (!(fragments && fragments.relocationhero)) {
      return { title: '', highlighted: '', description: '', imageUrl: '', imageAlt: '' }
    }

    const titleObj = extractObject('title', fragments.relocationhero[language])
    const contentObj = extractObject('content', fragments.relocationhero[language])
    description = contentObj?.title
    title = titleObj?.title
    highlighted = titleObj?.fragmentParams.highlightedText
    imageUrl = titleObj?.featuredImage?.node.sourceUrl
    mobileImageUrl = titleObj?.fragmentParams?.image.sourceUrl

    return {
      title,
      highlighted,
      description,
      imageUrl,
      mobileImageUrl,
    }
  }, [fragments, language])

  return (
    <Container
      backgroundUrl={imageUrl}
      mobileBackgroundUrl={mobileImageUrl}
      language={language}
      height={668}
    >
      <Layout>
        <AnimateOnLoad
          initial={{ opacity: 0, y: '100%' }}
          transition={{ duration: 1 }}
          animation={{ y: 0, opacity: 1 }}
        >
          <Content language={language} highlightedText={highlighted}>
            {title}
          </Content>
        </AnimateOnLoad>
      </Layout>
      <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
      <Layout>
        <AnimateOnLoad
          initial={{ opacity: 0, y: '100%' }}
          transition={{ duration: 1 }}
          animation={{ y: 0, opacity: 1 }}
        >
          <Description>{description}</Description>
        </AnimateOnLoad>
      </Layout>
      <Layout flexBasis={[106, 106, 120]} />
    </Container>
  )
}

export { RelocationHero }
