import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

const Feedback: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let title: string = ''
  let content: string = ''
  let email: string = ''
  let phone: string = ''
  let workingHours: string = ''

  if (fragments) {
    const titleFragment = extractObject('title', fragments.feedback[language])
    const emailFragment = extractObject('email', fragments.feedback[language])
    const phoneFragment = extractObject('phone', fragments.feedback[language])
    const workingHoursFragment = extractObject('workingHours', fragments.feedback[language])

    title = titleFragment?.title
    content = titleFragment?.content
    email = emailFragment?.content
    phone = phoneFragment?.content
    workingHours = workingHoursFragment?.content
  }

  return (
    <Box width='100%' height='100%' border='1px solid red'>
      <Layout width='100%' maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={160} />
          <Layout flexBasis={120} />
          <Layout flexDirection={['column', 'column', 'row']} width='100%' height='100%'>
            <Column width='100%'>
              <Box height={16} width='100%' maxWidth={580} border='1px solid black'>
                {title}
              </Box>
              <Layout flexBasis={32} />
              <Box height={280} width='100%' maxWidth={580} border='1px solid black'>
                {content}
                {email}
                {phone}
                {workingHours}
              </Box>
            </Column>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Box border='1px solid black' width={['100%', '100%', 515]} height={598}>
              Form
            </Box>
          </Layout>
          <Layout flexBasis={160} />
        </Column>
      </Layout>
    </Box>
  )
}
export { Feedback }
