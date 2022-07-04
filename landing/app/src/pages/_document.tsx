import { withHelmet }    from '@atls/next-document-with-helmet'
import { withOpenGraph } from '@atls/next-document-with-opengraph'

import Document          from 'next/document'
import React             from 'react'
import compose           from 'recompose/compose'

const withIcons = () => (TargetComponent) =>
  class WithIcons extends TargetComponent {
    static async getInitialProps(context) {
      const props = await super.getInitialProps(context)

      props.head.push(
        <link
          rel='apple-touch-icon'
          href='https://wp.misik.pro/wp-content/uploads/2022/07/apple_touch_icon.png'
        />,
        <link
          rel='icon'
          type='image/png'
          href='https://wp.misik.pro/wp-content/uploads/2022/07/favicon.png'
        />
      )

      return props
    }

    static renderDocument(...args) {
      // @ts-ignore
      return Document.renderDocument(...args)
    }
  }

const withProviders = compose(
  withOpenGraph({ image: 'https://misik.pro/wp-content/uploads/2021/06/Misik-Dark.svg' }),
  withIcons(),
  withHelmet()
  // TODO add gtag
  // withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
