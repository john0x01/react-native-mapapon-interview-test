import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, ButtonText } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'red' | 'transparent'
  size: 'sm' | 'md' | 'lg'
  rounded?: boolean
  loading?: boolean
}

export function Button({
  size = 'md',
  variant = 'primary',
  children,
  onPress,
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} size={size} onPress={onPress}>
      <ButtonText variant={variant} size={size}>
        {children}
      </ButtonText>
    </ButtonContainer>
  )
}
