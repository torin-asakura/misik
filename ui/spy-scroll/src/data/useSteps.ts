import { useQuery }  from '@apollo/client'

import { GET_STEPS } from './steps.query'
import { filter }    from './filter'

const useSteps = () => filter(useQuery(GET_STEPS).data?.steps.nodes || [])

export { useSteps }
