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

const Feedback: FC<FeedbackProps> = forwardRef((
  props,
  ref: any,
  background = 'background.lightBeige',
  contacts = false
) => {
  const { fragments } = useData()
  const [language] = useLanguage()

  const title = {
    text: '',
    highlighted: '',
  }
  let content: string = ''
  let email: string = ''
  let phones: string = ''
  let workingHours: string = ''

  if (fragments) {
    const titleFragment = extractObject('title', fragments.feedback[language])
    const emailFragment = extractObject('email', fragments.feedback.RU)
    const phoneFragment = extractObject('phone', fragments.feedback.RU)
    const workingHoursFragment = extractObject('workingHours', fragments.feedback[language])

    title.text = titleFragment?.title
    title.highlighted = titleFragment?.fragmentParams.highlightedText
    content = titleFragment?.content
    email = emailFragment?.content
    phones = phoneFragment?.content
    workingHours = workingHoursFragment?.content
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
                <Layout flexBasis={[32, 32, 155]} />
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
                <Layout flexBasis={32} />
                {phones
                  .split('\n')
                  .filter((string) => string.trim() !== '')
                  .map((phone) => (
                    <>
                      <AnimateOnLoad
                        initial={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 1 }}
                        animation={{ y: 0, opacity: 1 }}
                        delay={600}
                      >
                        <Row>
                          <Layout>
                            <Link
                              href={`tel:${phone}`}
                              fontSize={['large', 'large', 'enlarged']}
                              fontWeight='thin'
                              itemProp='telephone'
                              fontFamily='secondary'
                              style={{ fontVariantNumeric: 'lining-nums' }}
                            >
                              {phone}
                            </Link>
                          </Layout>
                          <Layout flexBasis={16} />
                          <Layout display={['none', 'none', 'flex']}>
                            <Copy content={phone} />
                          </Layout>
                        </Row>
                      </AnimateOnLoad>
                      <Layout flexBasis={12} />
                    </>
                  ))}
                <Layout flexBasis={12} />
                <AnimateOnLoad
                  initial={{ opacity: 0, y: '100%' }}
                  transition={{ duration: 1 }}
                  animation={{ y: 0, opacity: 1 }}
                  delay={700}
                >
                  <Row>
                    <Layout>
                      <Text fontSize='small' color='text.secondary'>
                        {workingHours}
                      </Text>
                    </Layout>
                  </Row>
                </AnimateOnLoad>
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
