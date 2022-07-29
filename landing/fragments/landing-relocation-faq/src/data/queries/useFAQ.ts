import { useQuery }   from '@apollo/client'

import { filter }     from '@globals/data'
import { normalizer } from '@globals/data'

import { GET_FAQ }    from './faq.query'

const useFAQ = () => filter(normalizer(useQuery(GET_FAQ).data?.faqs.nodes || []))

export { useFAQ }
