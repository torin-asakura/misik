import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getMediumSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn =>
  switchProp(prop('size', 'normal'), {
    normal: getNormalSizeStyles(theme),
    medium: getMediumSizeStyles(theme),
  })

export { getShapeStyles }
