import React, { useState } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, StatusBar, TouchableOpacity,
    ActivityIndicator, FlatList, Pressable } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";

const Bibliotheque = ({ navigation }) => {

    const towatchsFilm = useSelector((state) => state.toWatch.towatchsFilm);
    const [isLoading, setIsLoading] = useState();

    const DisplayLoading = () => {
        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else return null
    };
    
    const handleItemPress = (idFilm) => {
        navigation.navigate('FilmDetail', {
            idFilm: idFilm
        });
    };
    
    const Historique = () => {
        return(
                <View style={styles.section_container}>
                    <Text style={styles.subtitle_text}>
                        Recent
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => navigation.navigate('FilmDetail') }>
                            <Image style={styles.historique_image}
                                source={require("../../../assets/image-1.jpg")} />
                        </TouchableOpacity>
                        <Image style={styles.historique_image}
                            source={require("../../../assets/image-2.jpg")} />
                        <Image style={styles.historique_image}
                            source={require("../../../assets/image-1.jpg")} />
                        <Image style={styles.historique_image}
                            source={require("../../../assets/image-2.jpg")} />
                    </ScrollView>
                </View>
        )
    }

    const ToWatchItem = ({film, handleItemPress}) => (
        <Pressable onPress={() => handleItemPress(film.id) }>
            <Image style={styles.to_watch_image}
                source={{ uri: global.SERVER_ADDRESS+film.poster_path }} />
        </Pressable>
    );
    
    const renderItem = ({ item }) => (
        <ToWatchItem film={item} handleItemPress={handleItemPress} />
    );

    const ToWatch = () => {
        return(
                <View style={styles.section_container}>
                    <Text style={styles.subtitle_text}>
                        A regarder
                    </Text>                        
                    <View style={styles.to_watch_container}>
                        <FlatList
                            contentContainerStyle={styles.to_watch_container}
                            data={towatchsFilm}
                            renderItem={renderItem}
                            keyExtractor={item => item.id} />
                    </View>
                </View>
        )
    }

    return (    
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Bibliotheque
                    </Text>
                </View>
                <Historique/>
                <ToWatch/>
            </ScrollView>
            <DisplayLoading/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: global.darkGray,
    },
    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: global.white,
        fontWeight: 'bold',
        //marginBottom: 10,
    },
    section_container: {
        marginTop: 10,
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
    historique_image: {
        marginLeft: 10,
        marginRight: 10,
        height:100,
        width: 150,
        borderRadius: 7,
        backgroundColor: global.white
    },
    to_watch_container: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //marginLeft: 10,        
        //marginRight: 10,
    },
    to_watch_image: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 120,
        minWidth: '30%',
        backgroundColor: global.white
    },

})

export default Bibliotheque