import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Bebas Neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'Palette Mosaic': require('./assets/fonts/PaletteMosaic-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{fontFamily: "Palette Mosaic"}}>SNEAKERS APP</Text>
        <Text style={{fontFamily: "Bebas Neue"}}>Welcome app sneakers</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
