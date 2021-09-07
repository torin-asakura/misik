import React                from 'react'
import { FC }               from 'react'
import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'
import { layout }           from 'styled-system'
import { space }            from 'styled-system'

import { ButtonProps }      from './button.interface'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'

export const ButtonElement = styled.button<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  layout,
  space
)

export const Button: FC<ButtonProps> = ({ divider = 12, children, ...props }) => (
  <ButtonElement {...props}>
    <Content divider={divider}>{children}</Content>
  </ButtonElement>
)
