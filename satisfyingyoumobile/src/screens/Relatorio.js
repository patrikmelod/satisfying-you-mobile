import { View, StyleSheet, Text } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { PieChart } from 'react-native-svg-charts';
import { useSelector } from 'react-redux'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        secondary: 'green',
    },
};

const Relatório = () => {
    let pessimoRed = useSelector((state) => state.pesquisa.pessimo)
    let ruimRed = useSelector((state) => state.pesquisa.ruim)
    let neutroRed = useSelector((state) => state.pesquisa.neutro)
    let bomRed = useSelector((state) => state.pesquisa.bom)
    let excelenteRed = useSelector((state) => state.pesquisa.excelente)

    const data = [
        {
            key: 1,
            value: pessimoRed,
            svg: { fill: '#D71616' },
        },
        {
            key: 2,
            value: ruimRed,
            svg: { fill: '#FF360A' },
        },
        {
            key: 3,
            value: neutroRed,
            svg: { fill: '#FFC632' },
        },
        {
            key: 4,
            value: bomRed,
            svg: { fill: '#37BD6D' },
        },
        {
            key: 5,
            value: excelenteRed,
            svg: { fill: '#25BC22' },
        },
    ];
    return (
        <PaperProvider>
            <View style={estilos.view}>
                
                <PieChart
                    style={{ height: 400 }}
                    outerRadius={'80%'}
                    innerRadius={30}
                    data={data}
                />
                <View>
                    <Text style={estilos.tituloPes}> Péssimo: {pessimoRed}</Text>
                    <Text style={estilos.tituloRui}> Ruim: {ruimRed}</Text>
                    <Text style={estilos.tituloNeu}> Neutro: {neutroRed}</Text>
                    <Text style={estilos.tituloBom}> Bom: {bomRed}</Text>
                    <Text style={estilos.tituloExc}> Excelente: {excelenteRed}</Text>
                </View>
            </View>
        </PaperProvider>
    );
};

const estilos = StyleSheet.create({
    view: {
        paddingTop: 50,
        padding: 30,
        backgroundColor: '#372775',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    tituloPes: {
        fontSize: 30,
        color: '#D71616',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    tituloRui: {
        fontSize: 30,
        color: '#FF360A',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    tituloNeu: {
        fontSize: 30,
        color: '#FFC632',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    tituloBom: {
        fontSize: 30,
        color: '#37BD6D',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    tituloExc: {
        fontSize: 30,
        color: '#25BC22',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
});

export default Relatório;