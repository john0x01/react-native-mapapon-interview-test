import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { RootStackParamList } from '../../../App'
import { PostContent } from '../../components/PostCard/styles'
import { usePost } from '../../store/post'
import { Container, Line, Title } from './styles'

type PostScreenProps = NativeStackScreenProps<RootStackParamList, 'Post'>

type Params = {
  id: string
}

export default function PostScreen({ route }: PostScreenProps) {
  const { setCurrentPost, currentPost } = usePost()
  const { id } = route.params as Params
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setCurrentPost(Number(id))
    setIsLoading(false)
  }, [])

  if (isLoading || !currentPost) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    )
  }

  return (
    <Container>
      <Title>{currentPost.title}</Title>
      <PostContent>
        <Line>{currentPost.body}</Line>
      </PostContent>
    </Container>
  )
}
