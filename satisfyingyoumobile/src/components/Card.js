import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Card = ({ onPress, url, title, date }) => {
  return (
    <TouchableOpacity style={estilos.mainfilha} onPress={onPress}>
      <Image source={{ uri: url }} style={{ width: 80, height: 80 }} />
      <Text style={estilos.titulo}>{title}</Text>
      <Text style={estilos.texto}>{date}</Text>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 16,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Bold',
  },
  texto: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'AveriaLibre-Bold',
  },
  mainfilha: {
    borderRadius: 20,
    backgroundColor: 'white',
    display: 'flex',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 100,
  }
});

export default Card