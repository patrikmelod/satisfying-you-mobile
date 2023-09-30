import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const Coleta = (props) => {

    const [feedback, setFeedback] = useState('')

    goToAgradecimento = () => {
        props.navigation.navigate("Agradecimento")
    }

    return(
        <PaperProvider>
            <View style={estilos.view}>
                <View>
                    <Text style={estilos.titulo}>O que você achou do Carnaval 2024?</Text>
                </View>

                <View style={estilos.conteudo}>
                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={goToAgradecimento}>
                            <Icon name="sentiment-very-dissatisfied" size={60} color='#D71616'/>
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Péssimo</Text>
                    </View>


                    <View style={estilos.feedback} > 
                        <TouchableOpacity onPress={goToAgradecimento}>
                            <Icon name="sentiment-dissatisfied" size={60} color='#FF360A'/>
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Ruim</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={goToAgradecimento}>
                            <Icon name="sentiment-neutral" size={60} color='#FFC632'/>
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Neutro</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={goToAgradecimento}>
                            <Icon name="sentiment-satisfied" size={60} color='#37BD6D'/>
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Bom</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={goToAgradecimento}>
                            <Icon name="sentiment-very-satisfied" size={60} color='#25BC22'/>
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Excelente</Text>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    view: {
        paddingTop: 100,
        padding: 30,
        backgroundColor: '#372775',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    texto: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Light',
    },
    conteudo: {
        display: 'grid',
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    feedback: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }
})

export default Coleta