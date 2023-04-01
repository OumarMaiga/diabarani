import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import '../../../data/global';

export const NewSerieItem = ({serie, serieItemPress}) => (
    <Pressable onPress={() => serieItemPress(serie.id) }>
        <Image style={styles.new_image}
            source={{ uri: global.SERVER_ADDRESS+serie.poster_path }} />
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