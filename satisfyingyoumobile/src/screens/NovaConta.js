import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config'

const NovaConta = (props) => {

  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtConfirmaSenha, setConfirmaSenha] = useState('')
  const [checkText, setCheckText] = useState(false)

  const cadastrar = () => {
    if (txtConfirmaSenha != txtSenha) {
      setCheckText(true)
    } else {
      createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
        .then((userCredential) => {
          setCheckText(false)
          props.navigation.goBack()
        })
        .catch((error) => {
          setCheckText(true)
        })
    }
  }

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View>
          <View style={estilos.top}>
            <View>
              <Text style={estilos.texto}>Email</Text>
              <TextInput
                label="Email"
                value={txtEmail}
                onChangeText={setEmail}
                placeholder='Digite seu email'
              />
            </View>
            <View>
              <Text style={estilos.texto}>Senha</Text>
              <TextInput
                label="Senha"
                value={txtSenha}
                onChangeText={setSenha}
                placeholder='Digite sua senha'
                secureTextEntry={true}
              />
            </View>
            <View>
              <Text style={estilos.texto}>Repetir Senha</Text>
              <TextInput
                label="Repetir Senha"
                value={txtConfirmaSenha}
                onChangeText={setConfirmaSenha}
                placeholder='Confirme sua senha'
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={estilos.middle}>
            {checkText && (
              <Text style={estilos.textoErro}>
                O campo repetir senha difere da senha
              </Text>
            )}
          </View>
        </View>
        <View style={estilos.bottom}>
          <Button mode="contained" buttonColor='#37BD6D' onPress={cadastrar} style={estilos.botao}>
            CADASTRAR
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
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Light',
  },
  textoErro: {
    fontSize: 15,
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Bold',
    marginTop: 5
  },
  top: {
    paddingTop: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 15
  },
  middle: {
    paddingBottom: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  bottom: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  botao: {
    borderRadius: 0,
  }
})

export default NovaConta