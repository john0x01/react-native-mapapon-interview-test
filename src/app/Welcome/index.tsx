import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ImageBackground } from 'react-native'
import { RootStackParamList } from '../../../App'
import { Button } from '../../components/Button'
import { ContentArea, Title } from './styles'

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <ImageBackground
      source={require('../../../assets/welcome-bg.jpg')}
      style={{
        flex: 1,
      }}
    >
      <ContentArea>
        <Title>Bem vindo de volta!</Title>
        <Button
          variant="transparent"
          size="md"
          onPress={() => {
            console.log('Press')
            navigation.navigate('Home')
          }}
        >
          Entrar
        </Button>
      </ContentArea>
    </ImageBackground>
  )
}
