import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, StatusBar,
    FlatList, ActivityIndicator } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from '../../../services/film';
import * as GLOBAL from '../../../data/global';
import '../../../data/global';
import { Loading } from '../../components/Loading';


const Favorite = ({ navigation }) => {

    const favoritesFilm = useSelector((state) => state.favorite.favoritesFilm);
    const [isLoading, setIsLoading] = useState();
        
    const handleItemPress = (idFilm) => {
        navigation.navigate('FilmDetail', {
            idFilm: idFilm
        });
    };

    const FilmItem = ({film, handleItemPress}) => (
        <TouchableOpacity onPress={() => handleItemPress(film.id) }>
            <View style={styles.item_container}>
                <Image style={styles.item_image} source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
                <View style={styles.item_content}>
                    <View style={styles.item_title_container}>
                        <Text style={styles.item_title}>
                            {film.title}
                        </Text>
                        <MaterialCommunityIcons name="heart" size={24} color={global.darkYellow} />
                    </View>
                    <Text style={styles.item_time}>
                        1h 22min
                    </Text>
                    <Text style={styles.item_genre}>
                        { film.genres.map(genre => genre.libelle).join(" - ") }
                    </Text>
                    <View style={styles.item_rate}>
                        <MaterialCommunityIcons name="star" size={28} color={global.white} />
                        <Text style={styles.item_rate_text}>
                            6.4
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <FilmItem film={item} handleItemPress={handleItemPress} />
    );

    return (    
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <FlatList showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <Text style={styles.title}>
                        Favorie
                    </Text>
                }                
                data={favoritesFilm}
                keyExtractor={(item,index) => index}
                renderItem={renderItem} />
            <Loading isLoading={isLoading}/>
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
    title: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: global.white,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    item_container: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',

    },
    item_image: {
        backgroundColor: global.lightGray,
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
        fontSize: 22,
        color: global.white,
        fontFamily: 'Helvetica',
        paddingRight: 2,
    },
    item_time: {
        color: global.lightGray,
    },
    item_genre: {
        color: global.Yellow,
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginTop: 5,
    },
    item_rate: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: global.darkYellow,
        padding: 2,
    },
    item_rate_text: {
        color: global.white,
        paddingRight: 4,
        paddingLeft: 2,
        fontSize: 18,
    }
})

export default Favorite