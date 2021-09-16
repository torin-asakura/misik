import React        from 'react'
import { Children } from 'react'
import { useRef }   from 'react'

const useChildrenRefs = (children) =>
  Children.map(children, (child) => {
    const node = useRef(null) // eslint-disable-line

    return <div ref={node}>{child}</div>
  })

export { useChildrenRefs }