import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import NovaConta from "./src/screens/NovaConta"
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Home from "./src/screens/Home"
import AcoesPesquisa from "./src/screens/AcoesPesquisa"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: '#FFFFFF', headerStyle: {backgroundColor: '#1F0954'}}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Nova Conta" component={NovaConta} />
        <Stack.Screen name="Recuperação de Senha" component={RecuperarSenha} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ações Pesquisa" component={AcoesPesquisa} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App