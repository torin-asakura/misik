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

  return ({ colors }) => ({
    ...normalSizeStyles(),
    border: colors === 'secondary' && '0px',
    borderBottom: colors === 'secondary' && '1px solid',
    borderRadius: colors === 'secondary' ? '0px' : '100px',
    paddingLeft: colors === 'secondary' ? 0 : 24,
    paddingRight: colors === 'secondary' ? 0 : 24,
    paddingBottom: colors === 'secondary' && '16px',
  })
}

export { getNormalSizeStyles }
