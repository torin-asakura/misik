import React        from 'react'
import { FC }       from 'react'

import { Button }   from '@ui/button'
import { Layout }   from '@ui/layout'

import { CTAProps } from './cta.interface'

const CTA: FC<CTAProps> = ({ setVisible, message }) => (
  <Layout>
    <Button colors='secondary' size='medium' height={34} onClick={() => setVisible(true)}>
      {message}
    </Button>
  </Layout>
)

export { CTA }
