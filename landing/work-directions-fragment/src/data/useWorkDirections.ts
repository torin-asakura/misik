import { useQuery }            from '@apollo/client'

import { GET_WORK_DIRECTIONS } from './work-directions.query'
import { normalize }           from './normalizer'
import { filter }              from './filter'

const useWorkDirections = () =>
  filter(normalize(useQuery(GET_WORK_DIRECTIONS).data?.workDirections.nodes || []))

export { useWorkDirections }
