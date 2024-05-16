import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CarProvider } from './components/CarContext';

import CarCountComponente from './components/CarCountComponent';
import CarInputComponente from './components/CarinputComponent';
import CarListComponent from './components/CarListComponent';

export default function App() {
  return (
    <CarProvider>
      <View style={styles.container}>
        <CarCountComponente />
        <CarInputComponente />
        <CarListComponent />
        <StatusBar style="auto"/>      
      </View>
    </CarProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});