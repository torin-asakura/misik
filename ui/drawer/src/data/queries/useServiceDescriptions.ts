import { useQuery }                 from '@apollo/client'

import { filter }                   from '@globals/data'
import { normalizer }               from '@globals/data'

import { GET_SERVICE_DESCRIPTIONS } from './service-descriptions.query'

const useServiceDescriptions = () =>
  filter(normalizer(useQuery(GET_SERVICE_DESCRIPTIONS).data?.serviceDescriptions.nodes || []))

export { useServiceDescriptions }
