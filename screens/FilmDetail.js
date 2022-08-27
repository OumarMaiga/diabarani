import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, View, Image, Text, ActivityIndicator, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video, AVPlaybackStatus } from 'expo-av';
import { getFilm } from '../API/DiabaraniApi';
import * as GLOBAL from '../data/global';
import '../data/global';

export default ({ route, navigation }) => {

    const { idFilm } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState(undefined);
    const [video_path, setVideo_path] = useState('');
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const fetchFilm = async () => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Favorite::fetchFilm()");

        setIsLoading(true);
        let data = await getFilm(idFilm); 
        if (data.code == 1) {
            setFilm(data.film);
            data.film.videos.map(video => setVideo_path(global.SERVER_ADDRESS+video.path));
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("Favorite::useEffect()::fetchFilms()::data "+JSON.stringify(data));
    }

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("Favorite::useEffect()");

        fetchFilm();

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

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView style={{ flex: 1 }}>                    
                <Video style={styles.background_video}
                    source={{
                        uri: video_path
                    }}
                    ref={video}
                    useNativeControls
                    resizeMode="contain"
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
               <View style={styles.detail_container}>
                    <Text style={styles.detail_title}>
                        { film && film.title }
                    </Text>
                    <Text style={styles.detail_time}>
                        1h 22min
                    </Text>
                    <Text style={styles.detail_genre}>
                        { film && film.genres.map(genre => genre.libelle).join(" - ") }
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                        <View style={styles.detail_rate}>
                            <MaterialCommunityIcons name="star" size={28} color={global.white} />
                            <Text style={styles.detail_rate_text}>
                                6.4
                            </Text>
                        </View>
                        <MaterialCommunityIcons name="eye" size={28} color={global.lightGray} />
                        <Text style={styles.detail_view_count}>6.015</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ marginRight: 10, alignItems: 'center' }}>
                            <MaterialCommunityIcons name="heart" size={28} color={global.lightGray} />
                            <Text style={styles.detail_icon_text}>Aimer</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
                            <MaterialCommunityIcons name="share" size={28} color={global.lightGray} />
                            <Text style={styles.detail_icon_text}>Partager</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, alignItems: 'center'  }}>
                            <MaterialCommunityIcons name="heart" size={28} color={global.lightGray} />
                            <Text style={styles.detail_icon_text}>A régarder</Text>
                        </View>
                    </View>
                    <Text style={styles.detail_overview}>
                        { film && film.overview }
                    </Text>
                    <View style={styles.detail_simulaire_container}>
                        <Text style={styles.detail_simulaire_title}>Vidéos simulaires</Text>
                        <View style={styles.detail_similaire_image_container}>
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie-4.jpg')} />
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie-6.jpg')} />
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie.jpg')} />
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie-2.jpg')} />
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie-3.jpg')} />
                            <Image style={styles.detail_similaire_image}
                                source={require('../Images/movie-5.jpg')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <DisplayLoading />
        </View>
        );
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
    background_video: {
        height: 220,
        width: '100%',
        backgroundColor: global.gray
    },
    detail_container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    detail_title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: global.white,
        fontFamily: "Helvetica",
    },
    detail_time: {
        color: global.darkGray,
    },
    detail_genre: {
        color: global.Yellow,
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginTop: 5,
    },
    detail_rate: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: global.darkYellow,
        padding: 2,
        marginRight: 10
    },
    detail_rate_text: {
        color: global.white,
        paddingRight: 4,
        paddingLeft: 2,
        fontSize: 18,
    },
    detail_view_count: {
        marginLeft: 5,
        color: global.lightGray,
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail_icon_text: {
        fontSize: 14,
        color: global.lightGray,
    },
    detail_overview: {
        marginTop: 10,
        fontSize: 18,
        color: global.lightGray,
    },
    detail_simulaire_container: {
        marginTop: 30,
    },
    detail_simulaire_title: {
        fontSize: 22,
        fontFamily: 'Helvetica',
        color: global.white,
        marginBottom: 5
    },
    detail_similaire_image_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    detail_similaire_image: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        width: '30%',
        backgroundColor: global.white,
    }
});