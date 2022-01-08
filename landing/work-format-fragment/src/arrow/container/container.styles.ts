import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme, hover }) => ({
  borderRadius: theme.radii.huge,
  border: `1px solid ${hover ? theme.colors.background.black : theme.colors.background.lightGray}`,
  width: 56,
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.2s',
  cursor: 'pointer',
})
