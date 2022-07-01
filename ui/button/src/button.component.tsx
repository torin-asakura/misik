import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { layout }           from 'styled-system'
import { space }            from 'styled-system'

import { Condition }        from '@ui/condition'

import { ButtonProps }      from './button.interface'
import { SuccessIcon }      from './icons'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'
import { successStyles }    from './button.styles'
import { failureStyles }    from './button.styles'

export const ButtonElement = styled.button<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  successStyles,
  failureStyles,
  layout,
  space
)

export const Button: FC<ButtonProps> = ({
  success = false,
  failure = false,
  divider = 12,
  children,
  ...props
}) => (
  <ButtonElement success={success} failure={failure} {...props}>
    <Condition match={success}>
      <Content divider={divider}>
        <SuccessIcon />
        {children}
      </Content>
    </Condition>
    <Condition match={!success}>
      <Content divider={divider}>{children}</Content>
    </Condition>
  </ButtonElement>
)
