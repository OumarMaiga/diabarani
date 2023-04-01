import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RecentFilmItem } from './RecentFilmItem';

export const Historique = ({inRecentsFilm, filmItemPress}) => {
    return (
        <View style={styles.section_container}>
            <Text style={styles.subtitle_text}>
                Continuer à regarder
            </Text>
            <View horizontal showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={inRecentsFilm}
                    renderItem={({item}) => <RecentFilmItem film={item} filmItemPress={filmItemPress} />}
                    keyExtractor={(item,index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    section_container: {
        //padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    subtitle_text: {
      marginLeft: 10,
      marginRight: 10,
      flex: 1,
      marginBottom: 10,
      fontSize: 18,
      fontFamily: 'Verdana',
      color: global.white,
    },
});
