import { View, StyleSheet, Text, TextBase, TouchableOpacity } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PopUp from '../components/PopUp'
import { updateDoc, doc, collection } from '@firebase/firestore'
import { initializeFirestore } from '@firebase/firestore'
import { app } from '../firebase/config'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green'
  }
}

const ModificarPesquisa = (props) => {

  const [txtNome, setNome] = useState('')
  const [data, setData] = useState('')
  const [img, setImg] = useState('')
  const [checkNome, setCheckNome] = useState(props.checkNome)
  const [checkData, setCheckData] = useState(props.checkData)
  const [popupVisible, setPopupVisible] = useState(false);

  const cadastrar = (props) => {
    if (txtNome == "") {
      setCheckNome(true)
    } else {
      if (data == "") {
        setCheckData(true)
      } else {
        changePesquisa(id)
        props.navigation.goBack()
        setCheckNome(false)
        setCheckData(false)
      }
    }
  }

  // const gotoApagar = () => {
  //   setPopUp(!popup)
  // }

  useEffect(() => {
    setNome('Carnaval 2024');
    setData('22/08/2023');
    setImg(<Icon name="mood" size={60} color='#FFFFFF' />)
  }, []);


  const handleConfirm = () => {
    // AQUI ADICIONAR DEPOIS O QUE FAZER SE CONFIRMAR (NO CASO SERIA PARA REMOVER O CARD)
    setPopupVisible(false);
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View style={estilos.top}>
          <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput
              style={estilos.txtInput}
              value={txtNome}
            />
            {checkNome && <Text style={estilos.warning}>Preencha o nome</Text>}

          </View>
          <View style={estilos.middleData}>
            <Text style={estilos.texto}>Data</Text>
            <View style={estilos.txtInputData}>
              <Icon name="event" size={27} color='#878787' style={estilos.iconData} />
              <TextInput
                style={estilos.txtInputDdata}
                value={data}
                onChangeText={setData}
              />
            </View>
            {checkNome && <Text style={estilos.warning}>Preencha o nome</Text>}
          </View>

          <View style={estilos.middleImage}>
            <Text style={estilos.texto}>Imagem</Text>
            <TextInput
              style={estilos.insertImg}
              value={img}
              onChangeText={setData}
            />
          </View>

        </View>


        <View style={estilos.bottom}>
          <Button mode="contained" fontSize='28' buttonColor='#37BD6D' onPress={cadastrar} style={estilos.botao}>
            SALVAR
          </Button>

          <TouchableOpacity style={estilos.trash} onPress={() => setPopupVisible(true)}>
            <Icon name="delete" size={27} color='#FFFFFF' />
            <Text style={estilos.trashText}>Apagar</Text>
          </TouchableOpacity >

        </View>
        <PopUp visible={popupVisible}
          onConfirm={handleConfirm}
          onClose={handleClose}></PopUp>
      </View>


    </PaperProvider>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    padding: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  texto: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold'
  },
  top: {
    paddingTop: 80,
    flex: 0.8,
    flexDirection: 'column',
  },
  middleData: {
    paddingTop: 20,
    flex: 0.30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txtInputData: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center'
  },
  iconData: {
    //paddingTop: 20,
    //paddingLeft: 10,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  txtInputDdata: {
    flex: 1,
    fontSize: 28,
    backgroundColor: '#fff'
  },

  middleImage: {
    paddingTop: 60,
    flex: 0.30,
    flexDirection: 'column',
    width: '50%',
    height: 300,
  },
  bottom: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  warning: {
    fontSize: 18,
    color: "#FD7979",
  },
  txtInput: {
    fontSize: 28,
    color: '#3F92C5',
    backgroundColor: '#fff'
  },

  botao: {
    width: '82%',
    height: 50,
    borderRadius: 0,
    textAlign: 'center',
    justifyContent: 'center'
  },

  trash: {
    width: '18%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  trashText: {
    color: 'white',
  },
  insertImg: {
    height: 90,
    backgroundColor: '#fff'
  },

  modalPopUp: {
    justifyContent: 'center',
    alignItems: 'center,',
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },


})

export default ModificarPesquisa
