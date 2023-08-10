import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { verifyRecaptcha }    from './verifyRecaptcha.request'

export const useVerify = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const verify = async (action: string): Promise<boolean> => {
    try {
      if (!executeRecaptcha) {
        return false
      }

      const token = await executeRecaptcha(action)

      if (!token) {
        return false
      }

      const { success } = await verifyRecaptcha(token)

      return success
    } catch (error) {
      throw Error(`useVerify: ${error}`)
    }
  }

  return [verify]
}