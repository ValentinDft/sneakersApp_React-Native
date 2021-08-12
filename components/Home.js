import React from 'react';
import { Text, View } from 'react-native';
import colors from "../assets/colors/colors"
import { AntDesign } from '@expo/vector-icons'; 

export default function Home() {
    return (
        <View>
            <Text style={{fontFamily: "Palette Mosaic", color: colors.primary}}>SNEAKERS APP <AntDesign name="shoppingcart" size={20} color="white" /></Text>
            <Text style={{fontFamily: "Bebas Neue", color: "black"}}>Welcome app sneakers</Text>
        </View>
    )
}
