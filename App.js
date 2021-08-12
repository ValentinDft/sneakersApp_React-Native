import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./assets/colors/colors"
import { AntDesign } from '@expo/vector-icons'; 

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
        <Text style={{fontFamily: "Palette Mosaic", color: colors.primary}}>SNEAKERS APP <AntDesign name="shoppingcart" size={20} color="white" /></Text>
        <Text style={{fontFamily: "Bebas Neue", color: colors.text1}}>Welcome app sneakers</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
