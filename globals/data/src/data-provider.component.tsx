import { useQuery }         from '@apollo/client'

import React                from 'react'
import { FC }               from 'react'

import { Provider }         from './context'
import { GET_FRAGMENTS }    from './queries'
import { extractFragments } from './extractor'
import { normalize }        from './normalizator'

const DataProvider: FC = ({ children }) => {
  const { data, loading, error } = useQuery(GET_FRAGMENTS)
  let fragments

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    fragments = normalize(extractFragments(data.fragments.nodes))
  }

  return <Provider value={{ fragments, loading }}>{children}</Provider>
}

export { DataProvider }
