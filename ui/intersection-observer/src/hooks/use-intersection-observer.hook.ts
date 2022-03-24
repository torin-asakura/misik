import { useRef }    from 'react'
import { useEffect } from 'react'

const doNothing = () => {
  // do nothing
}

const useIntersectionObserver = (onIntersection: (id: string) => void = doNothing) => {
  const observers: Map<string, any> = new Map()

  const getObserverOptions = (id: string): { ref: any } => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)

    observers.set(id, ref)

    return {
      ref,
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries) {
          onIntersection((entries[0].target as any).observerId)
        }
      },
      { threshold: 0.6 }
    )

    const observerServices = new IntersectionObserver(
      (entries) => {
        if ((entries[0].target as any).observerId === 'services') {
          onIntersection((entries[0].target as any).observerId)
        }
      },
      { threshold: 0.3 }
    )

    for (const key of observers.keys() as any) {
      const observerRef = observers.get(key)

      observerRef.current.observerId = key

      observer.observe(observerRef.current)
      observerServices.observe(observerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getObserverOptions,
  }
}

export { useIntersectionObserver }
