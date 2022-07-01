import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getSecondaryColorsStyles = (theme): styleFn => {
  const secondaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.default,
    borderColor: theme.colors.button.secondary.default,
    backgroundColor: 'transparent',
  })

  const secondaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.hover,
    borderColor: theme.colors.button.secondary.hover,
    backgroundColor: 'transparent',
  })

  const secondaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.active,
    borderColor: theme.colors.button.secondary.active,
    backgroundColor: 'transparent',
  })

  return () => ({
    ...secondaryDefaultColors(),
    '&:hover': {
      ...secondaryHoverColors(),
    },
    '&:active': {
      ...secondaryActiveColors(),
    },
  })
}

export { getSecondaryColorsStyles }
