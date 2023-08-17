import { useQuery }            from '@apollo/client'

import { FormsResponse }       from './data.interfaces'
import { ParsedFormsResponse } from './data.interfaces'
import { GET_FORMS }           from './forms.query'

const useForms = (): [never[] | ParsedFormsResponse, boolean] => {
  const { data, loading, error } = useQuery<FormsResponse>(GET_FORMS)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return [[], loading]
  }

  const getParsedFormFields = (lang: string) =>
    data.forms.nodes.find((form) => form.title === `contact_${lang}`)?.fields.nodes || []

  return [
    {
      RU: getParsedFormFields('ru'),
      EN: getParsedFormFields('en'),
    },
    loading,
  ]
}

export { useForms }
