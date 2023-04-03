import React from 'react';
import { Pressable, Image, StyleSheet, Text } from 'react-native';
import '../../../data/global';

export const SerieSimilaireItem = ({serie, handleSerieSimilaireItemPress}) => (
    <Pressable onPress={() => handleSerieSimilaireItemPress(serie.id) }>
        <Image style={styles.detail_similaire_image}
            source={{ uri: global.SERVER_ADDRESS+serie.poster_path }} />
    </Pressable>
)
const styles = StyleSheet.create({
    detail_similaire_image: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        minWidth: '30%',
        backgroundColor: global.white,
    },
});