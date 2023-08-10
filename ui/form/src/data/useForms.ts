import { useQuery }  from '@apollo/client'

import { Language }  from '@globals/language'

import { GET_FORMS } from './forms.query'

export interface FormFieldNode {
  type: string
  label: string
  required: boolean
}

interface FormsData {
  forms: {
    nodes: Array<{
      title: string
      fields: {
        nodes: FormFieldNode[]
      }
    }>
  }
}

type ParsedFormsData = Record<Language, FormFieldNode[]>

const useForms = (): [never[] | ParsedFormsData, boolean] => {
  const { data, loading, error } = useQuery<FormsData>(GET_FORMS)

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
