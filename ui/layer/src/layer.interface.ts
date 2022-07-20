export type OpacityTypes = 'small' | 'large' | 'none'
export type DisplayTypes = 'form' | 'privacy-policy' | 'relocation-description'

export interface LayerProps {
  visible: boolean
  onClose: () => void
  scroll?: boolean
  opacity?: OpacityTypes
  center?: boolean
  top?: number
  left?: number
  display?: DisplayTypes
}
