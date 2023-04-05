import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptcha }         from 'react-google-recaptcha-v3'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { useState }                from 'react'

import { Button }                  from '@ui/button'
import { Condition }               from '@ui/condition'
import { Drawer }                  from '@ui/drawer'
import { Input }                   from '@ui/input'
import { Layer }                   from '@ui/layer'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { NextLink }                from '@ui/link'
import { Space }                   from '@ui/text'
import { Text }                    from '@ui/text'
import { useLanguage }             from '@globals/language'
import { messages }                from '@globals/messages'

import { useForms }                from './data'
import { useSubmit }               from './data'

const sitekey = '6LdShlslAAAAABOs_yonZGSN8Kc8LYjEf-op7cbt'

const Form: FC = () => {
  const [language] = useLanguage()
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const forms = useForms()
  const [submit] = useSubmit()
  const [success, setSuccess] = useState<boolean | null>(null)
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
  const [verify, setVerify] = useState(false)

  if (success !== null) {
    setTimeout(() => {
      setSuccess(null)
    }, 2000)
  }

  const sendForm = () => {
    if (verify && name && phone && email) {
      setNameError(false)
      setPhoneError(false)
      setEmailError(false)
      submit({
        variables: {
          name,
          phone,
          email,
          comment,
        },
      }).then(({ data }) => {
        if (data.submitForm) {
          setVerify(false)
          setName('')
          setPhone('')
          setEmail('')
          setComment('')
          setSuccess(data.submitForm.success)
        }
      })
    } else {
      if (!name) setNameError(true)
      else setNameError(false)
      if (!phone) setPhoneError(true)
      else setPhoneError(false)
      if (!email) setEmailError(true)
      else setEmailError(false)
      setSuccess(false)
    }
  }

  const onVerify = () => {
    setVerify(true)
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={sitekey}
      container={{
        element: 'containerCaptcha',
        parameters: {},
      }}
    >
      <Drawer
        active={privacyPolicy}
        onClose={() => setPrivacyPolicy(false)}
        display='privacy-policy'
      />
      <Layer
        visible={privacyPolicy}
        onClose={() => setPrivacyPolicy(false)}
        display='privacy-policy'
      />
      <Box width='100%' maxWidth={['100%', '100%', 859]} height='100%'>
        <Column width='100%'>
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={name}
              onChange={setName}
              error={nameError}
              placeholder={`${forms[language] && forms[language][0]?.label}${
                forms[language] && forms[language][0]?.required ? '*' : ''
              }`}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={phone}
              onChange={setPhone}
              error={phoneError}
              placeholder={`${forms[language] && forms[language][1]?.label}${
                forms[language] && forms[language][1]?.required ? '*' : ''
              }`}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={email}
              onChange={setEmail}
              error={emailError}
              placeholder={`${forms[language] && forms[language][2]?.label}${
                forms[language] && forms[language][2]?.required ? '*' : ''
              }`}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout maxHeight={[58, 58, 62]}>
            <Input
              value={comment}
              onChange={setComment}
              placeholder={`${forms[language] && forms[language][3]?.label}${
                forms[language] && forms[language][3]?.required ? '*' : ''
              }`}
            />
          </Layout>
          <Layout flexBasis={[28, 28, 40]} />
          <Layout>
            <Button
              width='100%'
              height={[48, 48, 52]}
              px={0}
              success={success}
              failure={success === false}
              onClick={sendForm}
            >
              <Condition match={success}>{messages.sent[language]}</Condition>
              <Condition match={success === false}>{messages.notSent[language]}</Condition>
              <Condition match={success === null}>{messages.send[language]}</Condition>
            </Button>
          </Layout>
          <Condition match={sitekey}>
            <Layout flexBasis={16} />
            <Layout justifyContent='center'>
              <Row id='containerCaptcha' />
              <GoogleReCaptcha onVerify={onVerify} />
            </Layout>
          </Condition>
          <Layout flexBasis={[24, 24, 32]} />
          <Row justifyContent='center'>
            <Layout width={[335, 335, '100%']}>
              <NextLink
                fontSize='atomic'
                textAlign='center'
                width='100%'
                whiteSpace='normal'
                color='text.secondary'
                display='flex'
                onClick={() => setPrivacyPolicy(true)}
              >
                <Text color='text.secondary' display='inline' whiteSpace='normal' fontSize='atomic'>
                  {messages.byClickingYouConfirm[language]}
                  <Space />
                  <Text
                    style={{ textDecoration: 'underline' }}
                    display='inline'
                    whiteSpace='normal'
                    color='text.secondary'
                  >
                    {messages.privacyPolicy[language]}
                  </Text>
                </Text>
              </NextLink>
            </Layout>
          </Row>
        </Column>
      </Box>
    </GoogleReCaptchaProvider>
  )
}

export { Form }
