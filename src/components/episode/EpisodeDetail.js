import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from "react-native-picker-select";
import '../../../data/global';

export const EpisodeDetail = ({episode, serie, saison, saisons, _onLoad, favoriteIconPress, isFavorite, onShare, saisonItemSelected}) => (
    <>
        <Video style={styles.background_video}
            source={{
                uri: episode && global.SERVER_ADDRESS+episode.video_path
            }}
            useNativeControls
            resizeMode="contain"
            posterSource={{uri: episode && global.SERVER_ADDRESS+episode.cover_path}}
            //usePoster={true}
            onLoad={() => _onLoad()} />
        <View style={styles.detail_container}>
            <Text style={styles.detail_title}>
                { episode?.title }
            </Text>
            <Text style={styles.detail_genre}>
                { serie && serie.genres.map(genre => genre.libelle).join(" - ") }
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                <View style={styles.detail_rate}>
                    <MaterialCommunityIcons name="star" size={28} color={global.white} />
                    <Text style={styles.detail_rate_text}>
                        6.4
                    </Text>
                </View>
                <MaterialCommunityIcons name="eye" size={28} color={global.lightGray} />
                <Text style={styles.detail_view_count}>605</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Pressable onPress={() => favoriteIconPress(episode)} style={{ marginRight: 10, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="heart" size={28} color={episode && isFavorite(episode.id) ? global.Yellow : global.lightGray} />
                    <Text style={styles.detail_icon_text}>{episode && isFavorite(episode.id) ? "J'aime" : "J'aime pas"}</Text>
                </Pressable>
                <Pressable onPress={() => onShare(episode)} style={{ marginRight: 10, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="share" size={28} color={global.lightGray} />
                    <Text style={styles.detail_icon_text}>Partager</Text>
                </Pressable>
            </View>
            <Text style={styles.detail_overview}>
                { episode?.overview }
            </Text>
        </View>
        <RNPickerSelect  //style={styles.saison_select}
            value={saisons[0]?.id}
            onValueChange={(item) =>
                saisonItemSelected(item)
            }
            items={saisons.map((item) => ({ label: item.title, value: item.id}) ) } />
        <View style={styles.detail_simulaire_container}>
            <Text style={styles.detail_simulaire_title}>Series simulaires</Text>
        </View>
    </>
)
const styles = StyleSheet.create({
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