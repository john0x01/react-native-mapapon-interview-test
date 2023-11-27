import { DotsThree } from 'phosphor-react-native'
import { Body, Container, PostContent, ShowPostButton, Title } from './styles'

interface PostCardProps {
  id: number
  userId: number
  title: string
  body: string
  handleClick: (id: string) => void
}

export function PostCard({
  id,
  userId,
  title,
  body,
  handleClick,
}: PostCardProps) {
  function maxLengthText(text: string, maxLength: number): string {
    return text.length > maxLength
      ? text.substring(0, maxLength - 3) + '...'
      : text
  }

  return (
    <Container>
      <PostContent>
        <Title>{maxLengthText(title, 53)}</Title>
        <Body>{maxLengthText(body, 153)}</Body>
      </PostContent>
      <ShowPostButton onPress={() => handleClick(String(id))}>
        <DotsThree size={32} />
      </ShowPostButton>
    </Container>
  )
}
