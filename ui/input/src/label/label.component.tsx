import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { Text }           from '@ui/text'

import { LabelContainer } from './label-container'
import { baseStyles }     from './label.styles'

interface Props {
  error?: boolean
}

const LabelComponent = styled(Text.withComponent('label'))(baseStyles)

const isValid = (children: any): boolean => !(typeof children === 'string' && children === '')

const Label: FC<Props> = ({ children, error }) =>
  isValid(children) ? (
    <LabelContainer>
      <LabelComponent
        fontFamily='primary'
        color={!error ? 'text.secondary' : 'input.error'}
        fontSize='small'
      >
        {children}
      </LabelComponent>
    </LabelContainer>
  ) : null

export { Label }
