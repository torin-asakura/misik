import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMediumSizeStyles = (theme): styleFn => {
  const mediumSizeStyles = createShapeStyles({
    size: 46,
    fontSize: 18,
    rounding: 100,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return ({ colors }) => ({
    ...mediumSizeStyles(),
    border: colors === 'secondary' && '0px',
    borderBottom: colors === 'secondary' && '1px solid',
    borderRadius: colors === 'secondary' ? '0px' : '100px',
    paddingLeft: colors === 'secondary' && 0,
    paddingRight: colors === 'secondary' && 0,
    paddingBottom: colors === 'secondary' && '12px',
  })
}

export { getMediumSizeStyles }
