import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Row }                     from '@ui/layout'

import { FormContent }             from './form-content'
import { PrivacyPolicy }           from './privacy-policy'

/** @todo Move to env variables */
const sitekey = '6LdShlslAAAAABOs_yonZGSN8Kc8LYjEf-op7cbt'

const Form: FC = () => (
  <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
    <Box width='100%' maxWidth={['100%', '100%', 859]} height='100%'>
      <Column width='100%'>
        <FormContent />
        <Row justifyContent='center'>
          <PrivacyPolicy />
        </Row>
      </Column>
    </Box>
  </GoogleReCaptchaProvider>
)

export { Form }
