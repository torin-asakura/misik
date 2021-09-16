import { createContext } from 'react'

import { ContextValue }  from './drawer.interfaces'

const Context = createContext<ContextValue>([false, () => {}])

export { Context }