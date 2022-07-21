import React                       from 'react'
import { FC }                      from 'react'

import { Divider }                 from '@ui/divider'
import { Row }                     from '@ui/layout'
import { Box }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { AnimateOnLoad }           from '@ui/preloader'
import { Text }                    from '@ui/text'
import { useData }                 from '@globals/data'
import { extractObject }           from '@globals/data'
import { useLanguage }             from '@globals/language'

import { useGroundsRefugeeStatus } from './data'

const RelocationGroundsStatus: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const groundsRefugeeStatus = useGroundsRefugeeStatus()

  let mainText = ''

  if (fragments && fragments.relocationgroundsstatus) {
    const titleObj = extractObject('title', fragments.relocationgroundsstatus[language])
    mainText = titleObj?.title
  }

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.lightBeige'>
      <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
      <AnimateOnLoad
        initial={{ opacity: 0, y: '100%' }}
        transition={{ duration: 1 }}
        animation={{ y: 0, opacity: 1 }}
      >
        <Layout maxWidth={1243}>
          <Column fill height='auto'>
            <Layout flexBasis={[64, 64, 160]} flexShrink={0} />

            <Row>
              <Text
                color='text.primary'
                fontWeight='thin'
                fontSize={['semiBig', 'semiBig', 'semiGiant']}
                lineHeight='small'
                fontFamily='secondary'
                textTransform='uppercase'
              >
                {mainText}
              </Text>
            </Row>
            <Layout flexBasis={[32, 32, 64]} flexShrink={0} />
            <Layout>
              <Divider />
            </Layout>
            <Layout flexBasis={[32, 32, 64]} flexShrink={0} />
            <Row flexWrap='wrap'>
              {groundsRefugeeStatus[language].map(({ id, title, content }, index) => (
                <Column height='auto'>
                  <Column key={id} width={['100%', '100%', 600]} height={[262, 262, 319]}>
                    <Row>
                      <Text
                        fontSize={['big', 'big', 'semiGiant']}
                        lineHeight='small'
                        fontFamily='secondary'
                        color='text.accent'
                        fontStyle='italic'
                        style={{ fontVariantNumeric: 'lining-nums' }}
                      >
                        {`0${index + 1}`}
                      </Text>
                    </Row>
                    <Layout flexBasis={24} />
                    <Row width={['100%', '100%', 540]}>
                      <Text
                        color='text.primary'
                        fontSize={['semiLarge', 'semiLarge', 'enlarged']}
                        lineHeight='small'
                        fontFamily='secondary'
                        textTransform='uppercase'
                        fontWeight={['medium', 'medium', 'normal']}
                      >
                        {title}
                      </Text>
                    </Row>
                    <Layout flexBasis={16} />
                    <Row width={['100%', '100%', 540]}>
                      <Text
                        color='text.secondary'
                        fontSize={['tiny', 'tiny', 'regular']}
                        lineHeight={['big', 'big', 'small']}
                      >
                        {content}
                      </Text>
                    </Row>
                  </Column>
                  <Layout flexBasis={[40, 40, 0]} flexShrink={0} />
                </Column>
              ))}
            </Row>
            <Layout flexBasis={[24, 24, 160]} flexShrink={0} />
          </Column>
        </Layout>
      </AnimateOnLoad>
      <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
    </Box>
  )
}

export { RelocationGroundsStatus }
