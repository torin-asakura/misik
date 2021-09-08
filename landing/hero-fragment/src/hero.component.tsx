import React             from 'react'
import { FC }            from 'react'

import { Button }        from '@ui/button'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Text }          from '@ui/text'
import { Image }         from '@ui/image'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

const Hero: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let title: string = ''
  let highlighted: string = ''
  const image = {
    url: '',
    alt: '',
  }

  if (fragments && fragments.hero) {
    const titleObj = extractObject('title', fragments.hero[language])

    title = titleObj?.title
    highlighted = titleObj?.fragmentParams.highlightedText
    image.url = titleObj?.featuredImage?.node.sourceUrl
    image.alt = titleObj?.featuredImage?.node.altText
  }

  return (
    <Box width='100%' height='100%' borderRadius='bottomHuge'>
      <Image background src={image.url} alt={image.alt} />
      <Layout flexBasis={[16, 16, 0]} />
      <Column width='100%'>
        <Layout flexBasis={[40, 40, 80]} />
        <Layout maxWidth={864}>
          <Text
            display='inline-block'
            fontFamily='secondary'
            fontWeight='thin'
            fontSize={['big', 'big', 'giant']}
          >
            {title.replace(highlighted, '')}
            <Text
              display='inline-block'
              fontFamily='secondary'
              color='text.accent'
              fontWeight='thin'
              fontSize={['big', 'big', 'giant']}
            >
              {highlighted}
            </Text>
          </Text>
        </Layout>
        <Layout flexGrow={1} />
        <Button colors='secondary' width='min-content' height={34}>
          <Text fontSize='medium'>Получить консультацию</Text>
        </Button>
        <Layout flexBasis={[40, 40, 80]} />
      </Column>
      <Layout flexBasis={[16, 16, 0]} />
    </Box>
  )
}

export { Hero }
