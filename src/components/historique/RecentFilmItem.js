import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import '../../../data/global';

export const RecentFilmItem = ({film, handleFilmItemPress}) => (
    <Pressable onPress={() => handleFilmItemPress(film.id) }>
        <Image style={styles.historique_image}
            source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
    </Pressable>
)
const styles = StyleSheet.create({
    historique_image: {
        marginLeft: 10,
        marginRight: 10,
        height: 90,
        width: 140,
        borderRadius: 7,
        backgroundColor: global.white
    }
});