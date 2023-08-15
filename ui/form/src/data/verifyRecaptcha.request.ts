/** @see https://developers.google.com/recaptcha/docs/verify */

import { VerifyRecaptchaResponse } from './data.interfaces'

const verifyRecaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'

/** @todo Move to env variables */
const secretKey = '6LdShlslAAAAAB6HF39ig23TXk2P1lv1UrvyOUlp'

const verifyRecaptcha = async (token: string): Promise<VerifyRecaptchaResponse> =>
  fetch(`${verifyRecaptchaUrl}?secret=${secretKey}&response=${token}`, {
    method: 'post',
  }).then((response) => response.json())

export { verifyRecaptcha }
