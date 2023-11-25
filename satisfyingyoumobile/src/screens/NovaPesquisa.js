import { View, StyleSheet, Text, Image, KeyboardAvoidingView } from 'react-native'
import { PaperProvider, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'
import { collection, initializeFirestore, addDoc } from 'firebase/firestore'
import { app, storage } from '../firebase/config'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'

const NovaPesquisa = (props) => {

  const [pesquisa, setPesquisa] = useState([]);
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [img, setImg] = useState()
  const [imgUri, setImgUri] = useState('')
  const [checkNome, setCheckNome] = useState(false)
  const [checkData, setCheckData] = useState(false)
  const [checkImg, setCheckImg] = useState(false)

  const db = initializeFirestore(app, { experimentalForceLongPolling: true })
  const pesquisaCollection = collection(db, "pesquisas")

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
    setCheckNome(false)
    setCheckData(false)
    setCheckImg(false)

    if (nome == "") {
      setCheckNome(true)
    }

    if (data == "") {
      setCheckData(true)
    }

    if (img == null) {
      setCheckImg(true)
    }

    if (nome != "" && data != "" && img != null) {
      const imageRef = ref(storage, nome + '.jpeg')
      const file = await fetch(img.uri)
      const blob = await file.blob()
      uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
        .then(() =>
          getDownloadURL(imageRef)
            .then((url) => {

              const docPesquisa = {
                nome: nome,
                data: data,
                img: url,
                pessimo: 0,
                ruim: 0,
                neutro: 0,
                bom: 0,
                excelente: 0,
                imgRef: img
              }

              addDoc(pesquisaCollection, docPesquisa)
                .then((docRef) => {
                  setPesquisa([...pesquisa, { nome, data, img }]);
                  setNome('');
                  setData('');
                  setImg();
                  setCheckNome(false)
                  setCheckData(false)
                  props.navigation.goBack()
                })
                .catch((error) => {
                })
            })
        )
    }
  }

  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View style={estilos.top}>
          <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput
              style={estilos.txtInput}
              value={nome}
              onChangeText={setNome}
            />
            {checkNome && <Text style={estilos.warning}>Preencha o nome</Text>}
          </View>
          <View style={estilos.middleData}>
            <Text style={estilos.texto}>Data</Text>
            <TextInput
              style={estilos.txtInput}
              value={data}
              onChangeText={setData}
            />
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
            {checkImg && <Text style={estilos.warning}>Escolha uma imagem</Text>}
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
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold'
  },
  textoImg: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold',
  },
  top: {
    paddingTop: 80,
    flex: 0.6,
    flexDirection: 'column',
  },
  middleData: {
    paddingTop: 20,
    flex: 0.30,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  middleImage: {
    paddingTop: 80,
    flex: 1,
    gap: 10,
    flexDirection: 'column',
  },
  middleImageBot: {
    backgroundColor: '#FFFFF',
    flex: 1,
    paddingTop: 80,
    flexDirection: 'row',
    gap: 70
  },
  bottom: {
    flex: 0.10,
    flexDirection: 'column',
  },
  warning: {
    fontSize: 18,
    color: "#FD7979",
  },
  txtInput: {
    fontSize: 28,
    color: "red",
    backgroundColor: '#fff'
  },
  botao: {
    borderRadius: 0,
  },
  botaoImg: {
    height: 40,
    borderRadius: 0,
    textAlign: 'center',
    justifyContent: 'center'
  }
})

export default NovaPesquisa
