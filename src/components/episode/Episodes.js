import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { EpisodeItem } from './EpisodeItem';

export const Episodes = ({episodes, episodeItemPress}) => (
    <View style={styles.section_container}>
        <FlatList
            data={episodes}
            renderItem={({item}) => <EpisodeItem episode={item} episodeItemPress={episodeItemPress} />}
            keyExtractor={(item,index) => index}
            showsHorizontalScrollIndicator={false} />
        <View style={styles.detail_simulaire_container}>
            <Text style={styles.detail_simulaire_title}>Series simulaires</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    section_container: {
        //padding: 10,
        marginTop: 10,
        marginBottom: 10,
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
