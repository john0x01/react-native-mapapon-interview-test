import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './src/app/Home'
import PostScreen from './src/app/Post'
import WelcomeScreen from './src/app/Welcome'
import NewPostScreen from './src/app/new-post'

export type RootStackParamList = {
  Welcome: undefined
  Home: undefined
  NewPost: undefined
  Post: { id: string } | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
