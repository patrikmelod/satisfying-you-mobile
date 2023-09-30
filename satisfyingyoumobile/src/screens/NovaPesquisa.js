import { View, StyleSheet, Text, TextBase } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green'
  }
}

const NovaPesquisa = (props) => {

  const [pesquisa, setPesquisa] = useState([]);
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [img, setImg] = useState('')
  const [checkNome, setCheckNome] = useState(false)
  const [checkData, setCheckData] = useState(false)


  const cadastrar = (prop) => {
    
    if (nome == "") {
      setCheckNome(true)
      if(data== ""){
        setCheckData(true) }
   }
   else {
     if(data == ""){
      setCheckData(true)
      if (nome == "") {
        setCheckNome(true)
      }
     } 
     else {
      setPesquisa([...pesquisa, { nome, data, img }]);
      setNome('');
      setData('');
      setImg('');
      setCheckNome(false)
      setCheckData(false)   
      props.navigation.navigate('Modificar Pesquisa')
    }
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
           {checkNome &&   <Text style={estilos.warning}>Preencha o nome</Text>}

          </View>
          <View style={estilos.middleData}>
            <Text style={estilos.texto}>Data</Text>
            <TextInput  
              style={estilos.txtInput}
              value={data}
              onChangeText={setData}
            />
           {checkNome &&   <Text style={estilos.warning}>Preencha a data</Text>}

          </View>

          <View style={estilos.middleImage}>
            <Text style={estilos.texto}>Imagem</Text>
            <TextInput  
              style={estilos.txtInput}
              value={img}
              onChangeText={setData}
            />
          

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
  paddingTop: 60,
  flex: 0.30,
  flexDirection: 'column',
  width: '50%',
  height: 300,
},
  bottom: {
    flex: 0.3,
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
  }
})

export default NovaPesquisa
