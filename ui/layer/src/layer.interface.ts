export type OpacityTypes = 'small' | 'large' | 'none'

export interface LayerProps {
  visible: boolean
  onClose: () => void
  scroll?: boolean
  opacity?: OpacityTypes
  center?: boolean
  top?: number
  left?: number
  privacyPolicy?: boolean
}
