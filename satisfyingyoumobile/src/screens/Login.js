import { View, StyleSheet, Text } from 'react-native'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const Login = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [emailPassword, setCheck] = useState(false)

    const goToNovaConta = () => {
        props.navigation.navigate("Nova Pesquisa")
    }

    const goToRecuperarSenha = () => {
        props.navigation.navigate("Recuperação de Senha")
    }

    const checkEmailPassword = () => {
        if (txtEmail == "" || txtSenha == "") {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    return (
        <PaperProvider>
            <View style={estilos.view}>
                <View style={estilos.top}>
                    <Text style={estilos.texto}>Satisfying.you</Text>
                    <Icon name="mood" size={60} color='#FFFFFF' />
                </View>

                <View style={estilos.middleTop}>
                    <TextInput
                        label="Email"
                        value={txtEmail}
                        onChangeText={setEmail}
                        placeholder='Digite seu email'
                    />
                    <TextInput
                        label="Senha"
                        value={txtSenha}
                        onChangeText={setSenha}
                        placeholder='Digite sua senha'
                    />
                </View>

                <View style={estilos.middleBottom}>
                    {emailPassword && (
                        <Text style={estilos.textoErro}>
                            Email e/ou senha inválidos
                        </Text>
                    )}
                    <Button mode="contained" buttonColor='#228B22' onPress={checkEmailPassword}>
                        Entrar
                    </Button>
                </View>

                <View style={estilos.bottom}>
                    <Button mode="contained" buttonColor='#20B2AA' onPress={goToNovaConta}>
                        Criar minha conta
                    </Button>
                    <Button mode="contained" buttonColor='#A9A9A9' onPress={goToRecuperarSenha}>
                        Esqueci minha senha
                    </Button>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#4B0082',
        padding: 30,
        flex: 1,
        flexDIRECTION: 'column',
        justifyContent: 'space-between',
     
    },
    texto: {
        fontSize: 36,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Bold'
    },
    textoErro: {
        fontSize: 15,
        color: '#DC143C',
        fontFamily: 'AveriaLibre-Bold'
    },
    top: {
        paddingHorizontal: 10,
        flex: 0.30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middleTop: {
        paddingTop: 60,
        flex: 0.30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    middleBottom: {
        paddingTop: 10,
        paddingBottom: 100,
        flex: 0.20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bottom: {
        paddingVertical: 20,
        flex: 0.20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default Login;
