import React               from 'react'
import { useState }        from 'react'
import { forwardRef }      from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { Drawer }          from '@ui/drawer'
import { Image }           from '@ui/image'
import { Layer }           from '@ui/layer'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { AnimateOnLoad }   from '@ui/preloader'
import { Text }            from '@ui/text'
import { Space }           from '@ui/text'
import { extractFragment } from '@globals/data'
import { useLanguage }     from '@globals/language'
import { messages }        from '@globals/messages'

const Hero = forwardRef(({ data }: any, ref: any) => {
  const [language] = useLanguage()
  const [visible, setVisible] = useState(false)

  let title = ''
  let highlighted = ''
  let imageAlt = ''
  let imageUrl = ''

  if (data) {
    const obj = extractFragment('contentAddons', 'lead', data.hero[language])

    title = obj?.content
    highlighted = obj?.highlightedtext
    imageUrl = obj?.image?.sourceUrl
    imageAlt = obj?.image?.altText
  }

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Box
        width='100%'
        height={['100%', '100%', '100vh']}
        backgroundColor='background.lightBeige'
        zIndex={1}
        ref={ref}
      >
        <Box
          position='relative'
          width='100%'
          height='100%'
          borderRadius={['bottomMedium', 'bottomMedium', 'bottomHuge']}
          backgroundImage={['none', 'none', `url(${imageUrl})`]}
          backgroundSize='cover'
          overflow='hidden'
          zIndex={3}
        >
          <Row height='100%' justifyContent={['flex-start', 'flex-start', 'center']}>
            <Box zIndex={-1} display={['flex', 'flex', 'none']}>
              <Image background src={imageUrl} alt={imageAlt} />
            </Box>
            <Layout flexBasis={[20, 80, 397]} flexShrink={[0, 0, 1]} />
            <Column maxWidth={864} width='100%'>
              <Layout flexBasis={[88, 88, 160]} flexShrink={0} />
              <Layout maxWidth={864} width='100%'>
                <AnimateOnLoad
                  initial={{ opacity: 0, y: '30%' }}
                  transition={{ duration: 1 }}
                  animation={{ y: 0, opacity: 1 }}
                >
                  <Column paddingRight={[0, 0, '10px']}>
                    <Condition match={language === 'RU'}>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split('|n|')[0]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split('|n|')[1]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                        whiteSpace={['break-all', 'break-all', 'nowrap']}
                      >
                        {title.replace(highlighted, '').split('|n|')[2]}
                        <Space />
                        <Text
                          fontFamily='secondary'
                          color='text.accent'
                          fontWeight='thin'
                          fontSize={['big', 'big', 'giant']}
                          textTransform='uppercase'
                          fontStyle='italic'
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
                        {title.replace(highlighted, '').split('|n|')[0]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                      >
                        {title.replace(highlighted, '').split('|n|')[1]}
                      </Text>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontWeight='thin'
                        fontSize={['big', 'big', 'giant']}
                        textTransform='uppercase'
                        whiteSpace={['break-all', 'break-all', 'nowrap']}
                      >
                        {title.replace(highlighted, '').split('|n|')[2]}
                        <Space />
                        <Text
                          fontFamily='secondary'
                          color='text.accent'
                          fontWeight='thin'
                          fontSize={['big', 'big', 'giant']}
                          textTransform='uppercase'
                          fontStyle='italic'
                        >
                          {highlighted}
                        </Text>
                      </Text>
                    </Condition>
                  </Column>
                </AnimateOnLoad>
              </Layout>
              <Layout flexBasis={[289, 289, 438]} flexGrow={1} />
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
              <Layout flexBasis={[40, 40, 80]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[16, 16, 659]} />
          </Row>
          <Layout flexBasis={[20, 20, 0]} />
        </Box>
      </Box>
    </>
  )
})

export { Hero }
