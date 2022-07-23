import { useQuery }           from '@apollo/client'

import { GET_MESSENGER_ICON } from './get-messenger-icon.query'

export const useMessengerIcon = (messengerId: string) => {
  const { data } = useQuery(GET_MESSENGER_ICON, { variables: { uri: `/${messengerId}/` } })

  if (data) {
    return data.mediaItemBy
  }

  return {}
}
