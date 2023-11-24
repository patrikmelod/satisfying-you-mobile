import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { updateDoc, doc, collection } from '@firebase/firestore'
import { initializeFirestore } from '@firebase/firestore'
import { app } from '../firebase/config'
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../../redux/pesquisaSlice';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const Coleta = (props) => {

    const dispatch = useDispatch()

    const idRed = useSelector((state) => state.pesquisa.id)
    const nomeRed = useSelector((state) => state.pesquisa.nome)
    const dataRed = useSelector((state) => state.pesquisa.data)
    const imgRed = useSelector((state) => state.pesquisa.img)
    let pessimoRed = useSelector((state) => state.pesquisa.pessimo)
    let ruimRed = useSelector((state) => state.pesquisa.ruim)
    let neutroRed = useSelector((state) => state.pesquisa.neutro)
    let bomRed = useSelector((state) => state.pesquisa.bom)
    let excelenteRed = useSelector((state) => state.pesquisa.excelente)

    var titulo = "O que você achou do " + nomeRed + "?"

    const db = initializeFirestore(app, { experimentalForceLongPolling: true })

    const changePesquisa = (id) => {
        const pesqRef = doc(db, "pesquisas", id)

        updateDoc(pesqRef, {
            nome: nomeRed,
            data: dataRed,
            img: imgRed,
            pessimo: pessimoRed,
            ruim: ruimRed,
            neutro: neutroRed,
            bom: bomRed,
            excelente: excelenteRed
        })
    }

    attRedux = () => {
        dispatch(reducerSetPesquisa({
            id: idRed,
            nome: nomeRed,
            data: dataRed,
            img: imgRed,
            pessimo: pessimoRed,
            ruim: ruimRed,
            neutro: neutroRed,
            bom: bomRed,
            excelente: excelenteRed
        }))
    }

    pessimo = () => {
        pessimoRed++
        changePesquisa(idRed)
        attRedux()
        props.navigation.navigate("Agradecimento")
    }

    ruim = () => {
        ruimRed++
        changePesquisa(idRed)
        attRedux()
        props.navigation.navigate("Agradecimento")
    }

    neutro = () => {
        neutroRed++
        changePesquisa(idRed)
        attRedux()
        props.navigation.navigate("Agradecimento")
    }

    bom = () => {
        bomRed++
        changePesquisa(idRed)
        attRedux()
        props.navigation.navigate("Agradecimento")
    }

    excelente = () => {
        excelenteRed++
        changePesquisa(idRed)
        attRedux()
        props.navigation.navigate("Agradecimento")
    }

    return (
        <PaperProvider>
            <View style={estilos.view}>
                <View>
                    <Text style={estilos.titulo}>{titulo}</Text>
                </View>

                <View style={estilos.conteudo}>
                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={pessimo}>
                            <Icon name="sentiment-very-dissatisfied" size={60} color='#D71616' />
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Péssimo</Text>
                    </View>


                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={ruim}>
                            <Icon name="sentiment-dissatisfied" size={60} color='#FF360A' />
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Ruim</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={neutro}>
                            <Icon name="sentiment-neutral" size={60} color='#FFC632' />
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Neutro</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={bom}>
                            <Icon name="sentiment-satisfied" size={60} color='#37BD6D' />
                        </TouchableOpacity>
                        <Text style={estilos.texto}>Bom</Text>
                    </View>

                    <View style={estilos.feedback} >
                        <TouchableOpacity onPress={excelente}>
                            <Icon name="sentiment-very-satisfied" size={60} color='#25BC22' />
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