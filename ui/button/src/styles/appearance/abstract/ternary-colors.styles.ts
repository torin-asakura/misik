import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getTernaryColorsStyles = (theme): styleFn => {
  const ternaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.ternary.default,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  })

  const ternaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.ternary.hover,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  })

  const ternaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.ternary.active,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  })

  return () => ({
    ...ternaryDefaultColors(),
    '&:hover': {
      ...ternaryHoverColors(),
    },
    '&:active': {
      ...ternaryActiveColors(),
    },
  })
}

export { getTernaryColorsStyles }
