import { View, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';

const Agradecimento = (props) => {

  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    const timerTimeout = setTimeout(() => {
      clearInterval(timerInterval);
      props.navigation.goBack();
    }, 3000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(timerTimeout);
    };
  }, [props.navigation]);

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View>
          <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
          <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
          <Text style={estilos.txtTimer}>{`Redirecionando em ${timer} segundos`}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Bold',
    textAlign: 'center',
    marginVertical: 5
  },
  txtTimer: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    marginTop: 50
  }
});

export default Agradecimento;