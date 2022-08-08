import React, { useState, useEffect } from 'react'
import { TextInput, View, Text, Image, Pressable, StyleSheet, StatusBar, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser, updateUser } from '../API/DiabaraniApi';
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import * as GLOBAL from '../data/global';
import '../data/global';

const EditProfil = ({ navigation }) => {
    
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { width, height } = Dimensions.get('window');
    const [rightPosition, setRightPosition] = useState(() => (width/2)-67.5);
        

    useEffect(() => {

        if (global.debug >= GLOBAL.LOG.DEBUG) console.log("EditProfil::useEffect()");

            if(user != undefined)
            {
                setFirst_name(user.first_name);
                setLast_name(user.last_name);
                setEmail(user.email);
                setPhone(user.phone);
            }
        

    }, []);

    const DisplayLoading = () => {
        if(isLoading) {
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else return null
    };
    
            /* Sign Up with Backend API */
            /*await signUp({firstname: firstName, lastname: lastName, username: userName,
                email: email, password: password, birthday: birthday, gender: genderBackend});*/
    const onUpdateButtonPress = async () => {
        let data = { first_name: first_name, last_name: last_name, email: email, phone: phone };
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("EditProfil::onUpdateButtonPress() => "+JSON.stringify(data));
        
        if(user != undefined)
        {
            setIsLoading(true);
            let token = null;
            token = user.token;
            const result = await updateUser(token, user.id, data);

            if (result.code == 1)
            {
                dispatch({
                    type: "UPDATE_USER",
                    payload: result.user
                });

                alert ("Mise à jour effectué");
                navigation.goBack();
            } 
            else
            {
                alert ("Mise à jour echoué");

            }

            if (global.debug >= GLOBAL.LOG.INFO) console.log("EditProfil:onUpdateButtonPress() => result "+JSON.stringify(result));
            setIsLoading(false);
        }
    };


    return (
        <View style={styles.main_container}>
            <SafeAreaView>
                <ScrollView>
                    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                    <View style={styles.title_container}>
                        <Text style={styles.title}>
                            Profil
                        </Text>
                    </View>
                    <View style={styles.profil_image_section}>
                        <Image style={styles.profil_image}
                        source={require("../Images/movie-6.jpg")} />
                        <MaterialCommunityIcons style={[styles.icon_camera, {right: rightPosition}]} 
                            name="camera" size={36} color="#B8B8B8" />
                    </View>
                    <View style={styles.form_container}>
                        <TextInput placeholder="Prenom"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            value={first_name}
                            onChangeText={(text) => setFirst_name(text)} />
                        <TextInput placeholder="Nom"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            value={last_name}
                            onChangeText={(text) => setLast_name(text)} />
                        <TextInput placeholder="Email"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                        <TextInput placeholder="Telephone"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            value={phone}
                            onChangeText={(text) => setPhone(text)} />
                        <Pressable style={styles.button} onPress={onUpdateButtonPress}>
                            <Text style={styles.button_text}>MODIFIER</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <DisplayLoading/>
        </View>
    );
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
    profil_image_section: {
        display: 'flex',
        alignItems: 'center'
    },
    profil_image: {
        height: 120,
        width: 120,
        borderRadius: 75,
        backgroundColor: global.white
    },
    icon_camera: {
        position: 'absolute',
        bottom: -5,
    },
    form_container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    text_input: {
        marginTop: 10,
        paddingLeft: 5,
        borderBottomColor: global.lightGray,
        height: 50,
        borderBottomWidth: 1,
        fontSize: 18,
        color: global.white
    },
    button: {
        width: '100%',
        backgroundColor: global.darkYellow,
        textAlign: 'center',
        borderRadius: 7,
        padding: 10,
        marginTop: 30,
        marginBottom: 20,
    },
    button_text: {
        textAlign: 'center',
        color: global.white,
        fontSize: 24,
        fontWeight: '600',
    },
    loading_container: {
        position: 'absolute',
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" ,
        top: 100,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

export default EditProfil