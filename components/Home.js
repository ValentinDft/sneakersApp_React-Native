import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

// Datas
import colors from "../assets/colors/colors"
import categories from "../assets/data/categories";
import items from "../assets/data/items"

// Icons
import { AntDesign } from '@expo/vector-icons';

export default function Home({navigation}) {

    const renderItem = ({ item }) => {
        return(
            <View style={[styles.cardCategorie, {backgroundColor: item.selected ? colors.primary : colors.text1}]}>
                <Image source = {item.image}
                    style = {{ 
                        width: 140,
                        height: 120,
                        resizeMode: 'contain' }}
                />
                {/* <Text style={{textAlign: "center"}}>{item.title}</Text> */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>SHOP MY SNEAKERS</Text>
                    <Text style={{fontFamily: "Bebas Neue", color: colors.text1, fontSize: 16}}>Buy your favorite sneakers !</Text>
                </View>

                {/* <View style={styles.containerSearch}>
                    <AntDesign name="search1" size={18} color="white" />
                    <View style={styles.search}>
                        <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 14, marginBottom: "1%"}}>Search....</Text>
                    </View>
                </View> */}

                <View style={styles.containerCategories}>
                    <Text style={{fontFamily: "Bebas Neue", color: colors.text1, fontSize: 20, paddingHorizontal: "5%"}}>Brands</Text>
                    <View>
                        <FlatList
                            data={categories}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                            horizontal={true}
                            contentContainerStyle={{ padding: "5%" }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.containerPopular}>
                    <Text style={{fontFamily: "Bebas Neue", color: colors.text1, fontSize: 20}}>Popular</Text>
                    {items.map((items) => {
                        return(
                            <View style={styles.cardPopular} key={items.id.toString()}>
                                <View>
                                    <View style={{paddingLeft: 10,paddingTop: 10}}>
                                        <Text style={{fontFamily: "Bebas Neue", color: "black", fontSize: 18}}>{items.title}</Text>
                                        <Text style={{fontFamily: "Bebas Neue", color: colors.text2, fontSize: 16}}>{items.brand}</Text>
                                    </View>
                                    
                                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item: items})}>
                                        <View style={styles.addButton}>
                                            <AntDesign name="plus" size={16} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{marginRight: 5}}> 
                                    <Image source = {items.image}
                                        style = {{ 
                                            width: 180,
                                            height: 95,
                                            resizeMode: 'contain' }}
                                    />
                                </View>
                                
                            </View>
                        )
                    })}
                </View>
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
        marginTop: "12%",
        alignItems: "center"
    },
    titleText: {
        fontFamily: "Palette Mosaic", 
        color: colors.primary,
        fontSize: 25
    },
    containerSearch: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "5%",
        marginTop: "10%",
    },
    search: {
        flex: 1,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        marginLeft: "2%"
    },
    containerCategories: {
        marginTop: "10%"
    },
    cardCategorie: {
        borderRadius: 20,
        marginRight: 20,
        height: 100,
        width: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    containerPopular: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    cardPopular: {
        backgroundColor: colors.text1, 
        borderRadius: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    addButton: {
        backgroundColor: colors.primary, 
        marginTop: 10,
        width: 80,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    }
})
