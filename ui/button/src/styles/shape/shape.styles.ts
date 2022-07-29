import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getSmallSizeStyles }  from './abstract'
import { getMediumSizeStyles } from './abstract'
import { getGhostStyles }      from './abstract'

const getShapeStyles = (theme): styleFn =>
  switchProp(prop('size', 'normal'), {
    normal: getNormalSizeStyles(theme),
    medium: getMediumSizeStyles(theme),
    small: getSmallSizeStyles(theme),
    ghost: getGhostStyles(),
  })

export { getShapeStyles }
