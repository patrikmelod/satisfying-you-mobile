/* eslint-disable prettier/prettier */
import {View, StyleSheet,TextInput, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card'
import { useEffect, useState } from 'react';
import { collection, initializeFirestore, onSnapshot, query } from '@firebase/firestore';
import { app } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../../redux/pesquisaSlice';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green',
  },
};

const Home = props => {

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [img, setImg] = useState('')

  const dispatch = useDispatch()

  const [listPesquisas, setListaPesquisa] = useState()
  
  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisas")

  useEffect(() => {
    const q = query(pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas = []
      snapshot.forEach((doc) => {
        pesquisas.push({
          id: doc.id,
          ...doc.data() 
        })
      })

      setListaPesquisa(pesquisas)
    })
  }, [])

  const goToPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  };

  const goToAcoesPesquisa = () => {
    dispatch(reducerSetPesquisa({
      nome: nome,
      data: data,
      img: img
    })) 
    props.navigation.navigate("Ações Pesquisa")
  }

  const itemPesquisa = ({item}) => {
    return(
      <Card onPress={goToAcoesPesquisa} 
      iconName={'devices'} 
      iconColor={'brown'} 
      title={item.nome} 
      date={item.data}/>
    )
  }

  let numColumns=100;

  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>

        <TouchableOpacity style={estilos.searchBar}>
          <Icon name="search" size={36} />
          <TextInput style={estilos.texto} placeholder="Insira o termo de busca..." />
        </TouchableOpacity>

        <View style={estilos.main}>
          <FlatList data={listPesquisas} renderItem={itemPesquisa} keyExtractor={pesquisa => pesquisa.id} style={estilos.main} numColumns={numColumns}/>
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
