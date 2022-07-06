import { useQuery }    from '@apollo/client'

import { GET_REVIEWS } from './reviews.query'

export const useReviews = () => {
  const { data } = useQuery(GET_REVIEWS)

  if (data) {
    const RU = data.reviews.nodes.filter((review) => review.language.code === 'RU')
    const EN = data.reviews.nodes.filter((review) => review.language.code === 'EN')
    return { RU, EN }
  }

  return { RU: [], EN: [] }
}
