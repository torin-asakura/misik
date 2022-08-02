import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'https://wp.misik.pro/graphql',
    cache: new InMemoryCache(),
  })
