import { Children }  from 'react'
import { useState }  from 'react'
import { useEffect } from 'react'

const useScrollPosition = (childrenWithRefs) => {
  const [step, setStep] = useState<number>(0)

  const updatePosition = (breakpoints) => () => {
    breakpoints.forEach((bp, idx) => {
      if (window.scrollY >= bp) setStep(idx - 1)
    })
  }

  useEffect(() => {
    const breakpoints = Children.map(
      childrenWithRefs,
      (child) => child.ref.current?.getBoundingClientRect().top
    )
    breakpoints.shift()
    const handler = updatePosition(breakpoints)

    window.addEventListener('scroll', handler)

    return () => window.removeEventListener('scroll', handler)
  }, [])

  return step
}

export { useScrollPosition }
