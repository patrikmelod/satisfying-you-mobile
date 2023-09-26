import { View, StyleSheet, Text } from 'react-native'
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

const RecuperarSenha = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [checkEmail, setCheck] = useState(false)

    const recuperar = () => {
        if (txtEmail == "") {
            setCheck(true)
        } else {
            props.navigation.goBack()
            setCheck(false)
        }
    }

    return (
        <PaperProvider>
            <View style={estilos.view}>
                <View style={estilos.top}>
                    <TextInput
                        label="Email"
                        value={txtEmail}
                        onChangeText={setEmail}
                        placeholder='Digite seu email'
                    />
                    {checkEmail && (
                        <Text style={estilos.texto}>
                            E-mail parece ser inválido
                        </Text>
                    )}
                </View>

                <View style={estilos.bottom}>
                    <Button mode="contained" buttonColor='#228B22' onPress={recuperar}>
                        Recuperar
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
        justifyContent: 'flex-start'
    },
    texto: {
        fontSize: 15,
        color: '#DC143C',
        fontFamily: 'AveriaLibre-Bold'
    },
    top: {
        paddingVertical: 190,
        flex: 0.30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bottom: {
        flex: 0.70,
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

export default RecuperarSenha;
