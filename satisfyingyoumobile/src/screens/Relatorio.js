import {View, StyleSheet, Text} from 'react-native';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {PieChart} from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'green',
  },
};

const Relatório = () => {
  const data = [
    {
      key: 1,
      value: 1,
      svg: {fill: '#D71616'},
      arc: {outerRadius: '130%', cornerRadius: 10},
    },
    {
      key: 2,
      value: 1,
      svg: {fill: '#FF360A'},
    },
    {
      key: 3,
      value: 1,
      svg: {fill: '#FFC632'},
    },
    {
      key: 4,
      value: 1,
      svg: {fill: '#37BD6D'},
    },
    {
      key: 5,
      value: 1,
      svg: {fill: '#25BC22'},
    },
  ];
  return (
    <PaperProvider>
      <View style={estilos.view}>
        <View>
          <Text style={{color: '#D71616', fontWeight: 'bold'}}> Péssimo</Text>
          <Text style={{color: '#FF360A', fontWeight: 'bold'}}> Ruim</Text>
          <Text style={{color: '#FFC632', fontWeight: 'bold'}}> Neutro</Text>
          <Text style={{color: '#37BD6D', fontWeight: 'bold'}}> Bom</Text>
          <Text style={{color: '#25BC22', fontWeight: 'bold'}}> Excelente</Text>
        </View>

        <PieChart
          style={{height: 400}}
          outerRadius={'70%'}
          innerRadius={20}
          data={data}
        />
      </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Relatório;
