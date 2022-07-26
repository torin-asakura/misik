import styled from '@emotion/styled'

import React  from 'react'
import { FC } from 'react'

const Path = styled.path({
  strokeDasharray: 1,
  animationName: 'draw',
  animationDuration: '0.2s',
})

const Minus: FC = () => (
  <svg width='24' height='2' viewBox='0 0 18 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path pathLength={1} strokeLinecap='round' d='M0 1H9H18' stroke='black' stroke-width='1.25' />
  </svg>
)

export { Minus }
