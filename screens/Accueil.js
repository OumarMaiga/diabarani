import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet, StatusBar,
    ActivityIndicator, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getUpcomingFilms, getNewFilms, getGenresFilms } from '../API/DiabaraniApi';
import * as GLOBAL from '../data/global';
import '../data/global';

const Accueil = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [upcomingFilms, setUpComingFilms] = useState([]);
    const [films, setFilms] = useState([]);
    const [newFilms, setNewFilms] = useState([]);
    const [genresFilms, setGenresFilms] = useState([]);

    const fetchUpcomingFilms = async () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Accueil::fetchUpcomingFilms()");
        setIsLoading(true);
        let data = await getUpcomingFilms(); 
        if (data.code == 1) {
            setUpComingFilms(data.films);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("Accueil::useEffect()::fetchUpcomingFilms()::data "+JSON.stringify(data));
    }

    const fetchNewFilms = async () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Accueil::fetchNewFilms()");
        setIsLoading(true);
        let data = await getNewFilms(); 
        if (data.code == 1) {
            setNewFilms(data.films);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("Accueil::useEffect()::fetchNewFilms()::data "+JSON.stringify(data));
    }
    
    const fetchGenresFilms = async () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Accueil::fetchGenres()");
        setIsLoading(true);
        let data = await getGenresFilms(); 
        if (data.code == 1) {
            setGenresFilms(data.genres_films);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("Accueil::useEffect()::fetchGenres()::data "+JSON.stringify(data));
    }

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("Accueil::useEffect()");

        fetchUpcomingFilms();

        fetchNewFilms();
        
        fetchGenresFilms();

    }, []);
    
    const handleUpcomingFilmsItemPress = (idFilm) => {
        navigation.navigate('FilmDetail', {
            idFilm: idFilm
        });
    };

    const UpcomingFilmItem = ({film, handleUpcomingFilmsItemPress}) => (
        <Pressable onPress={() => handleUpcomingFilmsItemPress(film.id) }>
            <Image style={styles.upcoming_image}
                source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
        </Pressable>
    );

    const renderUpcomingFilmsItem = ({ item }) => (
        <UpcomingFilmItem film={item} handleUpcomingFilmsItemPress={handleUpcomingFilmsItemPress} />
    );
    
    const handleNewFilmsItemPress = (idFilm) => {
        navigation.navigate('FilmDetail', {
            idFilm: idFilm
        });
    };

    const NewFilmItem = ({film, handleNewFilmsItemPress}) => (
        <Pressable onPress={() => handleNewFilmsItemPress(film.id) }>
            <Image style={styles.new_image}
                source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
        </Pressable>
    );

    const renderNewFilmsItem = ({ item }) => (
        <NewFilmItem film={item} handleNewFilmsItemPress={handleNewFilmsItemPress} />
    );

    
    const handleGenresFilmsItemPress = (film_id) => {
        navigation.navigate('FilmDetail', {
            idFilm: film_id
        });
    };

    const handleGenresItemPress = (genre_id) => {
        navigation.navigate('FilmPerGenre', {
            genre_id: genre_id
        });
    };
    
    const GenreFilmsItem = ({film, handleGenresFilmsItemPress}) => (
        <Pressable onPress={() => handleGenresFilmsItemPress(film.id) }>
            <Image style={styles.genre_image}
                source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
        </Pressable>
    );

    const renderGenreFilmsItem = ({ item }) => (
        <GenreFilmsItem film={item} handleGenresFilmsItemPress={handleGenresFilmsItemPress} />
    );


    const GenreFilmItem = ({genre, handleGenresFilmsItemPress, handleGenresItemPress}) => (
        <View style={styles.section_container}>
            <View style={styles.subtitle}>
                <Pressable onPress={() => handleGenresItemPress(genre.id)}>
                    <Text style={styles.subtitle_text}>
                        { genre.libelle }
                    </Text>
                </Pressable>
                <View style={styles.arrow_next}>
                    <MaterialCommunityIcons name='chevron-right' size={22} color={global.white} />
                </View>
            </View>
            <FlatList
                data={genre.films}
                renderItem={renderGenreFilmsItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} />
        </View>
    );

    const renderGenresFilmsItem = ({ item }) => (
        <GenreFilmItem genre={item} handleGenresFilmsItemPress={handleGenresFilmsItemPress} handleGenresItemPress={handleGenresItemPress} />
    );
    
    const DisplayLoading = () => {
        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else return null
    };

    const UpComing = () => {
		return (
            <View style={styles.section_container}>
                <Text style={styles.coming_title}>
                    Bientôt
                </Text>
                <FlatList
                    data={upcomingFilms}
                    renderItem={renderUpcomingFilmsItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} />
            </View>
		)
    }
    const Historique = () => {
		return (
            <View style={styles.section_container}>
                <Text style={styles.subtitle_text}>
                    Continuer à regarder
                </Text>
                <View horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable onPress={() => navigation.navigate('FilmDetail') }>
                        <Image style={styles.historique_image}
                            source={require("../Images/image-1.jpg")} />
                    </Pressable>
                </View>
            </View>
		)
    }


    const New = () => {
		return (
            <View style={styles.section_container}>
                <Text style={styles.subtitle_text}>
                    Nouveautés
                </Text>
                <FlatList
                    data={newFilms}
                    renderItem={renderNewFilmsItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} />
            </View>
		)
    }

    const Genre = () => {
		return (
            <FlatList
                data={genresFilms}
                renderItem={renderGenresFilmsItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false} />
		)
    }

    return (    
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <UpComing/>
                <Historique/>
                <New/>
                {/**/}<Genre/>
            </ScrollView>
            <DisplayLoading/>
        </SafeAreaView>
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
    section_container: {
        //padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    coming_title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: global.white,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    upcoming_image: {
        marginLeft: 10,
        marginRight: 10,
        height: 190,
        width: 160,
        backgroundColor: global.white
    },
    image_container: {
        flex: 1,
        flexDirection: 'row',
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
		color: global.white,
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
          backgroundColor: global.white
      },
      new_image: {
          marginLeft: 10,
          marginRight: 10,
          height: 80,
          width: 80,
          borderRadius: 50,
          backgroundColor: global.white

      },
      genre_image: {
          marginLeft: 10,
          marginRight: 10,
          height: 90,
          width: 120,
          borderRadius: 7,
          backgroundColor: global.white

      }
})

export default Accueil