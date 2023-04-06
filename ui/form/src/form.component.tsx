import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { FormContent }             from './form-content'

const sitekey = '6LdShlslAAAAABOs_yonZGSN8Kc8LYjEf-op7cbt'

const Form: FC = () => (
  <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
    <FormContent />
  </GoogleReCaptchaProvider>
)

export { Form }
