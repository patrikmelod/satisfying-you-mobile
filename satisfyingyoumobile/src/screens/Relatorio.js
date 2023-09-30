import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const Relatório = () => {


    return(
        <PaperProvider>
            <View style={estilos.view}>
                
                {/* <View style={estilos.topbar}>
                    <TouchableOpacity>
                        <Icon name="arrow-back" size={50} color='#573FBA'/>
                    </TouchableOpacity>
                    <Text style={estilos.titulo}>Relatório</Text>
                </View> */}
                

                <View style={estilos.conteudo}>
                    <View>
                        <Image style={{ width: 200, height: 200 }} source={{uri:'https://i.imgur.com/WrXatDn.png'}}/>
                    </View>

                    <View style={estilos.legenda}> 
                        <View style={estilos.feedbackLegenda}>
                            <View style={{ width: 20, height: 20, backgroundColor: '#25BC22'}} ></View>
                            <Text style={estilos.texto}>Excelente</Text>
                        </View>

                        <View style={estilos.feedbackLegenda}>
                            <View style={{ width: 20, height: 20, backgroundColor: '#37BD6D'}}></View>
                            <Text style={estilos.texto}>Bom</Text>
                        </View>

                        <View style={estilos.feedbackLegenda}>
                            <View style={{ width: 20, height: 20, backgroundColor: '#FFC632'}}></View>
                            <Text style={estilos.texto}>Neutro</Text>
                        </View>

                        <View  style={estilos.feedbackLegenda}>
                            <View style={{ width: 20, height: 20, backgroundColor: '#FF360A'}}></View>
                            <Text style={estilos.texto}>Ruim</Text>
                        </View>

                        <View style={estilos.feedbackLegenda}>
                            <View style={{ width: 20, height: 20, backgroundColor: '#D71616'}}></View>
                            <Text style={estilos.texto}>Pessimo</Text>
                        </View>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
    },
    topbar: {
        backgroundColor: 'rgba(0,0, 0, .2)',
        width: '100%',
        height: '9%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    conteudo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        marginTop: 100
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Bold',
        marginHorizontal: 20
    },
    texto: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        marginHorizontal: 5
    },
    feedbackLegenda: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    legenda: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    }
})

export default Relatório