import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, ActivityIndicator, 
    FlatList, Share } from 'react-native';
import { FilmDetail } from '../../components/film';
import { FilmSimilaireItem } from '../../components/film';
import { getFilm, getSomeGenresFilms } from '../../../services/film';
import { useDispatch, useSelector } from "react-redux";
import * as GLOBAL from '../../../data/global';
import '../../../data/global';
import { Loading } from '../../components/Loading';

export default ({ route, navigation }) => {
    
    const dispatch = useDispatch();

    const favoritesFilm = useSelector((state) => state.favorite.favoritesFilm);
    
    const { idFilm } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState(undefined);
    const [filmSimulaire, setFilmSimulaire] = useState([]);

    const fetchFilm = async () => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmDetail::fetchFilm()");
        
        setIsLoading(true);
        let data = await getFilm(idFilm); 
        if (data.code == 1) {
            setFilm(data.film);
            const genre_ids = data.film.genres;
            if(genre_ids.length > 0)
                fetchSomeGenresFilms(genre_ids);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("FilmDetail::useEffect()::fetchFilms()::data " + JSON.stringify(data));
    }

    const fetchSomeGenresFilms = async (genre_ids) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmDetail::fetchSomeGenresFilms()");

        setIsLoading(true);
        let data = await getSomeGenresFilms(genre_ids.map(genre => genre.id).join()); 
        if (data.code == 1) {
            const filmSimulaires = data.films.filter((item) => item.id !== idFilm)
            setFilmSimulaire(filmSimulaires);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("FilmDetail::fetchSomeGenresFilms()::data " + JSON.stringify(data));
    }

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmDetail::useEffect()");

        fetchFilm();

    }, []);
    
    const handleFilmSimilaireItemPress = (idFilm) => {
        navigation.setParams({
            idFilm: idFilm
        });
        fetchFilm();
    };

    const handleFavoriteIconPress = (film) => {
      dispatch({
            type: "TOGGLE_FAVORITE_FILM",
            payload: film
        });
    }

    const handleInRecent = (film) => {
      dispatch({
            type: "ADD_INRECENT",
            payload: film
        });
    }

    const isFavorite = (film_id) => {
        const favoriteFilmIndex = favoritesFilm.findIndex(item => item.id === film_id)
        return favoriteFilmIndex !== -1 ? true : false;
    }

    const onShare = async (film) => {
        try {
          const result = await Share.share({
            message:
              'Diabarani | Je vous partage un film interressant ' + global.SERVER_ADDRESS+film.id,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
                console.log("shared with activity type of result.activityType");
                // shared with activity type of result.activityType
            } else {
                console.log("shared");
                // shared
            }
          } else if (result.action === Share.dismissedAction) {
                console.log("dismissed");
                // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      
      const _onLoad = () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmDetail::_onLoad()");
        handleInRecent(film);
      };

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <FlatList style={{ flex: 1 }}
                ListHeaderComponent={
                    <FilmDetail film={film} _onLoad={_onLoad} favoriteIconPress={handleFavoriteIconPress} isFavorite={isFavorite} onShare={onShare} />
                }
                data={filmSimulaire}
                renderItem={({item}) => <FilmSimilaireItem film={item} handleFilmSimilaireItemPress={handleFilmSimilaireItemPress} />}
                keyExtractor={(item,index) => index}
                numColumns={3}
                />
            <Loading isLoading={isLoading} />
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
    background_image: {
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
        color: global.lightGray,
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
    }
});