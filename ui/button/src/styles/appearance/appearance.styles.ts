import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getPrimaryColorsStyles }     from './abstract'
import { getTernaryColorsStyles }     from './abstract'
import { getSecondaryColorsStyles }   from './abstract'
import { getTransparentColorsStyles } from './abstract'

const getAppearanceStyles = (theme): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles(theme)
  const secondaryColorsStyles = getSecondaryColorsStyles(theme)
  const transparentColorsStyles = getTransparentColorsStyles(theme)
  const ternaryColorsStyles = getTernaryColorsStyles(theme)

  return switchProp(prop('colors', 'primary'), {
    primary: primaryColorsStyles,
    secondary: secondaryColorsStyles,
    transparent: transparentColorsStyles,
    ternary: ternaryColorsStyles,
  })
}

export { getAppearanceStyles }
