import { createActiveStyles }     from '@atls-ui-parts/link'
import { createHoverStyles }      from '@atls-ui-parts/link'
import { createTransitionStyles } from '@atls-ui-parts/link'

export const baseStyles = ({ theme, color }) => !color && { color: theme.colors.text.primary }

export const activeStyles = createActiveStyles({ color: 'press' })

export const hoverStyles = createHoverStyles({ color: 'accent' })

export const transitionStyles = createTransitionStyles('.15s')

export const underlineStyles = ({ underline }) => ({
  textDecoration: underline ? 'underline' : 'none',
})
