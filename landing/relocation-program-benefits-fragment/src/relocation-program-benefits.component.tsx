import React                  from 'react'
import { FC }                 from 'react'

import { Accordeon }          from '@ui/accordeon'
import { Divider }            from '@ui/divider'
import { Image }              from '@ui/image'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Box }                from '@ui/layout'
import { AnimateOnLoad }      from '@ui/preloader'
import { Text }               from '@ui/text'
import { useData }            from '@globals/data'
import { extractObject }      from '@globals/data'
import { useLanguage }        from '@globals/language'

import { useProgramBenefits } from './data'

const RelocationProgramBenefits: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const programBenefits = useProgramBenefits()

  let mainText = ''

  if (fragments && fragments.relocationprogrambenefits) {
    const titleObj = extractObject('title', fragments.relocationprogrambenefits[language])

    mainText = titleObj?.title
  }

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.beige'>
      <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
      <AnimateOnLoad
        initial={{ opacity: 0, y: '100%' }}
        transition={{ duration: 1 }}
        animation={{ y: 0, opacity: 1 }}
      >
        <Layout maxWidth={1284}>
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
            <Layout flexBasis={[0, 0, 64]} flexShrink={0} />
            <Layout display={['none', 'none', 'flex']}>
              <Row flexWrap='wrap'>
                {programBenefits[language].map(({ id, title, content, featuredImage }) => (
                  <Column
                    key={id}
                    width={['100%', '100%', 388]}
                    marginRight={[0, 0, 40]}
                    height='auto'
                  >
                    <Row>
                      <Box width={72} height={72} borderRadius='max' border='1 px solid black'>
                        <Image
                          alt={featuredImage?.node?.altText}
                          src={featuredImage?.node?.sourceUrl}
                        />
                      </Box>
                    </Row>
                    <Layout flexBasis={24} />
                    <Row>
                      <Text
                        color='text.primary'
                        fontSize='large'
                        lineHeight='small'
                        fontFamily='secondary'
                        textTransform='uppercase'
                        fontWeight='medium'
                      >
                        {title}
                      </Text>
                    </Row>
                    <Layout flexBasis={16} />
                    <Row>
                      <Text
                        color='text.secondary'
                        fontSize={['tiny', 'tiny', 'regular']}
                        lineHeight='big'
                      >
                        {content}
                      </Text>
                    </Row>
                    <Layout flexBasis={[40, 40, 80]} />
                  </Column>
                ))}
              </Row>
            </Layout>
            <Layout display={['flex', 'flex', 'none']}>
              <Column height='min-content'>
                {programBenefits[language].map(({ id, title, content, featuredImage }) => (
                  <Column key={id} width='100%' height='auto'>
                    <Layout flexBasis={40} />
                    <Accordeon
                      title={title}
                      content={content}
                      image={featuredImage}
                      variant='secondary'
                    />
                  </Column>
                ))}
              </Column>
            </Layout>
            <Layout flexBasis={[64, 64, 80]} flexShrink={0} />
          </Column>
        </Layout>
      </AnimateOnLoad>
      <Layout flexBasis={[20, 20, 239]} flexShrink={[0, 0, 1]} />
    </Box>
  )
}

export { RelocationProgramBenefits }
