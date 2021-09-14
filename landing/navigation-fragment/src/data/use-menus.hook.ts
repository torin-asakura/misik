import { useQuery }  from '@apollo/client'

import { GET_MENUS } from './menus.query'
import { filter }    from './filter'
import { mapHref }   from './map-href.adapter'

const useMenus = () => filter(mapHref(useQuery(GET_MENUS).data?.menus.nodes || []))

export { useMenus }
