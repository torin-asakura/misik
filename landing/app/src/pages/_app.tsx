import 'mapbox-gl/dist/mapbox-gl.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import { ApolloProvider } from '@apollo/client'

import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

const Bare = ({ Component, pageProps, props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} {...props} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Bare
