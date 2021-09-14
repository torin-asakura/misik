import styled                             from '@emotion/styled'
import { Link as LinkBase }               from '@atls-ui-parts/link'
import { NextLink as NextLinkBase }       from '@atls-ui-parts/link'
import { NextNavLink as NextNavLinkBase } from '@atls-ui-parts/link'

import { activeStyles }                   from './link.styles'
import { baseStyles }                     from './link.styles'
import { hoverStyles }                    from './link.styles'
import { transitionStyles }               from './link.styles'
import { underlineStyles }                from './link.styles'

const applyStyles = (Component) =>
  styled(Component)(activeStyles, baseStyles, hoverStyles, transitionStyles, underlineStyles)

const Link = applyStyles(LinkBase)
const NextLink = applyStyles(NextLinkBase)
const NextNavLink = applyStyles(NextNavLinkBase)

export { Link, NextLink, NextNavLink }
