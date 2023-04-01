import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import '../../../data/global';

export const UpcomingFilmItem = ({film, filmItemPress}) => (
    <Pressable onPress={() => filmItemPress(film.id) }>
        <Image style={styles.upcoming_image}
            source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
    </Pressable>
)
const styles = StyleSheet.create({
    upcoming_image: {
        marginLeft: 10,
        marginRight: 10,
        height: 190,
        width: 160,
        backgroundColor: global.white
    },
});