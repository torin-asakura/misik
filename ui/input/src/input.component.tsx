import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { useRef }                   from 'react'
import { forwardRef }               from 'react'
import { layout }                   from 'styled-system'

import { Condition }                from '@ui/condition'

import { InputProps }               from './input.interfaces'
import { Label }                    from './label'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { transitionStyles }         from './input.styles'
import { borderBottomStyles }       from './input.styles'

export const InputElement = styled.div<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  transitionStyles,
  borderBottomStyles,
  layout
)

const Container = styled.div(({ type }: any) => ({
  display: type === 'hidden' ? 'none' : 'flex',
  width: '100%',
  flexDirection: 'column',
}))

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, type, disabled, error = false, onChange, onChangeNative, placeholder, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  if (!ref) {
    ref = useRef(null) // eslint-disable-line
  }

  return (
    <Container
      type={type}
      // @ts-ignore
      onClick={() => (ref as any).current.focus()}
    >
      <Condition match={value || error}>
        <Label error={error}>{placeholder}</Label>
      </Condition>
      <InputElement {...props} size={size} error={error}>
        <RawInput
          ref={ref}
          type={type}
          disabled={disabled}
          value={value}
          onChange={changeValue}
          placeholder={placeholder}
          {...props}
        />
      </InputElement>
    </Container>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
