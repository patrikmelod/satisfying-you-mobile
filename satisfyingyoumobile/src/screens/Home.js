/* eslint-disable prettier/prettier */
import {View, StyleSheet,TextInput, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green',
  },
};

const Home = props => {

  const goToPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  };

  const goToAcoesPesquisa = () => {
    props.navigation.navigate("Ações Pesquisa")
  }


  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>


        <TouchableOpacity style={estilos.searchBar}>
          <Icon name="search" size={36} />
          <TextInput style={estilos.texto} placeholder="Insira o termo de busca..." />
        </TouchableOpacity>

        <View style={estilos.main}>
          <Card onPress={goToAcoesPesquisa} iconName={'devices'} iconColor={'brown'} title={'SECOMP 2023'} date={'10/10/2023'}/>
          <Card onPress={goToAcoesPesquisa} iconName={'people'} iconColor={'black'} title={'UBUNTU 2022'} date={'05/06/2022'}/>
          <Card onPress={goToAcoesPesquisa} iconName={'woman'} iconColor={'red'} title={'MENINAS CPU'} date={'01/04/2022'}/>
        </View>


          <Button
            mode="contained"
            buttonColor="#37BD6D"
            onPress={goToPesquisa} style={estilos.botao}>
            NOVA PESQUISA
          </Button>
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

  titulo:{
    fontSize:16,
    color:'#3F92C5',
    fontFamily: 'AveriaLibre-Bold',
  },
  texto: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'AveriaLibre-Bold',
  },


  main:{
    display:'flex',
    flexDirection:'row',
  },
  mainfilha:{
    borderRadius:20,
    backgroundColor:'white',
    display:'flex',
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',
    height:200,
    width:100,
  },

  searchBar:{
    backgroundColor: 'white',
    height: 36,
    justifyContent:'flex-start',
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    textAlign: 'center'
  },

  botao: {
    borderRadius: 0,
  } 
});

export default Home;
