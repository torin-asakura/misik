import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { Text }           from '@ui/text'

import { LabelContainer } from './label-container'
import { baseStyles }     from './label.styles'

const LabelComponent = styled(Text.withComponent('label'))(baseStyles)

const isValid = (children: any): boolean => !(typeof children === 'string' && children === '')

const Label: FC = ({ children }) =>
  isValid(children) ? (
    <LabelContainer>
      <LabelComponent fontFamily='primary' color='text.secondary' fontSize='small'>
        {children}
      </LabelComponent>
    </LabelContainer>
  ) : null

export { Label }
