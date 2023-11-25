import { View, StyleSheet, Text } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { sendPasswordResetEmail } from '@firebase/auth';
import { auth_mod } from '../firebase/config';

const RecuperarSenha = props => {
  const [txtEmail, setEmail] = useState('');
  const [checkEmail, setCheck] = useState(false);

  const recuperar = () => {
    sendPasswordResetEmail(auth_mod, txtEmail)
      .then(info => {
        props.navigation.goBack();
        setCheck(false);
      })
      .catch(error => {
        setCheck(true);
      });
  };

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View style={estilos.top}>
          <View>
            <Text style={estilos.texto}>Email</Text>
            <TextInput
              label="Email"
              value={txtEmail}
              onChangeText={setEmail}
              placeholder="Digite seu email"
            />
          </View>
          {checkEmail && (
            <Text style={estilos.textoErro}>E-mail parece ser inválido</Text>
          )}
        </View>
        <View style={estilos.bottom}>
          <Button
            mode="contained"
            buttonColor="#37BD6D"
            onPress={recuperar}
            style={estilos.botao}>
            Recuperar
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    padding: 30,
    flex: 1,
    flexDIRECTION: 'column',
    justifyContent: 'flex-start',
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
  },
  top: {
    paddingVertical: 190,
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  botao: {
    borderRadius: 0,
  },
});

export default RecuperarSenha;