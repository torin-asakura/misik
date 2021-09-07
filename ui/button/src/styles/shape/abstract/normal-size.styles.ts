import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 46,
    fontSize: 15,
    rounding: 100,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return normalSizeStyles
}

export { getNormalSizeStyles }
