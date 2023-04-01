import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UpcomingFilmItem } from './UpcomingFilmItem';

export const UpcomingFilmsComponent = ({upcomingFilms, filmItemPress}) => {
    return (
        <View style={styles.section_container}>
            <Text style={styles.coming_title}>
                Bientôt
            </Text>
            <FlatList
                data={upcomingFilms}
                renderItem={({item}) => <UpcomingFilmItem film={item} filmItemPress={filmItemPress} />}
                keyExtractor={(item,index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}
const styles = StyleSheet.create({
    section_container: {
        //padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    coming_title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: global.white,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
