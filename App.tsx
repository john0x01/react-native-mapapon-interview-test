import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './src/app/Home'
import WelcomeScreen from './src/app/Welcome'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
