import { styleFn } from 'styled-system'

const createAppearanceStyles = (): styleFn =>
  ({ theme }) => ({
    backgroundColor: theme.colors.background.beige,
  })

export { createAppearanceStyles }
