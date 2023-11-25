import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import CustomDrawer from "../components/CustomDrawer";
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{
                drawerInactiveBackgroundColor: "#372775",
                drawerActiveBackgroundColor: "#9370DB",
                drawerActiveTintColor: "#FFFFFF",
                drawerInactiveTintColor: "#FFFFFF",
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontFamily: 'AveriaLibre-Light',
                    fontSize: 25
                },
                headerStyle: {
                    backgroundColor: '#1F0954'
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <DrawerNavigator.Screen
                name="Pesquisas"
                component={Home}
                options={{
                    drawerLabelStyle: {
                        fontFamily: 'AveriaLibre-Light',
                        fontSize: 20
                    },
                    drawerIcon: config => <Icon name="inventory" size={25} color='#FFFFFF' />
                }} />
        </DrawerNavigator.Navigator>
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
    },
    top: {
        marginTop: 0,
        paddingHorizontal: 0,
        flex: 0.00,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    middle: {
        marginTop: 0,
        paddingHorizontal: 0,
        flex: 0.0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        paddingVertical: 0,
        gap: 0,
        flex: 0.0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        borderRadius: 0,
    }
})

export default Drawer