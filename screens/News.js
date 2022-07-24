import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const News = ({ navigation }) => {

    return (    
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Nouveautés
                    </Text>
                </View>
                <View style={styles.new_image_container}>
                    <Image style={styles.new_image}
                        source={require("../Images/movie-2.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-5.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-3.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-4.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-6.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-2.jpg")} />
                    <Image style={styles.new_image}
                        source={require("../Images/movie-6.jpg")} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: global.darkGray,
    },
    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: global.white,
        fontWeight: 'bold',
        //marginBottom: 10,
    },
    new_image_container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        //marginRight: 10,
    },
    new_image: {
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        width: '30%',
        backgroundColor: global.white
    },

})

export default News