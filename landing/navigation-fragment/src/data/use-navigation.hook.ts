import { useQuery }       from '@apollo/client'

import { filter }         from '@globals/data'
import { normalizer }     from '@globals/data'

import { GET_NAVIGATION } from './navigation.query'

const useNavigation = () =>
  filter(normalizer(useQuery(GET_NAVIGATION).data?.navigationItems.nodes || []))

export { useNavigation }
