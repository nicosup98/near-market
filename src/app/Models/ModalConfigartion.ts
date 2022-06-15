export interface ModalConfiguration{
    title: string
    id: string
    isStatic: boolean
    isCentered: boolean
    size: 'small' | 'default' | 'large' | 'extra large',
    disableOk: boolean
  }