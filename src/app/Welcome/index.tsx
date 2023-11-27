import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import { Button } from '../../components/Button'
import { usePost } from '../../store/post'
import { Container, Title } from './styles'

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const { fetchPosts } = usePost()

  return (
    <Container>
      <Title>Bem vindo de volta!</Title>
      <Button
        variant="transparent"
        size="md"
        onPress={async () => {
          await fetchPosts()
          navigation.navigate('Home')
        }}
      >
        Entrar
      </Button>
    </Container>
  )
}
