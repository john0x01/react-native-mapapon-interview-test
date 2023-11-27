import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { RootStackParamList } from '../../../App'
import { Container } from './styles'

type PostScreenProps = NativeStackScreenProps<RootStackParamList, 'Post'>

type Params = {
  id: string
}

export default function PostScreen({ route }: PostScreenProps) {
  const { id } = route.params as Params

  return (
    <Container>
      <Text>Post {id}</Text>
    </Container>
  )
}
