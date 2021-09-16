import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  marginTop: '-5px',
  opacity: 0,
  transition: '.1s',
})
