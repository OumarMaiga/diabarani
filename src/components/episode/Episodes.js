import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { EpisodeItem } from './EpisodeItem';

export const Episodes = ({episodes, episodeItemPress, isFavorite}) => (
    <View style={styles.section_container}>
        <FlatList
            data={episodes}
            renderItem={({item}) => <EpisodeItem episode={item} episodeItemPress={episodeItemPress} isFavorite={isFavorite} />}
            keyExtractor={(item,index) => index}
            showsHorizontalScrollIndicator={false} />
    </View>
)
const styles = StyleSheet.create({
    section_container: {
        marginTop: 10,
    }
});
