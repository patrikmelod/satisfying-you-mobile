import React, { useState } from 'react';
import { View, Text, Modal,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

const PopUp = (props) => {
 
  
  return (
   <View style={estilos.view}>
           <Text style={estilos.texto}>Tem certeza de apagar essa pesquisa?</Text>
           <View style={estilos.viewButtons}>
              <Button mode="contained" buttonColor='#FF8383'style={estilos.button} >
                SIM
              </Button>
              <Button mode="contained" buttonColor='#3F92C5'style={estilos.button}>
                CANCELAR
              </Button>
           </View>
      </View>
  );
  
}
 
const estilos = StyleSheet.create({
  view: {
    height: 150,
    width: 300,
    flexDIRECTION: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B1F5C',
    
    justifyContent: 'space-evenly',
  }, 
  texto: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold',
    textAlign: 'center',
  },
  viewButtons: {
    height: 50,
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  button:{
    height: 50,
    width: 125,
    borderRadius:0,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
}); 
  export default PopUp;
