import { useMutation }         from '@apollo/client'

import { SubmitFormResponse }  from './data.interfaces'
import { SubmitFormVariables } from './data.interfaces'
import { SUBMIT_FORM }         from './submit.mutation'
import { useVerify }           from './useVerify'

const useSubmit = () => {
  const [verify] = useVerify()
  const [submit] = useMutation<SubmitFormResponse, SubmitFormVariables>(SUBMIT_FORM)

  const submitForm = async (variables: SubmitFormVariables): Promise<boolean> => {
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
