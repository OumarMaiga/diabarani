import React, { useState } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bibliotheque = ({ navigation }) => {

    const Historique = () => {
        return(
                <View style={styles.section_container}>
                    <Text style={styles.subtitle_text}>
                        Recent
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => navigation.navigate('FilmDetail') }>
                            <Image style={styles.historique_image}
                                source={require("../Images/image-1.jpg")} />
                        </TouchableOpacity>
                        <Image style={styles.historique_image}
                            source={require("../Images/image-2.jpg")} />
                        <Image style={styles.historique_image}
                            source={require("../Images/image-1.jpg")} />
                        <Image style={styles.historique_image}
                            source={require("../Images/image-2.jpg")} />
                    </ScrollView>
                </View>
        )
    }

    const ToWatch = () => {
        return(
                <View style={styles.section_container}>
                    <Text style={styles.subtitle_text}>
                        A regarder
                    </Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.to_watch_container}>
                            <Image style={styles.to_watch_image}
                                source={require("../Images/movie-2.jpg")} />
                            <Image style={styles.to_watch_image}
                                source={require("../Images/movie-5.jpg")} />
                            <Image style={styles.to_watch_image}
                                source={require("../Images/movie-3.jpg")} />
                            <Image style={styles.to_watch_image}
                                source={require("../Images/movie-6.jpg")} />
                        </View>
                    </ScrollView>
                </View>
        )
    }

    return (    
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Bibliotheque
                    </Text>
                </View>
                <Historique/>
                <ToWatch/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
        fontWeight: 'bold',
        //marginBottom: 10,
    },
    section_container: {
        marginTop: 10,
    },
    subtitle_text: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'Verdana',
        color: '#EEEEEE',
    },
    historique_image: {
        marginLeft: 10,
        marginRight: 10,
        height:100,
        width: 150,
        borderRadius: 7,
        backgroundColor: '#EEEEEE'
    },
    to_watch_container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        
        //marginRight: 10,
    },
    to_watch_image: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        width: '30%',
        backgroundColor: '#EEEEEE'
    }

})

export default Bibliotheque