import { useQuery }     from '@apollo/client'

import { GET_SERVICES } from './services.query'
import { filter }       from './filter'
import { normalize }    from './normalizer'

const useServices = () => filter(normalize(useQuery(GET_SERVICES).data?.services?.nodes || []))

export { useServices }
