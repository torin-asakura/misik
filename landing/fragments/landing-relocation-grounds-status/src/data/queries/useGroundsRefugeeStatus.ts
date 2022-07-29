import { useQuery }                   from '@apollo/client'

import { filter }                     from '@globals/data'
import { normalizer }                 from '@globals/data'

import { GET_GROUNDS_REFUGEE_STATUS } from './grounds-refugee-status.query'

const useGroundsRefugeeStatus = () =>
  filter(normalizer(useQuery(GET_GROUNDS_REFUGEE_STATUS).data?.groundsRefugeeStatus.nodes || []))

export { useGroundsRefugeeStatus }
