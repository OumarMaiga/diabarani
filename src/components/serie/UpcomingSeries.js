import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UpcomingSerieItem } from './UpcomingSerieItem';

export const UpcomingSeriesComponent = ({upcomingSeries, serieItemPress}) => {
    return (
        <View style={styles.section_container}>
            <Text style={styles.coming_title}>
                Bientôt
            </Text>
            <FlatList
                data={upcomingSeries}
                renderItem={({item}) => <UpcomingSerieItem serie={item} serieItemPress={serieItemPress} />}
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
