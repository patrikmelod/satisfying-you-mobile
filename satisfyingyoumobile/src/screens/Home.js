/* eslint-disable prettier/prettier */
import {View, StyleSheet,TextInput, Text} from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

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


  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>


        <View style={estilos.searchBar}>
          <Icon name="search" size={36} />
          <TextInput style={estilos.texto} placeholder="Insira o termo de busca..." />
        </View>

        <View style={estilos.main}>
          <View style={estilos.mainfilha}>
            <Icon name="devices" size={60} color="brown"/>
            <Text style={estilos.titulo}>SECOMP 2023</Text>
            <Text style={estilos.texto}>10/10/2023</Text>
          </View>
          <View style={estilos.mainfilha}>
            <Icon name="people" size={60} color="black"/>
            <Text style={estilos.titulo}>UBUNTU 2022</Text>
            <Text style={estilos.texto}>05/06/2022</Text>
          </View>
          <View style={estilos.mainfilha}>
            <Icon name="woman" size={60} color="red"/>
            <Text style={estilos.titulo}>MENINAS CPU</Text>
            <Text style={estilos.texto}>01/04/2022</Text>
          </View>
          <View style={estilos.mainfilha}>
            <Text>SECOMP 2023</Text>
          </View>
        </View>


          <Button
            mode="contained"
            buttonColor="#228B22"
            onPress={goToPesquisa}>
            NOVA PESQUISA
          </Button>
        </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#4B0082',
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

  },


});

export default Home;
