import { getBaseStyles }       from './styles'
import { getAppearanceStyles } from './styles'
import { getShapeStyles }      from './styles'

export const baseStyles = getBaseStyles()

export const appearanceStyles = ({ theme }) => getAppearanceStyles(theme)

export const shapeStyles = ({ theme }) => getShapeStyles(theme)

export const successStyles = ({ theme, success }) =>
  success && {
    backgroundColor: theme.colors.button.primary.active,
    color: theme.colors.button.primary.successText,
    '&:hover': {
      backgroundColor: theme.colors.button.primary.successText,
      color: theme.colors.button.primary.active,
      '& > svg > path': {
        fill: 'black',
      },
    },
  }

export const failureStyles = ({ theme, failure }) =>
  failure && {
    borderColor: theme.colors.button.primary.error,
    color: theme.colors.button.primary.error,
  }
