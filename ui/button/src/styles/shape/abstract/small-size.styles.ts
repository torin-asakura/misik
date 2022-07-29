import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSmallSizeStyles = (theme): styleFn => {
  const smallSizeStyles = createShapeStyles({
    size: 18,
    fontSize: 15,
    rounding: 100,
    fontWeight: 400,
    fontFamily: theme.fonts.primary,
  })

  return () => ({
    ...smallSizeStyles(),
  })
}

export { getSmallSizeStyles }
