import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../../data/global';

export const EpisodeItem = ({episode, episodeItemPress, isFavorite}) => (
    <Pressable onPress={() => episodeItemPress(episode.id) }>
        <View style={styles.item_container}>
            <Image style={styles.item_image} source={{ uri: global.SERVER_ADDRESS+episode.poster_path }} />
            <View style={styles.item_content}>
                <View style={styles.item_title_container}>
                    <Text style={styles.item_title}>
                        {episode.title}
                    </Text>
                    <MaterialCommunityIcons name="heart" size={24} color={episode && isFavorite(episode.id) ? global.Yellow : global.lightGray} />
                </View>
                <Text style={styles.item_date}>
                    22/12/2022
                </Text>
                <View style={styles.overview_container}>
                    <Text style={styles.overview_text} numberOfLines={3}>
                        { episode.overview }
                    </Text>
                </View>
            </View>
        </View>
    </Pressable>
)
const styles = StyleSheet.create({
    item_container: {
        margin: 10,
        flex: 1,
        flexDirection: 'row'
    },
    item_image: {
        backgroundColor: global.lightGray,
        width: 90,
        height: 120,
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
    item_date: {
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
    },
    overview_container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
    },
    overview_text: {
        marginTop: 10,
        fontSize: 18,
        color: global.lightGray,
    },
});