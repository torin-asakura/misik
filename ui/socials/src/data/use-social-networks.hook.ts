import { useQuery }        from '@apollo/client'

import { SOCIAL_NETWORKS } from './social-networks.query'

export const useSocialNetworks = () => {
  const { data } = useQuery(SOCIAL_NETWORKS)

  if (data?.socialNetworks) {
    return data.socialNetworks.nodes
  }

  return []
}
