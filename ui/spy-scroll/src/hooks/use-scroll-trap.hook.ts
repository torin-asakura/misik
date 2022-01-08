import { useEffect }        from 'react'
import { useRef }           from 'react'

import { getWindowScrollY } from '@globals/dom'

import { useStep }          from '../context'

const useScrollTrap = (id: string) => {
  const trapRef = useRef(null)
  const store = useStep()

  useEffect(() => {
    if (store) {
      let topTrigger: number = -1
      let botTrigger: number = -1

      store.registerTrap(id)

      if (trapRef && trapRef.current) {
        const rect = trapRef.current.getBoundingClientRect()

        if (topTrigger === -1) topTrigger = rect.y
        botTrigger = topTrigger + rect.height
      }

      const handler = () => {
        if (getWindowScrollY() >= topTrigger && getWindowScrollY() <= botTrigger) {
          store.updateStep(id)
        }
      }

      document.addEventListener('scroll', handler)

      return () => document.removeEventListener('scroll', handler)
    }

    return () => {}
  }, [trapRef, id, store])

  return trapRef
}

export { useScrollTrap }
