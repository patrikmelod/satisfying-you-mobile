/* eslint-disable prettier/prettier */
import {View, StyleSheet,TextInput, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green',
  },
};

const AcoesPesquisa = props => {

  const goToColeta = () => {
    props.navigation.navigate("Coleta")
  }

  const goToModificarPesquisa = () => {
    props.navigation.navigate("Modificar Pesquisa")
  }

  const goToRelatorio = () => {
    props.navigation.navigate("Relatorio")
  }

  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>

        <View style={estilos.main}>

          <TouchableOpacity style={estilos.mainfilha} onPress={goToModificarPesquisa}>
            <Icon name="file-document-edit" size={60} color="white"/>
            <Text style={estilos.texto}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.mainfilha} onPress={goToColeta}>
            <Icon name="checkbox-multiple-outline" size={60} color="white"/>
            <Text style={estilos.texto}>Coletar dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.mainfilha} onPress={goToRelatorio}>
            <Icon name="chart-donut" size={60} color="white"/>
            <Text style={estilos.texto}>Relatório</Text>
          </TouchableOpacity>

        </View>


        </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    padding: 30,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height:'100%',

  },

  texto: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'AveriaLibre-Bold',
  },


  main:{
    display:'flex',
    flexDirection:'row',
  },
  mainfilha:{
    borderRadius:20,
    backgroundColor: '#312464',

    display:'flex',
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',
    height:200,
    width:100,
  },

});

export default AcoesPesquisa;
