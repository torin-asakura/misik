import { useQuery }     from '@apollo/client'

import { filter }       from '@globals/data'
import { normalizer }   from '@globals/data'

import { GET_SERVICES } from './services.query'

const useServices = () => filter(normalizer(useQuery(GET_SERVICES).data?.services?.nodes || []))

export { useServices }
