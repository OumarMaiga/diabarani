import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NewSerieItem } from './NewSerieItem';

export const NewSerie = ({newSeries, handleSerieItemPress}) => {
    return (
        <View style={styles.section_container}>
            <Text style={styles.subtitle_text}>
                Nouvelles series
            </Text>
            <FlatList
                data={newSeries}
                renderItem={({item}) => <NewSerieItem film={item} handleSerieItemPress={handleSerieItemPress} />}
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
