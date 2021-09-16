import { useContext }   from 'react'

import { Context }      from './drawer.context'
import { ContextValue } from './drawer.interfaces'

const useDrawer = () => useContext<ContextValue>(Context)

export { useDrawer }
