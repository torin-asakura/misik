import { useQuery }    from '@apollo/client'

import { GET_REVIEWS } from './reviews.query'
import { normalize }   from './normalizer'

const useReviews = () => normalize(useQuery(GET_REVIEWS).data?.reviews.nodes || [])

export { useReviews }
