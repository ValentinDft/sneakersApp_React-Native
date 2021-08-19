import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from "../assets/colors/colors"

import { Ionicons } from '@expo/vector-icons';

export default function Detail({route, navigation}) {

    const { item } = route.params;
    
    return (
        <View style={styles.container}>
            
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.header}>
                    <Ionicons name="chevron-back" size={26} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        marginTop: "15%",
        marginLeft: "5%",
        borderColor: colors.text2,
        borderWidth: 2,
        width: 32,
        borderRadius: 10,
    }
})
