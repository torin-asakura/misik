import { useMutation } from '@apollo/client'

import { SUBMIT_FORM } from './submit.mutation'
import { useVerify }   from './useVerify'

interface FieldError {
  fieldId: number
  message: string
  slug: string
}

interface SubmitFormPayload {
  submitForm: {
    errors: FieldError[]
    message: string
    success: boolean
  }
}

export interface SubmitFormVariables {
  firstname: string
  phone: string
  email: string
  textbox: string
}

type SubmitForm = (variables: SubmitFormVariables) => Promise<boolean>

const useSubmit = () => {
  const [verify] = useVerify()
  const [submit] = useMutation<SubmitFormPayload, SubmitFormVariables>(SUBMIT_FORM)

  const submitForm: SubmitForm = async (variables) => {
    try {
      const isVerifySuccess = await verify('submit')

      if (!isVerifySuccess) {
        return false
      }

      const { data } = await submit({ variables })

      if (!data) {
        return false
      }

      return data.submitForm.success
    } catch (error) {
      throw Error(`submitForm: ${error}`)
    }
  }

  return [submitForm]
}

export { useSubmit }
