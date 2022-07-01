import { styleFn } from 'styled-system'

const createBaseStyles: styleFn = () =>
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    zIndex: 999,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.background.transparentBlack,
  })

export { createBaseStyles }
