import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Condition }   from '@ui/condition'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Input }       from '@ui/input'
import { Button }      from '@ui/button'
import { Text }        from '@ui/text'
import { NextLink }    from '@ui/link'
import { messages }    from '@globals/messages'
import { useLanguage } from '@globals/language'

import { useForms }    from './data'
import { useSubmit }   from './data'

const Form: FC = () => {
  const [language] = useLanguage()
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const forms = useForms()
  const [submit, data] = useSubmit()
  const [success, setSuccess] = useState<boolean | null>(null)

  if (data && data.submitForm && success === null) setSuccess(data?.submitForm?.success)

  if (success !== null)
    setTimeout(() => {
      setSuccess(null)
    }, 2000)

  return (
    <Box width={['100%', '100%', 700]} height={598}>
      <Column width='100%'>
        <Input
          value={name}
          onChange={setName}
          placeholder={forms[language] && forms[language][0]?.label}
        />
        <Layout flexBasis={32} />
        <Input
          value={phone}
          onChange={setPhone}
          placeholder={forms[language] && forms[language][1]?.label}
        />
        <Layout flexBasis={32} />
        <Input
          value={email}
          onChange={setEmail}
          placeholder={forms[language] && forms[language][2]?.label}
        />
        <Layout flexBasis={32} />
        <Input
          value={comment}
          onChange={setComment}
          placeholder={forms[language] && forms[language][3]?.label}
        />
        <Layout flexBasis={40} />
        <Button
          success={success}
          failure={success === false}
          onClick={() =>
            submit({
              variables: {
                name,
                phone,
                email,
                comment,
              },
            })
          }
        >
          <Condition match={success}>{messages.sent[language]}</Condition>
          <Condition match={success === false}>{messages.notSent[language]}</Condition>
          <Condition match={success === null}>{messages.send[language]}</Condition>
        </Button>
        <Layout flexBasis={32} />
        <Layout>
          <Layout>
            <Text
              color='text.secondary'
              display='inline-block'
              fontSize='atomic'
              textAlign='center'
            >
              {messages.byClickingYouConfirm[language]}
              <NextLink underline color='text.secondary' display='block' fontSize='atomic'>
                {messages.privacyPolicy[language]}
              </NextLink>
            </Text>
          </Layout>
        </Layout>
      </Column>
    </Box>
  )
}

export { Form }
