import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

// Datas
import colors from "../assets/colors/colors"

// Icons
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Detail({route, navigation}) {

    const { item } = route.params;
    
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.header}>
                        <Ionicons name="chevron-back" size={26} color="white" />
                    </View>
                </TouchableOpacity>

                <View style={styles.titleSection}>
                    <Text style={{fontFamily: "Bebas Neue", color: "white", fontSize: 24}}>{item.title}</Text>
                    <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 18}}>{item.brand}</Text>
                </View>

                <View style={styles.priceSection}>
                    <Text style={{fontFamily: "Bebas Neue", color: colors.primary, fontSize: 24}}>{item.price} €</Text>
                </View>

                <View style={styles.infoSection}>
                    <View style={styles.topInfoSection}>
                        <Image source = {item.image}
                            style = {{ 
                                width: 300,
                                height: 200,
                                resizeMode: 'contain', 
                                borderRadius: 50 }}
                        />
                    </View>
                    <View style={styles.bottomInfoSection}>
                        <View style={styles.conditionInfo}>
                            <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 16}}>Condition</Text>
                            <Text style={{fontFamily: "Bebas Neue", color: colors.primary, fontSize: 20}}>{item.condition}</Text>
                        </View>
                        <View style={styles.colorInfo}>
                            <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 16}}>Colorway</Text>
                            <Text style={{fontFamily: "Bebas Neue", color: colors.primary, fontSize: 20}}>{item.colorway}</Text>
                        </View>
                        <View style={styles.authInfo}>
                            <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 16}}>100% Authentic</Text>
                        </View>
                    </View>

                    
                </View>

                <TouchableOpacity onPress={() => alert("Thank you !")}>
                    <View style={styles.buttonBuy}>
                        <Text style={{fontFamily: "Bebas Neue", color: "black", fontSize: 20}}>
                            Buy 
                            <AntDesign name="shoppingcart" size={20} color="black" />  
                        </Text>
                    </View>               
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        marginTop: "8%",
        marginLeft: "5%",
        borderColor: colors.text2,
        borderWidth: 2,
        width: 32,
        borderRadius: 10,
    },
    titleSection: {
        marginTop: "5%",
        paddingHorizontal: 20
    },
    priceSection : {
        marginTop: "5%",
        paddingHorizontal: 20
    },
    infoSection: {
        marginTop: "5%",
        paddingHorizontal: 20,
    },
    bottomInfoSection: {
        marginTop: "8%"
    },
    conditionInfo: {
        marginBottom: 20
    },
    colorInfo: {
        marginBottom: 20
    },
    topInfoSection: {
        alignItems: "center"
    },
    buttonBuy: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
        padding: 10,
        marginHorizontal: 50,
        borderRadius: 20 
    }
})
