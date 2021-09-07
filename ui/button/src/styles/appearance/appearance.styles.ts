import { styleFn }                  from 'styled-system'
import { switchProp }               from 'styled-tools'
import { prop }                     from 'styled-tools'

import { getPrimaryColorsStyles }   from './abstract'
import { getSecondaryColorsStyles } from './abstract'

const getAppearanceStyles = (theme): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles(theme)
  const secondaryColorsStyles = getSecondaryColorsStyles(theme)

  return switchProp(prop('colors', 'primary'), {
    primary: primaryColorsStyles,
    secondary: secondaryColorsStyles,
  })
}

export { getAppearanceStyles }
