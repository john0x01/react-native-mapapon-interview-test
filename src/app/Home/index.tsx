import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Plus } from 'phosphor-react-native'
import { FlatList } from 'react-native'
import { RootStackParamList } from '../../../App'
import { PostCard } from '../../components/PostCard'
import { usePost } from '../../store/post'
import { AddButton, Container, HomeHeader, Title } from './styles'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { posts } = usePost()

  function handleClick(id: string) {
    navigation.navigate('Post', { id })
  }

  return (
    <Container>
      <HomeHeader>
        <Title>Home</Title>
        <AddButton onPress={() => navigation.navigate('NewPost')}>
          <Plus />
        </AddButton>
      </HomeHeader>
      <FlatList
        data={posts || []}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            title={item.title}
            body={item.body}
            userId={item.userId}
            handleClick={handleClick}
          />
        )}
      />
    </Container>
  )
}
