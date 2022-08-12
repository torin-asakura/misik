import { useQuery }            from '@apollo/client'

import { filter }              from '@globals/data'
import { normalizer }          from '@globals/data'

import { GET_WORK_DIRECTIONS } from './work-directions.query'

const useWorkDirections = () =>
  filter(normalizer(useQuery(GET_WORK_DIRECTIONS).data?.workDirections.nodes || []))

export { useWorkDirections }
