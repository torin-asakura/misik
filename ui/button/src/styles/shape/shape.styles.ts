import { styleFn }             from 'styled-system'

import { getNormalSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => getNormalSizeStyles(theme)

export { getShapeStyles }
