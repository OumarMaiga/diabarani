import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../../data/global';

export const FilmDetail = ({film, _onLoad, favoriteIconPress, isFavorite, onShare}) => (
    <>
        <Video style={styles.background_video}
        source={{
            uri: film && global.SERVER_ADDRESS+film.video_path
        }}
        useNativeControls
        resizeMode="contain"
        posterSource={{uri: film && global.SERVER_ADDRESS+film.cover_path}}
        //usePoster={true}
        shouldPlay={true}
        onLoad={() => _onLoad()}
        />
        <View style={styles.detail_container}>
        <Text style={styles.detail_title}>
            { film?.title }
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
            <Pressable onPress={() => favoriteIconPress(film)} style={{ marginRight: 10, alignItems: 'center' }}>
                <MaterialCommunityIcons name="heart" size={28} color={film && isFavorite(film.id) ? global.Yellow : global.lightGray} />
                <Text style={styles.detail_icon_text}>{film && isFavorite(film.id) ? "J'aime" : "J'aime"}</Text>
            </Pressable>
            <Pressable onPress={() => onShare(film)} style={{ marginRight: 10, alignItems: 'center' }}>
                <MaterialCommunityIcons name="share" size={28} color={global.lightGray} />
                <Text style={styles.detail_icon_text}>Partager</Text>
            </Pressable>
        </View>
        <Text style={styles.detail_overview}>
            { film?.overview }
        </Text>
        </View>
        <View style={styles.detail_simulaire_container}>
            <Text style={styles.detail_simulaire_title}>Film simulaires</Text>
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