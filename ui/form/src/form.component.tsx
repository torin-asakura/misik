import React           from 'react'
import ReCaptcha       from 'react-google-recaptcha'
import { FC }          from 'react'
import { useState }    from 'react'
import { useCallback } from 'react'
import { useRef }      from 'react'

import { Button }      from '@ui/button'
import { Condition }   from '@ui/condition'
import { Drawer }      from '@ui/drawer'
import { Input }       from '@ui/input'
import { Layer }       from '@ui/layer'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Space }       from '@ui/text'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

import { useForms }    from './data'
import { useSubmit }   from './data'

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

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

  const recaptchaRef = useRef()

  if (success !== null) {
    setTimeout(() => {
      setSuccess(null)
    }, 2000)
  }

  const submitForm = () => {
    if (name && phone && email) {
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
        if (data.submitForm) setSuccess(data.submitForm.success)
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

  const executeCaptcha = useCallback(
    (event) => {
      event.preventDefault()
      // @ts-ignore
      recaptchaRef?.current?.execute()
    },
    [recaptchaRef]
  )

  return (
    <>
      <Condition match={sitekey}>
        <ReCaptcha
          ref={recaptchaRef as any}
          sitekey={sitekey}          
          onChange={submitForm}
        />
      </Condition>
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
              onClick={executeCaptcha}
            >
              <Condition match={success}>{messages.sent[language]}</Condition>
              <Condition match={success === false}>{messages.notSent[language]}</Condition>
              <Condition match={success === null}>{messages.send[language]}</Condition>
            </Button>
          </Layout>
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
    </>
  )
}

export { Form }
