import { useRef }    from 'react'
import { useEffect } from 'react'

const doNothing = () => {
  // do nothing
}

const useIntersectionObserver = (onIntersection: (id: string) => void = doNothing) => {
  const observers: Map<string, any> = new Map()
  const observersThreshold: Map<number, any> = new Map()

  const THRESHOLD = 0.6
  let thresholdOption = 0

  const getObserverOptions = (id: string, hold: number): { ref: any } => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)

    thresholdOption = hold

    observers.set(id, ref)

    observersThreshold.set(hold, ref)

    return {
      ref,
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries && (entries[0].target as any).thresholdValue === THRESHOLD) {
          onIntersection((entries[0].target as any).observerId)
        }
      },
      { threshold: THRESHOLD }
    )

    const observerCustom = new IntersectionObserver(
      (entries) => {
        if ((entries && entries[0].target as any).thresholdValue !== THRESHOLD) {
          onIntersection((entries[0].target as any).observerId)
          onIntersection((entries[0].target as any).thresholdValue)
        }
      },
      { threshold: thresholdOption }
    )

    for (const key of observers.keys() as any) {
      const observerRef = observers.get(key)

      observerRef.current.observerId = key
      observerRef.current.thresholdValue = key

      observer.observe(observerRef.current)
    }

    for (const key of observersThreshold.keys() as any) {
      const observerThresholdRef = observersThreshold.get(key)

      observerThresholdRef.current.thresholdValue = key

      observerCustom.observe(observerThresholdRef.current)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getObserverOptions,
  }
}

export { useIntersectionObserver }
