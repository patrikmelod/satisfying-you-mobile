import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import NovaConta from "./src/screens/NovaConta"
import RecuperarSenha from "./src/screens/RecuperarSenha"
import AcoesPesquisa from "./src/screens/AcoesPesquisa"
import Home from "./src/screens/Home"
import Agradecimento from "./src/screens/Agradecimento"
import Coleta from "./src/screens/Coleta"
import ModificarPesquisa from "./src/screens/ModificarPesquisa"
import NovaPesquisa from "./src/screens/NovaPesquisa"
import Relatório from "./src/screens/Relatorio"
import Drawer from "./src/screens/Drawer"
import { Provider } from "react-redux"
import { store } from "./redux/store"


const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor: '#FFFFFF', headerStyle: { backgroundColor: '#1F0954' } }}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Nova Conta" component={NovaConta} />
          <Stack.Screen name="Recuperação de Senha" component={RecuperarSenha} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
          <Stack.Screen name="Ações Pesquisa" component={AcoesPesquisa} />
          <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} />
          <Stack.Screen name="Modificar Pesquisa" component={ModificarPesquisa} />
          <Stack.Screen name="Coleta" component={Coleta} />
          <Stack.Screen name="Agradecimento" component={Agradecimento} />
          <Stack.Screen name="Relatorio" component={Relatório} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App