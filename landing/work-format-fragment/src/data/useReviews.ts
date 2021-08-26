import { useQuery }    from '@apollo/client'

import { GET_REVIEWS } from './reviews.query'

const useReviews = () => useQuery(GET_REVIEWS).data?.reviews.nodes || []

export { useReviews }
