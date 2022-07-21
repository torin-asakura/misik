import { useQuery }              from '@apollo/client'

import { filter }                from '@globals/data'

import { GET_RELOCATION_PRICES } from './relocation-prices.query'

const useRelocationPrices = () =>
  filter(useQuery(GET_RELOCATION_PRICES).data?.relocationPrices.nodes || [])

export { useRelocationPrices }
