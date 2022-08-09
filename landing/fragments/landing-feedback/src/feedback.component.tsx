import React               from 'react'
import { FC }              from 'react'
import { forwardRef }      from 'react'

import { Branches }        from '@landing/branches-fragment'
import { Condition }       from '@ui/condition'
import { Copy }            from '@ui/copy'
import { Form }            from '@ui/form'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Link }            from '@ui/link'
import { AnimateOnLoad }   from '@ui/preloader'
import { Socials }         from '@ui/socials'
import { Text }            from '@ui/text'
import { Space }           from '@ui/text'
import { extractFragment } from '@globals/data'
import { useLanguage }     from '@globals/language'
import { messages }        from '@globals/messages'

import { FeedbackProps }   from './feedback.interface'

const Feedback: FC<FeedbackProps> = forwardRef((
  { background = 'background.lightBeige', data, contacts = false },
  ref: any
) => {
  const [language] = useLanguage()

  let text = ''
  let highlighted = ''
  let content = ''
  let email = ''

  if (data) {
    const titleFragment = extractFragment('contentAddons', 'lead', data[language])
    const emailFragment = extractFragment('contentAddons', 'email', data[language])

    text = titleFragment?.title
    highlighted = titleFragment?.highlightedtext
    content = titleFragment?.content
    email = emailFragment?.title
  }

  return (
    <Box
      width='100%'
      height={['auto', 'auto', '100%']}
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
        <Layout flexBasis={[20, 20, 397]} flexShrink={[0, 0, 1]} />
        <Layout width='100%' height='100%' maxWidth={1243}>
          <Column width='100%'>
            <Layout flexBasis={[48, 48, 160]} />
            <Layout flexDirection={['column', 'column', 'row']} width='100%'>
              <Column width='100%' maxWidth={895}>
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
                        {text?.replace(highlighted, '').split(' ')[0]}
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
                          {text?.replace(highlighted, '').split(' ')[1]}
                        </Text>
                        <Condition match={language === 'RU'}>
                          <Space />
                        </Condition>
                        {highlighted}
                      </Text>
                    </Column>
                  </AnimateOnLoad>
                </Layout>
                <Layout flexBasis={16} />
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
                    <Layout>
                      <Copy content={email} />
                    </Layout>
                  </Row>
                </AnimateOnLoad>
                <Layout flexBasis={[24, 24, 32]} />
                <Layout
                  flexDirection={['column', 'column', 'row']}
                  alignItems={['flex-start', 'flex-start', 'center']}
                >
                  <Layout minWidth={['100%', '100%', 160]}>
                    <Text fontSize={['semiRegular', 'semiRegular', 'small']} color='text.secondary'>
                      {messages.weAreInSocialNetworks[language]}
                    </Text>
                  </Layout>
                  <Layout flexBasis={[16, 16, 24]} />
                  <Row>
                    <Socials />
                  </Row>
                </Layout>
              </Column>
              <Layout flexShrink={0} flexBasis={[48, 48, 40]} />
              <Form />
            </Layout>
            <Condition match={contacts}>
              <Layout flexBasis={[48, 48, 160]} />
              <Branches contacts={false} />
            </Condition>
            <Layout flexBasis={[48, 48, 160]} />
          </Column>
        </Layout>
        <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
      </Box>
    </Box>
  )
})

export { Feedback }
