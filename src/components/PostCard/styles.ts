import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  position: relative;
  background-color: #2b2a2a;
  height: 120px;
  margin-bottom: 16px;
  border-radius: 10px;
`
export const PostContent = styled.View`
  padding: 32px 16px;
  flex: 1;
  gap: 8px;
`

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`

export const Body = styled.Text`
  font-size: 10px;
  color: #a9a9a9;
`

export const ShowPostButton = styled.TouchableOpacity`
  background-color: #4ade80;
  height: 120px;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
`
