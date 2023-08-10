/** @see https://developers.google.com/recaptcha/docs/verify */

interface ResponseData {
  success: boolean;
  action?: string;
  score?: number; // 0.0 - 1.0
  challenge_ts?: string;
  hostname?: string;
  'error-codes': string[];
}

type VerifyRecaptcha = (token: string) => Promise<ResponseData>;

const verifyRecaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';

/** @todo Move to env variables */
const secretKey = '6LdShlslAAAAAB6HF39ig23TXk2P1lv1UrvyOUlp';

export const verifyRecaptcha: VerifyRecaptcha = async (token) =>
  fetch(`${verifyRecaptchaUrl}?secret=${secretKey}&response=${token}`, {
    method: 'post',
  }).then((response) => response.json());

