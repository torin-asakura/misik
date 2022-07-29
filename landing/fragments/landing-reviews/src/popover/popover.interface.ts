export interface PopoverProps {
  visible: number | null
  setVisible: (newState: number | null) => any
  reviews: {
    RU: any[]
    EN: any[]
  }
  language: string
}
