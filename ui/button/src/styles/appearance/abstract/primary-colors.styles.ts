import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getPrimaryColorsStyles = (theme): styleFn => {
  const primaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: 'transparent',
    borderColor: theme.colors.button.primary.default,
  })

  const primaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: 'transparent',
    borderColor: theme.colors.button.primary.hover,
  })

  const primaryActiveActive = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: 'transparent',
    borderColor: theme.colors.button.primary.active,
  })

  return () => ({
    ...primaryDefaultColors(),
    '&:hover': {
      ...primaryHoverColors(),
    },
    '&:active': {
      ...primaryActiveActive(),
    },
  })
}

export { getPrimaryColorsStyles }
