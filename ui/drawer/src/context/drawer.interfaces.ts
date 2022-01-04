import { Active } from '../drawer.interface'

export type ContextValue = [Active, (newState: Active) => void]
