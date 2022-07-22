import React         from 'react'
import { FC }        from 'react'

import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

import { Item }      from './item'
import { ListProps } from './list.interface'

const List: FC<ListProps> = ({ items }) => (
  <Column width='100%'>
    {items.map(({ title, content, featuredImage }, index) => (
      <Column width='100%'>
        <Layout flexBasis={[32, 32, 64]} />
        <Divider />
        <Layout flexBasis={[50, 50, 120]} />
        <Item
          reverse={index % 2 !== 0}
          title={title}
          content={content}
          image={featuredImage.node}
        />
      </Column>
    ))}
  </Column>
)

export { List }
