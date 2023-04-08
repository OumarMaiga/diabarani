import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View,  
    FlatList, Share, Text } from 'react-native';
import { EpisodeDetail, Episodes } from '../../components/episode';
import { SerieSimilaireItem } from '../../components/serie';
import { Loading } from '../../components/Loading';
import { getEpisode, getEpisodes, getSomeGenresSeries } from '../../../services/episode';
import { getSaisons } from '../../../services/saison';
import { useDispatch, useSelector } from "react-redux";
import * as GLOBAL from '../../../data/global';
import '../../../data/global';

export default ({ route, navigation }) => {

    const dispatch = useDispatch();

    const favoritesEpisode = useSelector((state) => state.favoriteEpisode.favoritesEpisode);
    
    const { idEpisode } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [episode, setEpisode] = useState(undefined);
    const [episodes, setEpisodes] = useState([]);
    const [serie, setSerie] = useState(undefined);
    const [saison, setSaison] = useState(undefined);
    const [saisons, setSaisons] = useState([]);
    const [serieSimulaire, setSerieSimulaire] = useState([]);

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::useEffect()");

        setIsLoading(true);

        getEpisode(idEpisode).then((data) => {
            if (data.code == 1) {
                setEpisode(data.episode);
                setSerie(data.episode.serie);
                setSaison(data.episode.saison);
                fetchEpisodes(data.episode.serie_id, data.episode.saison_id)
                fetchSaisons(data.episode.serie_id);
                const genre_ids = data.episode.serie.genres.map(genre => genre.id).join();
                if(genre_ids.lenght > 0)
                    fetchSomeGenresSeries(genre_ids);
            }
        }); 

        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("EpisodeDetail::useEffect()::data " + JSON.stringify(data));

    }, [idEpisode]);
    
    const fetchEpisodes = async (idSerie, idSaison) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::fetchEpisodes()");

        setIsLoading(true);
        let data = await getEpisodes(idSerie, idSaison);
        if (data.code == 1) {
            setEpisodes(data.episodes);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("fetchEpisodes()::data " + JSON.stringify(data));
    }

    const fetchSaisons = async (idSerie) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::fetchSaisons()");

        setIsLoading(true);
        let data = await getSaisons(idSerie);
        if (data.code == 1) {
            setSaisons(data.saisons);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("SaisonsDetail::useEffect()::fetchSaisons()::data " + JSON.stringify(data));
    }

    const fetchSomeGenresSeries = async (genre_ids) => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::fetchSomeGenresSeries()");

        setIsLoading(true);
        let data = await getSomeGenresSeries(genre_ids); 
        if (data.code == 1) {
            setSerieSimulaire(data.series);
        }
        setIsLoading(false);

        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("EpisodeDetail::fetchSomeGenresSeries()::data " + JSON.stringify(data));
    }

    
    const handleEpisodeItemPress = (idEpisode) => {
        navigation.setParams({
            idEpisode: idEpisode
        });
    };
    
    const handleSerieSimilaireItemPress = (idSerie) => {
        navigation.navigate('SerieDetail', {
            idSerie: idSerie
        });
    };

    const handleFavoriteIconPress = (episode) => {
      dispatch({
            type: "TOGGLE_FAVORITE_EPISODE",
            payload: episode
        });
    }

    const handleInRecent = (episode) => {
      dispatch({
            type: "ADD_INRECENT",
            payload: episode
        });
    }

    const handleSaisonItemSelected = (idSaison) => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::handleSaisonItemSelected()=> "+idSaison);
        fetchEpisodes(idSaison)
    }

    const isFavorite = (episode_id) => {
        const favoriteEpisodeIndex = favoritesEpisode.findIndex(item => item.id === episode_id)
        return favoriteEpisodeIndex !== -1 ? true : false;
    }
    
    const onShare = async (episode) => {
        try {
          const result = await Share.share({
            message:
              'Diabarani | Je vous partage un episode interressant ' + global.SERVER_ADDRESS+episode.id,
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
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeDetail::_onLoad()");
        handleInRecent(episode);
      };

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <FlatList style={{ flex: 1 }}
                ListHeaderComponent={
                    <>
                        <EpisodeDetail episode={episode} serie={serie} saison={saison}  saisons={saisons} _onLoad={_onLoad} favoriteIconPress={handleFavoriteIconPress} isFavorite={isFavorite} onShare={onShare} saisonItemSelected={handleSaisonItemSelected} />
                        <Episodes episodes={episodes} episodeItemPress={handleEpisodeItemPress} isFavorite={isFavorite}  />
                        {serieSimulaire.length > 0 &&
                        <View style={styles.detail_simulaire_container}>
                            <Text style={styles.detail_simulaire_title}>Series simulaires</Text>
                        </View>
                        }
                    </>
                }
                data={serieSimulaire}
                renderItem={({item}) => <SerieSimilaireItem serie={item} handleSerieSimilaireItemPress={handleSerieSimilaireItemPress} />}
                keyExtractor={(item,index) => index}
                numColumns={3}
                />
            <Loading isLoading={isLoading}/>
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