import { useQuery }     from '@apollo/client'

import { filter }       from '@globals/data'
import { normalizer }   from '@globals/data'

import { GET_CONTACTS } from './contacts.query'

const useContacts = () => filter(normalizer(useQuery(GET_CONTACTS).data?.contacts.nodes || []))

export { useContacts }
