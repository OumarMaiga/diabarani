import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, Pressable, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { logout } from "../API/DiabaraniApi"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../API/DiabaraniApi";
import * as GLOBAL from '../data/global'
import '../data/global'


const Profil = ({ navigation }) => {

    const [user, setUser] = React.useState(undefined);
    const [userId, setUserId] = React.useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (global.debug >= GLOBAL.LOG.DEBUG) 
        {
            console.log("Profil::useEffect()");
        }
        const fetchUser = async () =>
        {
            if("auth.user.id" == "userId")
            {
                let token = null;
                token = auth.token;
                if(token != null)
                {
                    let data = await getUser(token, 17);
                    console.log("date: "+JSON.stringify(data));
                    if(data.code == 1) {
                        setUser(data.user);
                    } else {
                        alert ("Utilisateur introuvable");
                    }
                }
            }
            else
            {
                setUser(auth.user);
            }
        }
        fetchUser();

        if (global.debug >= GLOBAL.LOG.INFO) 
        {
            console.log("Profil::useEffect()::user "+JSON.stringify(user));
        }
    });
    

    const onLogoutPress = () => {
        if (global.debug >= GLOBAL.LOG.DEBUG) 
        {
            console.log("Profil:onLogoutPress()");
        }

        dispatch(logout())
    }
    if(user != undefined) {
        return (
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Profil
                    </Text>
                </View>
                <View style={styles.info_user_section}>
                    <View style={styles.profil_image_section}>
                        <Image style={styles.profil_image}
                        source={require("../Images/movie-6.jpg")} />
                        <MaterialCommunityIcons style={styles.icon_camera} 
                            name="camera" size={36} color="#B8B8B8" />
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
                        onPress={() => navigation.navigate('EditProfil')}>
                        <MaterialCommunityIcons name="account" size={28} color="#EEEEEE" />
                        <Text style={styles.list_item_text}>
                            Modifier le profil
                        </Text>
                        <MaterialCommunityIcons style={styles.icon_list_item_next} 
                            name="chevron-right" size={28} color="#CFCFCF" />
                    </Pressable>
                    <Pressable style={styles.list_item} onPress={() => navigation.navigate('Abonnement')}>
                            <MaterialCommunityIcons name="credit-card-outline" size={28} color="#EEEEEE" />
                            <Text style={styles.list_item_text}>
                                Abonnement
                            </Text>
                            <MaterialCommunityIcons style={styles.icon_list_item_next} 
                                name="chevron-right" size={28} color="#CFCFCF" />
                    </Pressable>
                    <View style={[styles.list_item, {borderBottomWidth: 1, borderColor: '#B8B8B8',}]}>
                        <MaterialCommunityIcons name="lock" size={28} color="#EEEEEE" />
                        <Text style={styles.list_item_text}>
                            Changer de mot de passe
                        </Text>
                        <MaterialCommunityIcons style={styles.icon_list_item_next} 
                            name="chevron-right" size={28} color="#CFCFCF" />
                    </View>
                </View>
                    <TouchableOpacity style={styles.logout_item}
                        onPress={onLogoutPress}>
                        <MaterialCommunityIcons name="power" size={28} color="#444444" />
                        <Text style={styles.logout_item_text}>
                            Deconnexion
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    } else return null
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
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
        backgroundColor: '#EEEEEE'
    },
    icon_camera: {
        position: 'absolute',
        bottom: -5,
        right: -5,
    },
    user_info: {
        marginLeft: 10,
    },
    username: {
        fontWeight: '600',
        color: '#CFCFCF',
        fontSize: 22
    },
    phone: {
        marginTop: 5,
        color: '#CFCFCF',
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
        borderColor: '#B8B8B8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    list_item_text: {
        color: '#CFCFCF',
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
        backgroundColor: '#EEEEEE',
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

export default Profil