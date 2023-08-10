import { useMutation }    from '@apollo/client'
import { MutationTuple }  from '@apollo/client'

import { SUBMIT_FORM }    from './submit.mutation'

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

const useSubmit = (): MutationTuple<SubmitFormPayload, SubmitFormVariables> => {
  const [submit, result] = useMutation<SubmitFormPayload, SubmitFormVariables>(SUBMIT_FORM)

  return [submit, result]
}

export { useSubmit }
