import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Favorite = ({ navigation }) => {

    const DisplayFilmList = () => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate('FilmDetail') }>
                <View style={styles.item_container}>
                    <Image style={styles.item_image} source={require("../Images/movie-2.jpg")} />
                    <View style={styles.item_content}>
                        <View style={styles.item_title_container}>
                            <Text style={styles.item_title}>
                                Titre du film
                            </Text>
                            <MaterialCommunityIcons name="heart" size={24} color="#ECBB04" />
                        </View>
                        <Text style={styles.item_time}>
                            1h 22min
                        </Text>
                        <Text style={styles.item_genre}>
                            Drame / Histoire
                        </Text>
                        <View style={styles.item_rate}>
                            <MaterialCommunityIcons name="star" size={28} color="#FFFFFF" />
                            <Text style={styles.item_rate_text}>
                                6.4
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (    
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Favorie
                </Text>
                <DisplayFilmList/>
                <DisplayFilmList/>
                <DisplayFilmList/>
                <DisplayFilmList/>
                <DisplayFilmList/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    item_container: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',

    },
    item_image: {
        backgroundColor: 'gray',
        width: 120,
        height: 180,
    },
    item_content: {
        marginLeft: 20,
        flex: 1,
    },
    item_title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item_title: {
        fontSize: 26,
        color: '#CFCFCF',
        fontFamily: 'Helvetica',
        flexWrap: 'wrap',
        paddingRight: 2,
    },
    item_time: {
        color: '#B5B5B5',
    },
    item_genre: {
        color: '#C79D02',
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginTop: 5,
    },
    item_rate: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECBB04',
        padding: 2,
    },
    item_rate_text: {
        color: '#FFFFFF',
        paddingRight: 4,
        paddingLeft: 2,
        fontSize: 18,
    }
})

export default Favorite