import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'
import { useEffect }           from 'react'

import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { Input }               from '@ui/input'
import { Layout }              from '@ui/layout'
import { useLanguage }         from '@globals/language'
import { messages }            from '@globals/messages'

import { FormFieldNode }       from '../data'
import { SubmitFormVariables } from '../data'
import { useForms }            from '../data'
import { useSubmit }           from '../data'

const defaultFormFields: SubmitFormVariables = { firstname: '', phone: '', email: '', textbox: '' }

const FormContent: FC = () => {
  const [formFieldsValues, setFormFieldsValues] = useState(defaultFormFields)
  const [formErrorsFields, setFormErrorsFields] = useState<string[]>([])
  const [formStatus, setFormStatus] = useState<'send' | 'sent' | 'notSent'>('send')

  const [language] = useLanguage()
  const [fields] = useForms()
  const [submit] = useSubmit()

  useEffect(() => {
    if (formStatus !== 'send') {
      setTimeout(() => setFormStatus('send'), 2000)
    }
  }, [formStatus])

  const findEmptyFields = (): string[] => {
    if (Array.isArray(fields)) {
      return ['noFields']
    }

    const emptyFields: string[] = []

    Object.keys(formFieldsValues).forEach((key) => {
      const isRequired = fields[language].find((field) => field.type === key)?.required || false

      if (isRequired && formFieldsValues[key] === '') {
        emptyFields.push(key)
      }
    })

    return emptyFields
  }

  const handleChangeField = (value: string, field: string) => {
    setFormFieldsValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendForm = async () => {
    try {
      const emptyFields = findEmptyFields()

      if (emptyFields.length !== 0) {
        setFormErrorsFields(emptyFields)
        setFormStatus('notSent')

        return
      }

      const isSubmitSuccess = await submit(formFieldsValues)

      if (!isSubmitSuccess) {
        setFormStatus('notSent')

        return
      }

      setFormStatus('sent')
      setFormFieldsValues(defaultFormFields)
    } catch (error) {
      throw Error(`form-content: ${error}`)
    }
  }

  return (
    <>
      <Condition match={!Array.isArray(fields)}>
        {fields[language]?.map((field: FormFieldNode) => (
          <Condition match={formFieldsValues[field.type] !== undefined} key={field.type}>
            <Layout maxHeight={[58, 58, 62]}>
              <Input
                value={formFieldsValues[field.type]}
                onChange={(value) => handleChangeField(value, field.type)}
                error={formErrorsFields.includes(field.type)}
                placeholder={`${field.label}${field.required ? '*' : ''}`}
              />
            </Layout>
            <Layout flexBasis={32} />
          </Condition>
        ))}
      </Condition>
      <Layout>
        <Button
          width='100%'
          height={[48, 48, 52]}
          px={0}
          success={formStatus === 'sent'}
          failure={formStatus === 'notSent'}
          onClick={handleSendForm}
        >
          <Condition match={formStatus === 'send'}>{messages.send[language]}</Condition>
          <Condition match={formStatus === 'sent'}>{messages.sent[language]}</Condition>
          <Condition match={formStatus === 'notSent'}>{messages.notSent[language]}</Condition>
        </Button>
      </Layout>
      <Layout flexBasis={[24, 24, 32]} />
    </>
  )
}

export { FormContent }
