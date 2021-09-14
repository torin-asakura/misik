import Document          from 'next/document'
import compose           from 'recompose/compose'
import { withOpenGraph } from '@atls/next-document-with-opengraph'
import { withIcons }     from '@atls/next-document-with-icons'
import { withHelmet }    from '@atls/next-document-with-helmet'

const withProviders = compose(
  withOpenGraph({ image: 'https://misik.pro/wp-content/uploads/2021/06/Misik-Dark.svg' }),
  withIcons(),
  withHelmet()
  // TODO add gtag
  // withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
