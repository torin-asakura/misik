import { Language } from '@globals/language'

export interface FormFieldNode {
  type: string
  label: string
  required: boolean
}

export interface FormsResponse {
  forms: {
    nodes: Array<{
      title: string
      fields: {
        nodes: FormFieldNode[]
      }
    }>
  }
}

export type ParsedFormsResponse = Record<Language, FormFieldNode[]>

export interface SubmitFormFieldError {
  fieldId: number
  message: string
  slug: string
}

export interface SubmitFormResponse {
  submitForm: {
    errors: SubmitFormFieldError[]
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

export interface VerifyRecaptchaResponse {
  success: boolean
  action?: string
  score?: number // 0.0 - 1.0
  challenge_ts?: string
  hostname?: string
  'error-codes': string[]
}
