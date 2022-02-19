import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as GLOBAL from '../data/global'
import '../data/global'

const Accueil = ({ navigation }) => {

    const Coming_soon = () => {
		return(
            <View style={styles.section_container}>
                <Text style={styles.coming_title}>
                    Bientôt
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('FilmDetail') }>
                        <Image style={styles.coming_image}
                            source={require("../Images/movie-2.jpg")} />
                    </TouchableOpacity>
                    <Image style={styles.coming_image}
                    source={require("../Images/movie-5.jpg")} />
                    <Image style={styles.coming_image}
                    source={require("../Images/movie-3.jpg")} />
                    <Image style={styles.coming_image}
                    source={require("../Images/movie-6.jpg")} />
                </ScrollView>
            </View>
		)
    }

    const Historique = () => {
		return(
            <View style={styles.section_container}>
                <Text style={styles.subtitle_text}>
                    Continuer à regarder
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('FilmDetail') }>
                        <Image style={styles.historique_image}
                            source={require("../Images/image-1.jpg")} />
                    </TouchableOpacity>
                    <Image style={styles.historique_image}
                        source={require("../Images/image-2.jpg")} />
                </ScrollView>
            </View>
		)
    }

    const New = () => {
		return(
            <View style={styles.section_container}>
                <Text style={styles.subtitle_text}>
                    Nouveautés
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image style={styles.new_image}
                    source={require("../Images/movie.jpg")} />
                    <Image style={styles.new_image}
                    source={require("../Images/movie-2.jpg")} />
                    <Image style={styles.new_image}
                    source={require("../Images/movie.jpg")} />
                    <Image style={styles.new_image}
                    source={require("../Images/movie-6.jpg")} />
                </ScrollView>
            </View>
		)
    }

    const Genre = () => {
		return(
            <View style={styles.section_container}>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitle_text}>
                        Drame
                    </Text>
                    <MaterialCommunityIcons name='chevron-right' size={22} color='#EEEEEE' />
                </View>
                <ScrollView style={styles.image_section} horizontal showsHorizontalScrollIndicator={false}>
                    <Image style={styles.genre_image}
                    source={require("../Images/movie-6.jpg")} />
                    <Image style={styles.genre_image}
                    source={require("../Images/movie-5.jpg")} />
                    <Image style={styles.genre_image}
                    source={require("../Images/movie-2.jpg")} />
                    <Image style={styles.genre_image}
                    source={require("../Images/movie.jpg")} />
                </ScrollView>
            </View>
		)
    }

    return (    
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Coming_soon/>
                <Historique/>
                <New/>
                <Genre/>
                <Genre/>
                <Genre/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    section_container: {
        //padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    coming_title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    coming_image: {
        marginLeft: 10,
        marginRight: 10,
        height: 190,
        width: 160,
        backgroundColor: '#EEEEEE'
    },
      subtitle: {
        flexDirection: 'row',
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
      arrow_next: {
        fontSize: 16,
        color: '#707070',
        textAlign: 'right',
      },
      historique_image: {
          marginLeft: 10,
          marginRight: 10,
          height: 90,
          width: 140,
          borderRadius: 7,
          backgroundColor: '#EEEEEE'
      },
      new_image: {
          marginLeft: 10,
          marginRight: 10,
          height: 80,
          width: 80,
          borderRadius: 50,
          backgroundColor: '#EEEEEE'

      },
      genre_image: {
          marginLeft: 10,
          marginRight: 10,
          height: 90,
          width: 120,
          borderRadius: 7,
          backgroundColor: '#EEEEEE'

      }
})

export default Accueil