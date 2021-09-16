import { useContext } from 'react'

import { Context }    from './context'

const useStep = () => useContext(Context)

export { useStep }
