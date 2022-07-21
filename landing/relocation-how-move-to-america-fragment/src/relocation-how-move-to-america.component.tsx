import React            from 'react'
import { FC }           from 'react'
import { useState }     from 'react'

import { Button }       from '@ui/button'
import { Divider }      from '@ui/divider'
import { Drawer }       from '@ui/drawer'
import { Image }        from '@ui/image'
import { Layer }        from '@ui/layer'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'
import { messages }     from '@globals/messages'

import { MisikLawIcon } from './icons'
import { Price }        from './price'

const RelocationHowMoveToAmerica: FC = () => {
  const [visibleConsult, setVisibleConsult] = useState<boolean>(false)
  const [visibleDescription, setVisibleDescription] = useState<boolean>(false)

  const language = 'RU'
  const image = {
    imageUrl: 'https://wp.misik.pro/wp-content/uploads/2022/07/how-to-move-to-america.png',
    altText: 'Как переехать в Америку',
  }

  const title = 'Как переехать в'
  const highlightedText = 'Америку?'
  const content =
    'Если вам нужно срочно переехать, то мы предлагаем надежные решения по быстрой и легальной иммиграции в США на основании получение статуса беженца или иных специальных обстоятельств (например, воссоединение с семьей).'

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
            <Layout flexDirection={['column', 'column', 'row']}>
              <Box position='relative' width={[335, 335, 480]} height={[335, 335, 480]}>
                <Image alt={image.altText} src={image.imageUrl} contain />
                <Box position='absolute' top='30%' left={-16}>
                  <Layout display={['none', 'none', 'flex']}>
                    <MisikLawIcon size={141} />
                  </Layout>
                  <Layout display={['flex', 'flex', 'none']}>
                    <MisikLawIcon size={90} />
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
                  <Price />
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
