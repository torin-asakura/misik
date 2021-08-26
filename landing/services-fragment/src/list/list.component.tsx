import React                   from 'react'
import { FC }                  from 'react'

import { Box, Column, Layout } from '@ui/layout'

import { Item }                from './item'
import { ListProps }           from './list.interface'

const List: FC<ListProps> = ({ items }) => (
  <Column width='100%'>
    {items.map(({ title, content, featuredImage }, index) => (
      <>
        <Column width='100%'>
          <Layout flexBasis={120} />
          <Box width='100%' height={1} backgroundColor='black' />
          <Layout flexBasis={120} />
          <Item
            reverse={index % 2 !== 0}
            title={title}
            content={content}
            image={featuredImage.node}
          />
        </Column>
      </>
    ))}
  </Column>
)

export { List }
