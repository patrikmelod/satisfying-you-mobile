import React, { useState } from 'react';
import {View, StyleSheet,TextInput, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ onPress, iconName, iconColor, title, date }) => {

    return(
        <TouchableOpacity style={estilos.mainfilha} onPress={onPress}>
            <Icon name={iconName} size={60} color={iconColor}/>
            <Text style={estilos.titulo}>{title}</Text>
            <Text style={estilos.texto}>{date}</Text>
        </TouchableOpacity>
    )

}

const estilos = StyleSheet.create({
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
    mainfilha:{
      borderRadius:20,
      backgroundColor:'white',
      display:'flex',
      marginRight:20,
      justifyContent:'center',
      alignItems:'center',
      height:200,
      width:100,
    }
  });

  export default Card