import { zodResolver } from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CheckCircle, XCircle } from 'phosphor-react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { z } from 'zod'
import { RootStackParamList } from '../../../App'
import { Form } from '../../components/Form'
import { usePost } from '../../store/post'
import {
  Button,
  ButtonText,
  Buttons,
  Container,
  FormContainer,
  FormFields,
  Header,
  Title,
} from './styles'

const newPostSchema = z.object({
  title: z.string({ required_error: 'Escreva o título do post' }),
  body: z.string({ required_error: 'O conteúdo não pode ser vazio' }),
})

type NewPostData = z.infer<typeof newPostSchema>
type NewPostScreenProps = NativeStackScreenProps<RootStackParamList, 'NewPost'>

export default function NewPostScreen({ navigation }: NewPostScreenProps) {
  const { insertPost } = usePost()
  const newPostForm = useForm<NewPostData>({
    resolver: zodResolver(newPostSchema),
  })
  const { handleSubmit } = newPostForm

  function handleStop() {
    Alert.alert('Sair', 'Deseja descartar esse post?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          navigation.goBack()
        },
      },
    ])

    return true
  }

  async function handleNewPost(data: NewPostData) {
    await insertPost({
      body: data.body,
      title: data.title,
      userId: 1,
    })
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header>
        <Title>Nova Postagem</Title>
      </Header>

      <FormProvider {...newPostForm}>
        <FormContainer>
          <FormFields>
            <Form.Field>
              <Form.Label>Título:</Form.Label>
              <Form.Input name="title" />
              <Form.ErrorMessage field="title" />
            </Form.Field>

            <Form.Field>
              <Form.Label>Conteúdo:</Form.Label>
              <Form.Input name="body" />
              <Form.ErrorMessage field="body" />
            </Form.Field>
          </FormFields>

          <Buttons>
            <Button color="red" onPress={handleStop}>
              <XCircle color="#fff" />
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button color="green" onPress={handleSubmit(handleNewPost)}>
              <CheckCircle color="#fff" />
              <ButtonText>Confirmar</ButtonText>
            </Button>
          </Buttons>
        </FormContainer>
      </FormProvider>
    </Container>
  )
}
