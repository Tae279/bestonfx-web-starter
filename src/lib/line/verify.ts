import crypto from 'node:crypto';

type VerifyLineSignatureInput = {
  body: string;
  signature: string;
  channelSecret: string;
};

export function verifyLineSignature({ body, signature, channelSecret }: VerifyLineSignatureInput) {
  const expected = crypto.createHmac('sha256', channelSecret).update(body).digest('base64');

  if (!signature || expected.length !== signature.length) {
    return false;
  }

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
