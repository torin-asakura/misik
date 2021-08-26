import { useContext }   from 'react'

import { Context }      from './context'
import { ContextValue } from './types'

const useLanguage = (): ContextValue => useContext<ContextValue>(Context)

export { useLanguage }
