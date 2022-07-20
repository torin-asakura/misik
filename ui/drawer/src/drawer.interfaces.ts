export interface DrawerProps {
  active: boolean
  onClose: () => any
  scroll?: boolean
  display?: 'form' | 'privacy-policy' | 'relocation-description'
}
