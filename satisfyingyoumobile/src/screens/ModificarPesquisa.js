import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { PaperProvider, Button } from 'react-native-paper'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PopUp from '../components/PopUp'
import { updateDoc, doc } from '@firebase/firestore'
import { initializeFirestore } from '@firebase/firestore'
import { app, storage } from '../firebase/config'
import { useSelector } from 'react-redux'
import { deleteDoc } from 'firebase/firestore'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage'

const ModificarPesquisa = (props) => {

  const idRed = useSelector((state) => state.pesquisa.id)
  const nomeRed = useSelector((state) => state.pesquisa.nome)
  const dataRed = useSelector((state) => state.pesquisa.data)
  const imgRed = useSelector((state) => state.pesquisa.img)

  const [txtNome, setNome] = useState(nomeRed)
  const [data, setData] = useState(dataRed)
  const [img, setImg] = useState()
  const [imgUri, setImgUri] = useState(imgRed)

  const [checkNome, setCheckNome] = useState(false)
  const [checkData, setCheckData] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false);

  const db = initializeFirestore(app, { experimentalForceLongPolling: true })

  const capturarImg = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        setImgUri(result.assets[0].uri)
        setImg(result.assets[0])
      })
  }

  const selecionarImg = () => {
    launchImageLibrary()
      .then((result) => {
        setImgUri(result.assets[0].uri)
        setImg(result.assets[0])
      })
  }

  const cadastrar = async () => {
    if (txtNome == "") {
      setCheckNome(true)
    } else if (data == "") {
      setCheckData(true)
    } else {
      setCheckNome(false)
      setCheckData(false)

      if (img == null) {
        const pesqRef = doc(db, "pesquisas", idRed)

        updateDoc(pesqRef, {
          nome: '' + txtNome,
          data: '' + data,
          img: '' + imgRed
        })
      } else {
        const imageRefAnt = ref(storage, nomeRed + '.jpeg')
        const imageRef = ref(storage, idRed + '.jpeg')
        const file = await fetch(img.uri)
        const blob = await file.blob()

        deleteObject(imageRefAnt).then(() =>
          uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
            .then(() =>
              getDownloadURL(imageRef)
                .then((url) => {
                  const pesqRef = doc(db, "pesquisas", idRed)

                  updateDoc(pesqRef, {
                    nome: '' + txtNome,
                    data: '' + data,
                    img: '' + url
                  })
                })
            )
        ).catch(() => console.log("Nome já está renomeado com ID"))
      }
      props.navigation.goBack()
      props.navigation.goBack()
    }
  }

  const handleConfirm = () => {
    const imageRef = ref(storage, idRed + '.jpeg')
    deleteObject(imageRef).then(() => deleteDoc(doc(db, "pesquisas", idRed)))
    setPopupVisible(false);
    props.navigation.goBack()
    props.navigation.goBack()
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
              <Icon name="event" size={27} color='#878787' />
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
            {
              imgUri ?
                <Image source={{ uri: imgUri }} style={{ width: 130, height: 130 }} />
                :
                null
            }
            <Button mode="contained" buttonColor='#1F0954' onPress={capturarImg} style={estilos.botaoImg}>
              Capturar imagem
            </Button>
            <Button mode="contained" buttonColor='#1F0954' onPress={selecionarImg} style={estilos.botaoImg}>
              Selecionar imagem
            </Button>
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
    </PaperProvider >
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
    paddingTop: 50,
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
  txtInputDdata: {
    flex: 1,
    fontSize: 28,
    backgroundColor: '#fff'
  },
  middleImage: {
    paddingTop: 30,
    flex: 1,
    gap: 10,
    flexDirection: 'column',
  },
  botoes: {
    flex: 0.30,
    width: 100,
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'space-between',
  },
  bottom: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  warning: {
    fontSize: 18,
    color: "#FD7979",
  },
  txtInput: {
    fontSize: 28,
    backgroundColor: '#fff'
  },
  botao: {
    width: '82%',
    height: 50,
    borderRadius: 0,
    textAlign: 'center',
    justifyContent: 'center'
  },
  botaoImg: {
    height: 40,
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