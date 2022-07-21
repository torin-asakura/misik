export interface DrawerProps {
  active: boolean
  onClose: () => any
  scroll?: boolean
  activeProgressBar?: boolean
  heightProgressBar?: number
  display?: 'form' | 'privacy-policy' | 'relocation-description'
}
