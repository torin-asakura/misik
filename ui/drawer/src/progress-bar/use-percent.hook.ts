import { useState }  from 'react'
import { useEffect } from 'react'

const usePercent = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0)

  let drawerElement = document.documentElement

  setTimeout(() => {
    drawerElement = document.getElementById('drawer')!
  }, 100)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = drawerElement!.scrollTop
      const height = drawerElement!.scrollHeight
      const percent = (winScroll / (height - drawerElement.clientHeight)) * 100

      setScrollPercent(percent)
    }

    drawerElement.addEventListener('scroll', handleScroll, { passive: true })

    return () => drawerElement.removeEventListener('scroll', handleScroll)
  }, [drawerElement])

  return scrollPercent
}

export { usePercent }
