import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from "react-native-picker-select";
import '../../../data/global';

export const SerieDetail = ({serie, saisons, favoriteIconPress, isFavorite, onShare, saisonItemSelected}) => {
    const [itemSelected, setItemSelected] = useState(saisons[0]?.id);
    return(
        <>
            <Image style={styles.background_video}
                source={{
                    uri: serie && global.SERVER_ADDRESS+serie.cover_path
                }} />
            <View style={styles.container}>
                <Text style={styles.title}>
                    { serie?.title }
                </Text>
                <Text style={styles.detail_genre}>
                    { serie && serie.genres.map(genre => genre.libelle).join(" - ") }
                </Text>
                <Text style={styles.overview_text}>
                    { serie?.overview }
                </Text>
                <View style={styles.inputSelectContainer}>
                    <RNPickerSelect style={pickerSelectStyles}
                        value={itemSelected}
                        placeholder={{}}
                        onValueChange={(item) => {
                            setItemSelected(item)
                            saisonItemSelected(item);
                        }
                        }
                        items={saisons.map((item) => ({ label: item.title, value: item.id}) ) }
                        Icon={() => {
                            return <MaterialCommunityIcons name='chevron-down' size={36} color={global.black} style={{marginTop:20,marginRight:10,}} />;
                        }} />

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background_video: {
        height: 220,
        width: '100%',
        backgroundColor: global.gray
    },
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: global.white,
        fontFamily: "Helvetica",
    },
    detail_time: {
        color: global.lightGray,
    },
    detail_genre: {
        color: global.Yellow,
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginTop: 5,
    },
    overview_text: {
        marginTop: 20,
        fontSize: 18,
        color: global.lightGray,
    },
    inputSelectContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: 20,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: global.gray,
    backgroundColor: global.white,
    borderRadius: 50,
    color: global.black,
    paddingRight: 50, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginTop: 20,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'purple',
    backgroundColor: global.white,
    borderRadius: 50,
    color: global.black,
    paddingRight: 50, // to ensure the text is never behind the icon
  },
});