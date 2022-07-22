import React             from 'react'
import { FC }            from 'react'
import { forwardRef }    from 'react'

import { Condition }     from '@ui/condition'
import { Copy }          from '@ui/copy'
import { Form }          from '@ui/form'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Link }          from '@ui/link'
import { AnimateOnLoad } from '@ui/preloader'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { FeedbackProps } from './feedback.interface'
import { useContacts }   from './data'
import { extractType }   from './helpers'

const Feedback: FC<FeedbackProps> = forwardRef((
  props,
  ref: any,
  background = 'background.lightBeige',
  contacts = false
) => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const contactsData = useContacts()

  const title = {
    text: '',
    highlighted: '',
  }
  let content: string = ''
  let email: string = ''
  let branchInRussia: string = ''

  if (fragments) {
    const titleFragment = extractObject('title', fragments.feedback[language])
    const emailFragment = extractObject('email', fragments.feedback.RU)
    const branchInRussiaFragment = extractType(
      'phone',
      contactsData?.contactAddons?.address[language]
    )

    title.text = titleFragment?.title
    title.highlighted = titleFragment?.fragmentParams.highlightedText
    content = titleFragment?.content
    email = emailFragment?.content
    branchInRussia = branchInRussiaFragment
  }

  return (
    <Box
      id='feedback'
      width='100%'
      height={[877, 877, '100%']}
      backgroundColor={background}
      ref={ref}
      itemScope
      itemType='http://schema.org/Organization'
    >
      <Box
        width='100%'
        height='100%'
        backgroundColor='background.beige'
        borderRadius={['topMedium', 'topMedium', 'topHuge']}
        justifyContent='center'
      >
        <Layout flexBasis={[20, 20, 0]} />
        <Layout width='100%' height='100%' maxWidth={1830}>
          <Column width='100%'>
            <Layout flexBasis={[0, 0, 160]} />
            <Layout flexDirection={['column', 'column', 'row']} width='100%'>
              <Column width='100%'>
                <Layout flexBasis={[48, 48, 0]} />
                <Layout maxWidth={620}>
                  <AnimateOnLoad
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 1 }}
                    animation={{ y: 0, opacity: 1 }}
                  >
                    <Column fill>
                      <Text
                        display='inline'
                        fontFamily='secondary'
                        fontSize={['semiBig', 'semiBig', 'semiGiant']}
                        fontWeight='thin'
                        textTransform='uppercase'
                      >
                        {title.text?.replace(title.highlighted, '').split(' ')[0]}
                      </Text>
                      <Text
                        fontFamily='secondary'
                        fontSize={['semiBig', 'semiBig', 'semiGiant']}
                        fontWeight='thin'
                        color='text.accent'
                        textTransform='uppercase'
                        fontStyle='italic'
                      >
                        <Text
                          color='text.primary'
                          fontFamily='secondary'
                          fontSize={['semiBig', 'semiBig', 'semiGiant']}
                          fontWeight='thin'
                          textTransform='uppercase'
                        >
                          {title.text?.replace(title.highlighted, '').split(' ')[1]}
                        </Text>
                        <Condition match={language === 'RU'}>
                          <Space />
                        </Condition>
                        {title.highlighted}
                      </Text>
                    </Column>
                  </AnimateOnLoad>
                </Layout>
                <Layout flexBasis={[16, 16, 32]} />
                <AnimateOnLoad
                  initial={{ opacity: 0, y: '100%' }}
                  transition={{ duration: 1 }}
                  animation={{ y: 0, opacity: 1 }}
                  delay={300}
                >
                  <Layout>
                    <Text fontSize='regular' color='text.secondary'>
                      {content}
                    </Text>
                  </Layout>
                </AnimateOnLoad>
                <Layout flexBasis={[32, 32, 180]} flexShrink={0} />
                <AnimateOnLoad
                  initial={{ opacity: 0, y: '100%' }}
                  transition={{ duration: 1 }}
                  animation={{ y: 0, opacity: 1 }}
                  delay={300}
                >
                  <Row>
                    <Layout>
                      <Link
                        fontFamily='secondary'
                        fontSize={['large', 'large', 'enlarged']}
                        textTransform='uppercase'
                        href={`mailto:${email}`}
                        itemProp='email'
                      >
                        {email}
                      </Link>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout display={['none', 'none', 'flex']}>
                      <Copy content={email} />
                    </Layout>
                  </Row>
                </AnimateOnLoad>
                <Layout flexBasis={44} />
                <Row>
                  <Layout>
                    <Text>TEXT</Text>
                  </Layout>
                </Row>
                <Layout flexBasis={160} />
                <Column>
                  <Row>
                    <Text>{branchInRussia}</Text>
                  </Row>
                </Column>
              </Column>
              <Layout flexGrow={1} />
              <Form />
            </Layout>
            <Layout flexBasis={160} />
          </Column>
        </Layout>
        <Layout flexBasis={[16, 16, 0]} />
      </Box>
    </Box>
  )
})

export { Feedback }
