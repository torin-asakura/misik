import React      from 'react'
import { FC }     from 'react'

import { Column } from '@ui/layout'

import { Item }   from './item'

const List: FC = () => (
  <Column width='100%'>
    <Item />
    <Item reverse />
  </Column>
)

export { List }
