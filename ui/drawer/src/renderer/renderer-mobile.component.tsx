import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { Children }        from 'react'
import { useState }        from 'react'
import { useEffect }       from 'react'
import { createPortal }    from 'react-dom'

import { Layout }          from '@ui/layout'

const RendererMobile = ({ children, active }) => {
  const [doc, setDoc] = useState<any>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <Layout display={['flex', 'flex', 'none']}>
          {Children.map(children, (child) => (
            <AnimatePresence>{active && child}</AnimatePresence>
          ))}
        </Layout>,
        (doc as any).body
      )
    : null
}

export { RendererMobile }
