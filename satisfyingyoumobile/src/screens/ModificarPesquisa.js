import { View, StyleSheet, Text, TextBase, TouchableOpacity } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PopUp from '../components/PopUp'
import { updateDoc, doc, collection } from '@firebase/firestore'
import { initializeFirestore } from '@firebase/firestore'
import { app } from '../firebase/config'
import { useSelector } from 'react-redux'
import { deleteDoc } from 'firebase/firestore'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green'
  }
}

const ModificarPesquisa = (props) => {

  const idRed = useSelector((state) => state.pesquisa.id)
  const nomeRed = useSelector((state) => state.pesquisa.nome)
  const dataRed = useSelector((state) => state.pesquisa.data)
  const imgRed = useSelector((state) => state.pesquisa.img)

  const [txtNome, setNome] = useState(nomeRed)
  const [data, setData] = useState(dataRed)
  const [img, setImg] = useState(imgRed)

  const [checkNome, setCheckNome] = useState(false)
  const [checkData, setCheckData] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false);

  const db = initializeFirestore(app, { experimentalForceLongPolling: true })

  const changePesquisa = (id) => {
    const pesqRef = doc(db, "pesquisas", id)

    updateDoc(pesqRef, {
      nome: '' + txtNome,
      data: '' + data,
      img: '' + img
    })
  }

  const cadastrar = () => {
    if (txtNome == "") {
      setCheckNome(true)
    } else if (data == "") {
      setCheckData(true)
    } else {
      setCheckNome(false)
      setCheckData(false)
      changePesquisa(idRed)
      props.navigation.goBack()
    }
  }

  const handleConfirm = () => {
    deleteDoc(doc(db, "pesquisas", idRed))
    setPopupVisible(false);
    props.navigation.navigate('Home')
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
              onChangeText={setNome}
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
            {checkData && <Text style={estilos.warning}>Preencha a data</Text>}
          </View>

          <View style={estilos.middleImage}>
            <Text style={estilos.texto}>Imagem</Text>
            <TextInput
              style={estilos.insertImg}
              value={img}
              onChangeText={setImg}
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
