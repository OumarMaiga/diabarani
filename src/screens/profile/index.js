import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../services/user';
import { logout } from '../../../services/auth';
import * as GLOBAL from '../../../data/global';
import '../../../data/global';


const Profile = ({ navigation }) => {
    
    const user = useSelector((state) => state.user);
    
    const dispatch = useDispatch();
  
    const onLogoutPress = () => {
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Profil:onLogoutPress()");

        dispatch(logout())
    }
        if(user != undefined) {
            return (

                <SafeAreaView style={styles.main_container}>
                    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                    <View style={styles.title_container}>
                        <Text style={styles.title}>
                            Profil
                        </Text>
                    </View>
                    <View style={styles.info_user_section}>
                        <View style={styles.profil_image_section}>
                            <Image style={styles.profil_image}
                                source={require("../../../assets/movie-6.jpg")} />
                        </View>
                        <View style={styles.info_user}>
                            <Text style={styles.username}>
                                { user.first_name } { user.last_name }
                            </Text>
                            <Text style={styles.phone}>
                                { user.phone }
                            </Text>
                        </View>
                    </View>
                    <View style={styles.list_item_section}>
                        <Pressable style={styles.list_item}
                            onPress={() => navigation.navigate('EditProfile')}>
                            <MaterialCommunityIcons name="account" size={28} color={global.white} />
                            <Text style={styles.list_item_text}>
                                Modifier le profil
                            </Text>
                            <MaterialCommunityIcons style={styles.icon_list_item_next} 
                                name="chevron-right" size={28} color={global.lightGray} />
                        </Pressable>
                        <Pressable style={styles.list_item} onPress={() => navigation.navigate('Abonnement')}>
                                <MaterialCommunityIcons name="credit-card-outline" size={28} color={global.white} />
                                <Text style={styles.list_item_text}>
                                    Abonnement
                                </Text>
                                <MaterialCommunityIcons style={styles.icon_list_item_next} 
                                    name="chevron-right" size={28} color={global.lightGray} />
                        </Pressable>
                        <View style={[styles.list_item, {borderBottomWidth: 1, borderColor: global.gray,}]}>
                            <MaterialCommunityIcons name="lock" size={28} color={global.white} />
                            <Text style={styles.list_item_text}>
                                Changer de mot de passe
                            </Text>
                            <MaterialCommunityIcons style={styles.icon_list_item_next} 
                                name="chevron-right" size={28} color={global.lightGray} />
                        </View>
                    </View>
                        <TouchableOpacity style={styles.logout_item}
                            onPress={onLogoutPress}>
                            <MaterialCommunityIcons name="power" size={28} color="#444444" />
                            <Text style={styles.logout_item_text}>
                                Deconnexion
                            </Text>
                        </TouchableOpacity>
                </SafeAreaView>
            )
        } else return null
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
        marginBottom: 10,
    },
    info_user_section: {
        flexDirection: 'row',
    },
    profil_image_section: {
        position: 'relative',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    profil_image: {
        height: 120,
        width: 120,
        borderRadius: 75,
        backgroundColor: global.white
    },
    user_info: {
        marginLeft: 10,
    },
    username: {
        fontWeight: '600',
        color: global.lightGray,
        fontSize: 22
    },
    phone: {
        marginTop: 5,
        color: global.lightGray,
        fontSize: 18
    },
    list_item_section: {
        marginTop: 20,
    },
    list_item: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderColor: global.gray,
        flexDirection: 'row',
        alignItems: 'center',
    },
    list_item_text: {
        color: global.lightGray,
        fontSize: 18,
        marginLeft: 55,
        position: 'absolute',
    },
    icon_list_item_next: {
        flex: 1,
        position: 'absolute',
        right: 0,
    },
    logout_item: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: global.white,
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    logout_item_text: {
        color: '#444444',
        fontSize: 18,
        marginLeft: 10,
    },
})

export default Profile