import React  from 'react'
import { FC } from 'react'

const BurgerIcon: FC = () => (
  <svg
    id='shape'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='1' y='11' width='30' height='1.5' fill='#696766'>
      <animateTransform
        begin='shape.mouseover'
        attributeName='transform'
        type='rotate'
        to='45 5.92371 4.61304'
        dur='700ms'
        fill='freeze'
      />
      <animateTransform
        begin='shape.mouseout'
        attributeName='transform'
        type='rotate'
        to='0 0 0'
        dur='700ms'
        fill='freeze'
      />
    </rect>
    <rect x='1' y='15.5' width='30' height='1.5' fill='#696766'>
      <animate begin='shape.mouseover' attributeName='y' dur='700ms' to='16' fill='freeze' />
      <animate begin='shape.mouseout' attributeName='y' dur='700ms' to='15.5' fill='freeze' />
      <animate begin='shape.mouseover' attributeName='x' dur='700ms' to='-16' fill='freeze' />
      <animate begin='shape.mouseout' attributeName='x' dur='700ms' to='1' fill='freeze' />
      <animateTransform
        begin='shape.mouseover'
        attributeName='transform'
        type='rotate'
        to='-45 5.92371 4.61304'
        dur='700ms'
        fill='freeze'
      />
      <animateTransform
        begin='shape.mouseout'
        attributeName='transform'
        type='rotate'
        to='0 0 0'
        dur='700ms'
        fill='freeze'
      />
    </rect>
    <rect x='1' y='20' width='16' height='1.5' fill='#696766'>
      <animate begin='shape.mouseover' attributeName='y' dur='700ms' to='16' fill='freeze' />
      <animate begin='shape.mouseout' attributeName='y' dur='700ms' to='20' fill='freeze' />
      <animate begin='shape.mouseover' attributeName='x' dur='700ms' to='-16' fill='freeze' />
      <animate begin='shape.mouseout' attributeName='x' dur='700ms' to='1' fill='freeze' />
      <animateTransform
        begin='shape.mouseover'
        attributeName='transform'
        type='rotate'
        to='-45 5.92371 4.61304'
        dur='700ms'
        fill='freeze'
      />
      <animateTransform
        begin='shape.mouseout'
        attributeName='transform'
        type='rotate'
        to='0 0 0'
        dur='700ms'
        fill='freeze'
      />
    </rect>
  </svg>
)

export { BurgerIcon }
