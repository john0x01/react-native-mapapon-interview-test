import styled from 'styled-components/native'

type ButtonProps = {
  color: 'red' | 'green'
}

export const Container = styled.View`
  gap: 48px;
  flex: 1;
  background-color: #212121;
  padding: 32px;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`

export const FormFields = styled.View`
  gap: 8px;
`

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const Buttons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 49%;
  background-color: ${({ color }) =>
    color === 'green' ? '#4ade80' : '#ef4444'};
  color: #fff;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 24px 12px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`
