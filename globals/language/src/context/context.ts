import { createContext } from 'react'

import { ContextValue }  from './types'

const Context = createContext<ContextValue>(['RU', () => {}])

export { Context }
