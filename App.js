import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Components
import Home from './components/Home';
import Detail from './components/Detail';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Bebas Neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'Palette Mosaic': require('./assets/fonts/PaletteMosaic-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
