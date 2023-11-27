import styled from 'styled-components/native'
import { ButtonProps } from '.'

interface ButtonTextProps {
  size: 'sm' | 'lg' | 'md'
  variant: 'primary' | 'secondary' | 'red' | 'transparent'
}

const variantsSizeButton = {
  sm: '16',
  md: '20',
  lg: '28',
}

const variantsPaddings = {
  sm: '12px 16px',
  md: '12px 24px',
  lg: '20px 26px',
}

const variantsBackground = {
  primary: '#8b5cf6',
  secondary: '#ddd6fe',
  red: '#ef4444',
  transparent: 'transparent',
}

const variantsColorButton = {
  primary: '#fff',
  secondary: '#8B5CF6',
  red: '#fff',
  transparent: '#fff',
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ variant }) => variantsBackground[variant]};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  padding: ${({ size }) => variantsPaddings[size]};
  width: 120px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: ${({ rounded }) => (rounded ? '999px' : '4px')};
  border: ${({ variant }) =>
    variant === 'transparent' ? '2px solid #fff' : ''};
  flex-direction: row;
`

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ variant }) => variantsColorButton[variant]};
  font-weight: bold;
  font-size: 16px;
`
