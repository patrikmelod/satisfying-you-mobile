import { View, StyleSheet, Image, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green'
    }
}

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={estilos.view} >
            <View>
                <DrawerItem label="usuario@dominio.com" labelStyle={estilos.titulo} />
                <DrawerItem label="__________________________" labelStyle={estilos.barra} />
                <DrawerItemList {...props} />
            </View>
            <View>
                <DrawerItem label="Sair" labelStyle={estilos.texto}
                    onPress={() => { props.navigation.popToTop() }}
                    color='white'
                    icon={({ focused, color, size }) => {
                        return (
                            <Icon name="logout" size={25} color='#FFFFFF' />
                        );
                    }}
                />
            </View>
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 60,
        paddingTop: 50
    },
    barra: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Arial',
        justifyContent: 'center',
        marginBottom: 20
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Light',

    },
    titulo: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Bold',
        marginTop: 5
    }
})

export default CustomDrawer