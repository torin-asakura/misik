import React             from 'react'
import { FC }            from 'react'
import { forwardRef }    from 'react'
import { useMemo }       from 'react'

import { Condition }     from '@ui/condition'
import { Copy }          from '@ui/copy'
import { Form }          from '@ui/form'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Link }          from '@ui/link'
import { AnimateOnLoad } from '@ui/preloader'
import { Socials }       from '@ui/socials'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'
import { messages }      from '@globals/messages'

import { Branch }        from './branch'
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

  let { text, highlighted, content, email, branches, workingHours, workingHoursHighlighted } =
    useMemo(() => {
      if (!fragments) {
        return {
          text: '',
          highlighted: '',
          content: '',
          email: '',
          branches: [],
          workingHours: '',
          workingHoursHighlighted: '',
        }
      }

      const titleFragment = extractObject('title', fragments.feedback[language])
      const emailFragment = extractObject('email', fragments.feedback.RU)
      const branchesFragment = extractType('phone', contactsData[language])
      const workingHoursFragment = extractObject('workingHours', fragments.feedback[language])
      const workingHoursHighlightedFragment = extractObject(
        'workingHours',
        fragments.feedback[language]
      )

      text = titleFragment?.title
      highlighted = titleFragment?.fragmentParams.highlightedText
      content = titleFragment?.content
      email = emailFragment?.content
      branches = branchesFragment
      workingHours = workingHoursFragment?.content
      workingHoursHighlighted = workingHoursHighlightedFragment?.fragmentParams?.highlightedText

      return {
        text,
        highlighted,
        content,
        email,
        branches,
        workingHours,
        workingHoursHighlighted,
      }
    }, [fragments, language, contactsData])

  return (
    <Box
      id='feedback'
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
        <Layout flexBasis={[20, 20, 616]} flexShrink={[0, 0, 1]} maxWidth={['auto', 'auto', 430]} />
        <Layout width='100%' height='100%' maxWidth={1243}>
          <Column width='100%'>
            <Layout flexBasis={[48, 48, 160]} />
            <Layout flexDirection={['column', 'column', 'row']} width='100%'>
              <Column width='100%' maxWidth={895}>
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
                    <Layout display={['flex', 'flex', 'none']}>
                      <Copy content={email} />
                    </Layout>
                  </Row>
                </AnimateOnLoad>
                <Layout flexBasis={44} />
                <Row alignItems='center'>
                  <Layout flexDirection={['column', 'column', 'row']}>
                    <Text fontSize={['semiRegular', 'semiRegular', 'small']} color='text.secondary'>
                      {messages.weAreInSocialNetworks[language]}
                    </Text>
                  </Layout>
                  <Layout flexBasis={24} />
                  <Socials />
                </Row>
              </Column>
              <Layout flexShrink={0} flexBasis={40} />
              <Form />
            </Layout>
            <Condition match={contacts}>
              <Layout flexBasis={[48, 48, 160]} />
              <Layout flexDirection={['column', 'column', 'row']} width='100%'>
                {branches.reverse().map((
                  { title: branchTitle, content: branchContent, contactAddons, fragmentParams },
                  index
                ) => (
                  <>
                    <Condition match={index !== 0}>
                      <Layout flexBasis={40} flexShrink={0} />
                    </Condition>
                    <Branch
                      title={branchTitle}
                      highlighted={fragmentParams?.highlightedText}
                      address={contactAddons?.address}
                      messengers={contactAddons?.messengers}
                      phone={branchContent}
                      workingHours={workingHours}
                      workingHoursHighlighted={workingHoursHighlighted}
                      index={index}
                    />
                  </>
                ))}
              </Layout>
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
