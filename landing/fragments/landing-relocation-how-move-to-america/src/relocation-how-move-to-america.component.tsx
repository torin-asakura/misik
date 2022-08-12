import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'
import { useMemo }       from 'react'

import { Button }        from '@ui/button'
import { Divider }       from '@ui/divider'
import { Drawer }        from '@ui/drawer'
import { Image }         from '@ui/image'
import { Layer }         from '@ui/layer'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'
import { messages }      from '@globals/messages'

import { MisikLawIcon }  from './icons'
import { Price }         from './price'

const RelocationHowMoveToAmerica: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  const [visibleConsult, setVisibleConsult] = useState<boolean>(false)
  const [visibleDescription, setVisibleDescription] = useState<boolean>(false)

  let { title, highlightedText, content, description, imageUrl, imageAlt } = useMemo(() => {
    if (!(fragments && fragments.relocationhowmovetous)) {
      return { title: '', highlightedText: '', content: '', description: '' }
    }

    const titleObj = extractObject('title', fragments.relocationhowmovetous[language])
    const contentObj = extractObject('title', fragments.relocationhowmovetous[language])
    const descriptionObj = extractObject('description', fragments.relocationhowmovetous[language])
    title = titleObj?.title
    content = contentObj?.content
    description = descriptionObj?.title
    highlightedText = titleObj?.fragmentParams.highlightedText
    imageUrl = titleObj?.featuredImage?.node.sourceUrl
    imageAlt = titleObj?.featuredImage?.node.altText

    return {
      title,
      highlightedText,
      content,
      description,
      imageUrl,
      imageAlt,
    }
  }, [fragments, language])

  return (
    <>
      <Layer visible={visibleConsult} onClose={() => setVisibleConsult(!visibleConsult)} />
      <Drawer active={visibleConsult} onClose={() => setVisibleConsult(!visibleConsult)} />
      <Layer
        visible={visibleDescription}
        onClose={() => setVisibleDescription(!visibleDescription)}
        display='relocation-description'
        scroll
      />
      <Drawer
        active={visibleDescription}
        onClose={() => setVisibleDescription(!visibleDescription)}
        display='relocation-description'
        scroll
        activeProgressBar
        heightProgressBar={240}
      />
      <Box
        width='100%'
        minHeight='100%'
        justifyContent='center'
        backgroundColor='background.lightBeige'
      >
        <Layout width='100%' maxWidth={1243}>
          <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
          <Column fill>
            <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
            <Layout
              alignItems={['center', 'center', 'flex-start']}
              flexDirection={['column', 'column', 'row']}
            >
              <Box position='relative' width={[335, 335, 480]} height={[335, 335, 480]}>
                <Image alt={imageAlt} src={imageUrl} contain />
                <Box position='absolute' top={['42%', '42%', '40%']} left={[2, 2, -1]}>
                  <Layout display={['none', 'none', 'flex']}>
                    <MisikLawIcon width={140} height={140} />
                  </Layout>
                  <Layout display={['flex', 'flex', 'none']}>
                    <MisikLawIcon width={90} height={90} />
                  </Layout>
                </Box>
              </Box>
              <Layout flexBasis={[0, 0, 40]} />
              <Column width={['100%', '100%', 660]}>
                <Layout flexBasis={[40, 40, 0]} />
                <Row width={['100%', '100%', 500]}>
                  <Text
                    display='inline'
                    fontFamily='secondary'
                    fontWeight='thin'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    textTransform='uppercase'
                    lineHeight='small'
                  >
                    {title}
                    <Space />
                    <Text
                      display='inline'
                      color='text.accent'
                      fontFamily='secondary'
                      fontStyle='italic'
                      fontWeight='thin'
                      fontSize={['semiBig', 'semiBig', 'semiGiant']}
                      textTransform='uppercase'
                      lineHeight='small'
                    >
                      {highlightedText}
                    </Text>
                  </Text>
                </Row>
                <Layout flexBasis={32} />
                <Row>
                  <Text color='text.secondary' fontSize='regular' lineHeight='big'>
                    {content}
                  </Text>
                </Row>
                <Layout flexBasis={32} />
                <Layout>
                  <Divider />
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <Price description={description} />
                </Layout>
                <Layout flexBasis={32} />
                <Layout flexDirection={['column', 'column', 'row']} alignItems='center'>
                  <Layout>
                    <Button colors='primary' onClick={() => setVisibleConsult(true)}>
                      {messages.getConsult[language]}
                    </Button>
                  </Layout>
                  <Layout flexBasis={[24, 24, 32]} />
                  <Layout>
                    <Button
                      colors='transparent'
                      size='ghost'
                      onClick={() => setVisibleDescription(true)}
                    >
                      <Text fontSize='semiRegular' lineHeight='small'>
                        {messages.servicesDescription[language]}
                      </Text>
                    </Button>
                  </Layout>
                </Layout>
              </Column>
            </Layout>
            <Layout flexBasis={[64, 64, 160]} flexShrink={0} />
          </Column>
          <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
        </Layout>
      </Box>
    </>
  )
}

export { RelocationHowMoveToAmerica }
