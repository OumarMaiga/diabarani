import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, 
    FlatList, Share, Text } from 'react-native';
import { Loading } from '../../components/Loading';
import { SerieDetail } from '../../components/serie';
import { SerieSimilaireItem } from '../../components/serie';
import { Episodes } from '../../components/episode';
import { getSerie, getSomeGenresSeries } from '../../../services/serie';
import { getSaisons } from '../../../services/saison';
import { getEpisodes } from '../../../services/episode';
import { useDispatch, useSelector } from "react-redux";
import * as GLOBAL from '../../../data/global';
import '../../../data/global';

export default ({ route, navigation }) => {
    
    const dispatch = useDispatch();

    const favoritesSerie = useSelector((state) => state.favoriteSerie.favoritesSerie);
    const favoritesEpisode = useSelector((state) => state.favoriteEpisode.favoritesEpisode);
    
    const { idSerie } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [serie, setSerie] = useState(undefined);
    const [saisons, setSaisons] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [serieSimulaire, setSerieSimulaire] = useState([]);

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::useEffect()");

        fetchSerie();
        fetchSaisons();
    }, []);

    const fetchSerie = async () => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::fetchSerie()");
        
        setIsLoading(true);
        let data = await getSerie(idSerie);
        if (data.code == 1) {
            setSerie(data.serie);
            const genre_ids = data.serie.genres.map(genre => genre.id).join();
            if(genre_ids.length > 0)
                fetchSomeGenresSeries(genre_ids);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("SerieDetail::useEffect()::fetchSeries()::data " + JSON.stringify(data));
    }
    
    const fetchSaisons = async () => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::fetchSaisons()");

        setIsLoading(true);
        let data = await getSaisons(idSerie);
        if (data.code == 1) {
            setSaisons(data.saisons);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("SerieDetail::useEffect()::fetchSaisons()::data " + JSON.stringify(data));
    }
    
    const fetchEpisodes = async (idSaison) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::fetchEpisodes()");

        setIsLoading(true);
        let data = await getEpisodes(idSerie, idSaison);
        if (data.code == 1) {
            setEpisodes(data.episodes);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("SerieDetail::useEffect()::fetchEpisodes()::data " + JSON.stringify(data));
    }

    const fetchSomeGenresSeries = async (genre_ids) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::fetchSomeGenresSeries()");

        setIsLoading(true);
        let data = await getSomeGenresSeries(genre_ids); 
        if (data.code == 1) {
            setSerieSimulaire(data.series);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("SerieDetail::fetchSomeGenresSeries()::data " + JSON.stringify(data));
    }
    
    const handleSerieSimilaireItemPress = (idSerie) => {
        navigation.setParams({
            idSerie: idSerie
        });
        fetchSerie();
        fetchSaisons();
    };
    
    const handleEpisodeItemPress = (idEpisode) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log('SerieDetail::handleEpisodeItemPress => '+idEpisode);

        navigation.navigate('EpisodeDetail', {
            idEpisode: idEpisode
        });
    };

    const handleFavoriteIconPress = (serie) => {
      dispatch({
            type: "TOGGLE_FAVORITE_SERIE",
            payload: serie
        });
    }

    const handleSaisonItemSelected = (idSaison) => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieDetail::handleSaisonItemSelected()=> "+idSaison);
        if(idSaison > 0)
            fetchEpisodes(idSaison)
    }

    const isFavorite = (serie_id) => {
        const favoriteSerieIndex = favoritesSerie.findIndex(item => item.id === serie_id)
        return favoriteSerieIndex !== -1 ? true : false;
    }

    const isFavoriteEpisode = (episode_id) => {
        const favoriteEpisodeIndex = favoritesEpisode.findIndex(item => item.id === episode_id)
        return favoriteEpisodeIndex !== -1 ? true : false;
    }
    
    const onShare = async (serie) => {
        try {
          const result = await Share.share({
            message:
              'Diabarani | Je vous partage un serie interressant ' + global.SERVER_ADDRESS+serie.id,
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
      
    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <FlatList style={{ flex: 1 }}
                ListHeaderComponent={
                    <>
                        <SerieDetail serie={serie} saisons={saisons} favoriteIconPress={handleFavoriteIconPress} isFavorite={isFavorite} onShare={onShare} saisonItemSelected={handleSaisonItemSelected} />
                        <Episodes episodes={episodes} episodeItemPress={handleEpisodeItemPress} isFavorite={isFavoriteEpisode} />
                        {serieSimulaire.length > 0 &&
                        <View style={styles.serie_simulaire_container}>
                            <Text style={styles.serie_simulaire_title}>Series simulaires</Text>
                        </View>
                        }
                    </>
                }
                data={serieSimulaire}
                renderItem={({item}) => <SerieSimilaireItem serie={item} handleSerieSimilaireItemPress={handleSerieSimilaireItemPress} />}
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
    serie_simulaire_container: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    serie_simulaire_title: {
        fontSize: 22,
        fontFamily: 'Helvetica',
        color: global.white,
        marginBottom: 5
    }
});