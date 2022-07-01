import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Button }      from '@ui/button'
import { Condition }   from '@ui/condition'
import { Input }       from '@ui/input'
import { Layer }       from '@ui/layer'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

import { useForms }    from './data'
import { useSubmit }   from './data'

const Form: FC = () => {
  const [language] = useLanguage()
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const forms = useForms()
  const [submit, data] = useSubmit()
  const [success, setSuccess] = useState<boolean | null>(null)
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)

  if (data && data.submitForm && success === null) setSuccess(data?.submitForm?.success)

  if (success !== null)
    setTimeout(() => {
      setSuccess(null)
    }, 2000)

  const submitForm = () => {
    if (name && phone && email) {
      setNameError('')
      setPhoneError('')
      setEmailError('')
      submit({
        variables: {
          name,
          phone,
          email,
          comment,
        },
      })
    } else {
      if (!name) setNameError(messages.requiredField[language])
      else setNameError('')
      if (!phone) setPhoneError(messages.requiredField[language])
      else setPhoneError('')
      if (!email) setEmailError(messages.requiredField[language])
      else setEmailError('')
      setSuccess(false)
    }
  }

  return (
    <>
      <Layer privacyPolicy visible={privacyPolicy} onClose={() => setPrivacyPolicy(false)} />
      <Box width={['100%', '100%', 810]} height={['100%', '100%', 598]}>
        <Column width='100%'>
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={name}
              onChange={setName}
              placeholder={forms[language] && forms[language][0]?.label}
              errorText={nameError}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={phone}
              onChange={setPhone}
              placeholder={forms[language] && forms[language][1]?.label}
              errorText={phoneError}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={email}
              onChange={setEmail}
              placeholder={forms[language] && forms[language][2]?.label}
              errorText={emailError}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={comment}
              onChange={setComment}
              placeholder={forms[language] && forms[language][3]?.label}
            />
          </Layout>
          <Layout flexBasis={40} />
          <Layout>
            <Button
              width='100%'
              height={[48, 48, 52]}
              px={0}
              success={success}
              failure={success === false}
              onClick={submitForm}
            >
              <Condition match={success}>{messages.sent[language]}</Condition>
              <Condition match={success === false}>{messages.notSent[language]}</Condition>
              <Condition match={success === null}>{messages.send[language]}</Condition>
            </Button>
          </Layout>
          <Layout flexBasis={32} />
          <Row justifyContent='center' display={['none', 'none', 'flex']}>
            <Layout>
              <Text color='text.secondary' display='inline' fontSize='atomic' textAlign='center'>
                {messages.byClickingYouConfirm[language]}
                <NextLink
                  underline
                  color='text.secondary'
                  display='block'
                  fontSize='atomic'
                  onClick={() => setPrivacyPolicy(true)}
                >
                  {messages.privacyPolicy[language]}
                </NextLink>
              </Text>
            </Layout>
          </Row>
        </Column>
      </Box>
    </>
  )
}

export { Form }
