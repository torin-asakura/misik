import { useQuery }     from '@apollo/client'

import { GET_PARTNERS } from './partners.query'

const usePartners = () => useQuery(GET_PARTNERS).data?.partners.nodes || []

export { usePartners }
