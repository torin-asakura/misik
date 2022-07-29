import { useQuery }            from '@apollo/client'

import { GET_WORK_DIRECTIONS } from './work-directions.query'
import { filter }              from './filter'
import { normalize }           from './normalizer'

const useWorkDirections = () =>
  filter(normalize(useQuery(GET_WORK_DIRECTIONS).data?.workDirections.nodes || []))

export { useWorkDirections }
