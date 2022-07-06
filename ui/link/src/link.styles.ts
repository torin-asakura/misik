import { createBaseStyles } from '@atls-ui-parts/link'

import { styleFn }          from 'styled-system'

export const baseStyles = createBaseStyles()

export const appearanceLinkStyles: styleFn = ({ theme, color }) => ({
  color: theme.colors.text[color] || theme.colors.text.primary,
  '&:hover': {
    color: theme.colors.text.accent,
  },
  '&:active': {
    color: theme.colors.text.press,
  },
})

export const transitionStyles = {
  transition: '.15s',
}

export const shapeLinkStyles: styleFn = ({ theme, fontFamily }) => ({
  fontFamily: theme.fonts[fontFamily] || theme.fonts.primary,
  whiteSpace: 'nowrap',
})

export const underlineStyles = ({ underline }) => ({
  textDecoration: underline ? 'underline' : 'none',
})
