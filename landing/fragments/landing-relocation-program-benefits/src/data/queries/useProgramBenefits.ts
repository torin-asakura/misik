import { useQuery }             from '@apollo/client'

import { filter }               from '@globals/data'
import { normalizer }           from '@globals/data'

import { GET_PROGRAM_BENEFITS } from './program-benefits.query'

const useProgramBenefits = () =>
  filter(normalizer(useQuery(GET_PROGRAM_BENEFITS).data?.programBenefits.nodes || []))

export { useProgramBenefits }
