import { Canvas }    from '@react-three/fiber'

import { ReactNode } from 'react'

export interface CanvasInnerProps {
  style?: React.CSSProperties
  children?: ReactNode
  camera?: Parameters<typeof Canvas>[0]['camera']
}
