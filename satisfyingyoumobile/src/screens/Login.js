import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth_mod } from '../firebase/config'
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../../redux/loginSlice'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const Login = (props) => {

    const dispatch = useDispatch()

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [emailPassword, setCheck] = useState(false)

    const goToNovaConta = () => {
        props.navigation.navigate("Nova Conta")
    }

    const goToRecuperarSenha = () => {
        props.navigation.navigate("Recuperação de Senha")
    }

    const goToHome = () => {
        dispatch(reducerSetLogin({
            email: txtEmail,
        }))
        props.navigation.navigate("Drawer")
    }

    const checkEmailPassword = () => {
        signInWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
            .then((info) => {
                setCheck(false)
                goToHome()
            })
            .catch((error) => {
                setCheck(true)
            })
    }

    return (
        <PaperProvider>
            <View style={estilos.view}>
                <View style={estilos.top}>
                    <Text style={estilos.titulo}>Satisfying.you</Text>
                    <Icon name="mood" size={60} color='#FFFFFF' />
                </View>

                <View style={estilos.middle}>
                    <View style={estilos.middleTop}>
                        <View>
                            <Text style={estilos.texto}>Email</Text>
                            <TextInput
                                value={txtEmail}
                                onChangeText={setEmail}
                                placeholder='Digite seu email'
                            />
                        </View>

                        <View>
                            <Text style={estilos.texto}>Senha</Text>
                            <TextInput
                                value={txtSenha}
                                onChangeText={setSenha}
                                placeholder='Digite sua senha'
                                secureTextEntry={true}
                            />
                            {emailPassword && (
                                <Text style={estilos.textoErro}>
                                    Email e/ou senha inválidos
                                </Text>
                            )}
                        </View>
                    </View>

                    <View style={estilos.middleBottom}>
                        <Button mode="contained" buttonColor='#37BD6D' onPress={checkEmailPassword} style={estilos.botao}>
                            Entrar
                        </Button>
                    </View>
                </View>


                <View style={estilos.bottom}>
                    <Button mode="contained" buttonColor='#419ED7' onPress={goToNovaConta} style={estilos.botao}>
                        Criar minha conta
                    </Button>
                    <Button mode="contained" buttonColor='#B0CCDE' onPress={goToRecuperarSenha} style={estilos.botao}>
                        Esqueci minha senha
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
        flexDIRECTION: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        fontSize: 36,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Bold'
    },
    texto: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Light',
    },
    textoErro: {
        fontSize: 15,
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Bold',
        marginTop: 5
    },
    top: {
        marginTop: 30,
        paddingHorizontal: 10,
        //flex: 0.30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middleTop: {
        paddingTop: 60,
        //flex: 0.30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 15
    },
    middleBottom: {
        paddingTop: 10,
        paddingBottom: 100,
        //flex: 0.20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bottom: {
        paddingVertical: 20,
        gap: 20,
        //flex: 0.20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    botao: {
        borderRadius: 0,
    }
})

export default Login;
