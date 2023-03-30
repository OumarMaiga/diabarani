import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import '../../../data/global';

export const NewFilmItem = ({film, handleFilmItemPress}) => (
    <Pressable onPress={() => handleFilmItemPress(film.id) }>
        <Image style={styles.new_image}
            source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
    </Pressable>
)
const styles = StyleSheet.create({
    new_image: {
        marginLeft: 10,
        marginRight: 10,
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: global.white
    },
});