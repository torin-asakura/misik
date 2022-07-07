import styled                   from '@emotion/styled'

import { Text }                 from '@ui/text'

import { shapeLinkStyles }      from './link.styles'
import { baseStyles }           from './link.styles'
import { appearanceLinkStyles } from './link.styles'
import { transitionStyles }     from './link.styles'
import { underlineStyles }      from './link.styles'

export const Link = styled(Text.withComponent('a'))<any>(
  baseStyles,
  shapeLinkStyles,
  appearanceLinkStyles,
  transitionStyles,
  underlineStyles
)
