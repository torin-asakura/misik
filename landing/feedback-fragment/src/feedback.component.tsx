import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'
import { Form }          from '@ui/form'

import { FeedbackProps } from './feedback.interface'

const Feedback: FC<FeedbackProps> = ({ background = 'background.lightBeige' }) => {
  const { fragments } = useData()
  const [language] = useLanguage()

  const title = {
    text: '',
    highlighted: '',
  }
  let content: string = ''
  let email: string = ''
  let phone: string = ''
  let workingHours: string = ''

  if (fragments) {
    const titleFragment = extractObject('title', fragments.feedback[language])
    const emailFragment = extractObject('email', fragments.feedback[language])
    const phoneFragment = extractObject('phone', fragments.feedback[language])
    const workingHoursFragment = extractObject('workingHours', fragments.feedback[language])

    title.text = titleFragment?.title
    title.highlighted = titleFragment?.fragmentParams.highlightedText
    content = titleFragment?.content
    email = emailFragment?.content
    phone = phoneFragment?.content
    workingHours = workingHoursFragment?.content
  }

  return (
    <Box id='feedback' width='100%' height={[877, 877, '100%']} backgroundColor={background}>
      <Box
        width='100%'
        height='100%'
        backgroundColor='background.beige'
        borderRadius={['topMedium', 'topMedium', 'topHuge']}
        justifyContent='flex-end'
      >
        <Layout flexBasis={[20, 20, 0]} />
        <Layout width='100%' height='100%' maxWidth={1280}>
          <Column width='100%'>
            <Layout flexBasis={[0, 0, 160]} />
            <Layout flexDirection={['column', 'column', 'row']} width='100%'>
              <Column width='100%'>
                <Layout flexBasis={[48, 48, 0]} />
                <Layout>
                  <Text
                    fontFamily='secondary'
                    fontSize={['semiBig', 'semiBig', 'semiGiant']}
                    fontWeight='thin'
                  >
                    {title.text?.replace(title.highlighted, '')}
                    <Space />
                    <Text
                      fontFamily='secondary'
                      fontSize={['semiBig', 'semiBig', 'semiGiant']}
                      fontWeight='thin'
                      color='text.accent'
                    >
                      {title.highlighted}
                    </Text>
                  </Text>
                </Layout>
                <Layout flexBasis={[16, 16, 32]} />
                {/* TODO restore */}
                <Layout display='none'>
                  <Text fontSize='regular' color='text.secondary'>
                    {content}
                  </Text>
                </Layout>
                <Layout flexBasis={[32, 32, 155]} />
                <Row>
                  <Layout>
                    <Text
                      fontFamily='secondary'
                      fontSize={['large', 'large', 'enlarged']}
                      textTransform='uppercase'
                    >
                      {email}
                    </Text>
                  </Layout>
                  <Layout flexBasis={16} />
                  {/* TODO restore nnf */}
                  <Box
                    display='none'
                    width={40}
                    height={40}
                    border='1px solid black'
                    borderRadius='huge'
                  />
                </Row>
                <Layout flexBasis={32} />
                <Row>
                  <Layout>
                    <Text fontFamily='secondary' fontSize={['large', 'large', 'enlarged']}>
                      {phone}
                    </Text>
                  </Layout>
                  <Layout flexBasis={16} />
                  {/* TODO restore nnf */}
                  <Box
                    display='none'
                    width={40}
                    height={40}
                    border='1px solid black'
                    borderRadius='huge'
                  />
                </Row>
                <Layout flexBasis={12} />
                <Row>
                  <Layout>
                    <Text fontSize='small' color='text.secondary'>
                      {workingHours}
                    </Text>
                  </Layout>
                </Row>
              </Column>
              <Layout flexGrow={1} />
              <Form />
            </Layout>
            <Layout flexBasis={110} />
          </Column>
        </Layout>
        <Layout flexBasis={[16, 16, 320]} />
      </Box>
    </Box>
  )
}
export { Feedback }
