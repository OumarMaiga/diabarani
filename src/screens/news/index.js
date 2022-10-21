import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet, StatusBar,
    ActivityIndicator, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getNewFilms } from '../../../API/DiabaraniApi';
import * as GLOBAL from '../../../data/global';
import '../../../data/global';

const News = ({ navigation }) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [films, setFilms] = useState([]);
    
    const fetchNewFilms = async () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("News::fetchNewFilms()");
        setIsLoading(true);
        let data = await getNewFilms(); 
        if (data.code == 1) {
            setFilms(data.films);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("News::useEffect()::fetchNewFilms()::data "+JSON.stringify(data));
    }

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("News::useEffect()");

        fetchNewFilms();

    }, []);

    const DisplayLoading = () => {
        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else return null
    };
    
    const handleItemPress = (idFilm) => {
        navigation.navigate('FilmDetail', {
            idFilm: idFilm
        });
    };

    const FilmItem = ({film, handleItemPress}) => (
        <Pressable onPress={() => handleItemPress(film.id) }>
            <View>
            <Image style={styles.new_image}
                source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
            </View>
        </Pressable>
    );

    const renderItem = ({ item }) => (
        <FilmItem film={item} handleItemPress={handleItemPress} />
    );

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Nouveautés
                    </Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.new_image_container}
                    data={films}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
            </ScrollView>
            <DisplayLoading/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: global.darkGray,
    },
    loading_container: {
      position: 'absolute',
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" ,
      top: 100,
      right: 0,
      bottom: 0,
      left: 0,
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
    },
    new_image: {
        minWidth: '30%',
        //maxWidth: '223',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        //width: '30%',
        backgroundColor: global.white
    },

})

export default News