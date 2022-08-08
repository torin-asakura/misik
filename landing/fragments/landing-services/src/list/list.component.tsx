import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

import { Item }      from './item'
import { ListProps } from './list.interface'

const List: FC<ListProps> = ({ items }) => (
  <Column width='100%'>
    {items.map(({ contentAddons: { title, content, image, highlightedtext } }, index) => (
      <Column width='100%'>
        <Condition match={index === 0}>
          <Layout flexBasis={[32, 32, 64]} />
        </Condition>
        <Condition match={index !== 0}>
          <Layout flexBasis={[32, 32, 120]} />
        </Condition>
        <Divider />
        <Layout flexBasis={[50, 50, 120]} />
        <Item
          reverse={index % 2 !== 0}
          title={title}
          content={content}
          image={image}
          link={highlightedtext}
        />
      </Column>
    ))}
  </Column>
)

export { List }
