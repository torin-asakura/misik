import App               from 'next/app'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'
import { withEmotion }   from '@atls/next-app-with-emotion'
import { ThemeProvider } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    uri: 'https://localhost:8080',
    onUnauthenticated: () => {},
  }),
  withEmotion({
    Provider: ThemeProvider,
  }),
  withHelmet()
)

export default withProviders(App)
