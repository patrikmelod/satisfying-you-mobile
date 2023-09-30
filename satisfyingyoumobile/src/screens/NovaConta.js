import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green'
  }
}

const NovaConta = (props) => {

  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtConfirmaSenha, setConfirmaSenha] = useState('')
  const [checkText, setCheckText] = useState(false)

  const cadastrar = () => {
    if (txtConfirmaSenha != txtSenha || txtConfirmaSenha == "") {
      setCheckText(true)
    } else {
      setCheckText(false)
      props.navigation.goBack()
    }
  }

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View style={estilos.top}>
          <TextInput
            label="Email"
            value={txtEmail}
            onChangeText={setEmail}
            placeholder='Digite seu email'
          />
          <TextInput
            label="Senha"
            value={txtSenha}
            onChangeText={setSenha}
            placeholder='Digite sua senha'
          />
          <TextInput
            label="Repetir Senha"
            value={txtConfirmaSenha}
            onChangeText={setConfirmaSenha}
            placeholder='Confirme sua senha'
          />
        </View>

        <View style={estilos.middle}>
          {checkText && (
            <Text style={estilos.texto}>
              O campo repetir senha difere da senha
            </Text>
          )}
        </View>

        <View style={estilos.bottom}>
          <Button mode="contained" buttonColor='#37BD6D' onPress={cadastrar}>
            Cadastrar
          </Button>
        </View>
      </View>
    </PaperProvider>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    padding: 30,
    flex: 1,
    flexDIRECTION: 'column',
    justifyContent: 'space-between'
  },
  texto: {
    fontSize: 15,
    color: '#DC143C',
    fontFamily: 'AveriaLibre-Bold'
  },
  top: {
    paddingTop: 100,
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  middle: {
    paddingTop: 10,
    paddingBottom: 200,
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  bottom: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default NovaConta
