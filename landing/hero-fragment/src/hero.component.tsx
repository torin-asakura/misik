import React             from 'react'
import { useState }      from 'react'
import { forwardRef }    from 'react'

import { Button }        from '@ui/button'
import { Condition }     from '@ui/condition'
import { Drawer }        from '@ui/drawer'
import { Image }         from '@ui/image'
import { Layer }         from '@ui/layer'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'
import { messages }      from '@globals/messages'

const Hero = forwardRef((props, ref: any) => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const [visible, setVisible] = useState(false)

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
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Box width='100%' height='100%' backgroundColor='background.lightBeige' zIndex={1} ref={ref}>
        <Box
          position='relative'
          width='100%'
          height={['100%', '100%', 1000]}
          borderRadius={['bottomMedium', 'bottomMedium', 'bottomHuge']}
          backgroundImage={['none', 'none', `url(${image.url})`]}
          backgroundSize='cover'
          overflow='hidden'
          zIndex={3}
        >
          <Layout flexBasis={[20, 20, 240]} />
          <Row height='100%' justifyContent='center'>
            <Box zIndex={-1} display={['flex', 'flex', 'none']}>
              <Image background src={image.url} alt={image.alt} />
            </Box>
            <Layout flexBasis={[16, 16, 150]} />
            <Column>
              <Layout flexBasis={[160, 160, 240]} />
              <Layout maxWidth={1300}>
                <Layout>
                  <Column>
                    <Condition match={language === 'RU'}>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split(' ')[0]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split(' ')[1]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                        whiteSpace={['break-all', 'break-all', 'nowrap']}
                      >
                        {title.replace(highlighted, '').split(' ')[2]}
                        <Space />
                        {title.replace(highlighted, '').split(' ')[3]}
                        <Space />
                        <Text
                          fontFamily='secondary'
                          color='text.accent'
                          fontWeight='thin'
                          fontSize={['big', 'big', 'giant']}
                          textTransform='uppercase'
                        >
                          {highlighted}
                        </Text>
                      </Text>
                    </Condition>
                    <Condition match={language === 'EN'}>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split(' ')[0]}
                        <Space />
                        {title.replace(highlighted, '').split(' ')[1]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                        whiteSpace={['break-all', 'break-all', 'nowrap']}
                      >
                        {title.replace(highlighted, '').split(' ')[2]}
                        <Space />
                        {title.replace(highlighted, '').split(' ')[3]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                        whiteSpace={['break-all', 'break-all', 'nowrap']}
                      >
                        {title.replace(highlighted, '').split(' ')[4]}
                        <Space />
                        {title.replace(highlighted, '').split(' ')[5]}
                        <Space />
                        <Text
                          fontFamily='secondary'
                          color='text.accent'
                          fontWeight='thin'
                          fontSize={['big', 'big', 'giant']}
                          textTransform='uppercase'
                        >
                          {highlighted}
                        </Text>
                      </Text>
                    </Condition>
                  </Column>
                </Layout>
              </Layout>
              <Layout flexBasis={[289, 289, 438]} />
              <Layout display={['none', 'none', 'flex']}>
                <Button
                  colors='secondary'
                  size='medium'
                  height={34}
                  onClick={() => setVisible(true)}
                >
                  {messages.getConsult[language]}
                </Button>
              </Layout>
              <Layout display={['flex', 'flex', 'none']}>
                <Button
                  colors='secondary'
                  size='medium'
                  height={34}
                  onClick={() => setVisible(true)}
                >
                  {messages.getConsult[language]}
                </Button>
              </Layout>
              <Layout flexBasis={[40, 40, 160]} />
            </Column>
            <Layout flexBasis={[16, 16, 900]} />
          </Row>
          <Layout flexBasis={[20, 20, 240]} />
        </Box>
      </Box>
    </>
  )
})

export { Hero }
