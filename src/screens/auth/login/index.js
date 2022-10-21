import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TextInput, Pressable, StyleSheet, ActivityIndicator , StatusBar,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { login } from '../../../../API/DiabaraniApi'
import { useDispatch, useSelector } from "react-redux"
import * as GLOBAL from '../../../../data/global'
import '../../../../data/global';


const Connexion = ({navigation}) => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const onLoginPress = async () => {

        if (global.debug >= GLOBAL.LOG.INFO) console.log("Connexion:onLoginPress()");

        if (username.length == 0 || password.length == 0) 
        {
            alert('Veuillez remplir les champs');
            return;
        }

        setIsLoading(true);
        let data = await login({username, password})
        if (global.debug >= GLOBAL.LOG.DEBUG)  console.log("Connexion:onLoginPress()::data "+JSON.stringify(data));

        if(data.code == 1) 
        {
            dispatch({
                type: "LOGIN",
                payload: data.user
            });
        }
         else 
        {
            alert('Identifiant non trouvé');
            //console.log(data.error_message);
        }
        setIsLoading(false);
    }
    
    const DisplayLoading = () => {
        if(isLoading) {
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else return null
    }

    const DisplayError = () => {
        if(errorMessage.length > 0) {
            return(
                <View>
                    <Text style={styles.error_container}>
                        {errorMessage}
                    </Text>
                </View>
            )
        } else return null
    }
    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                        <Text style={styles.auth_title}>Connexion</Text>
                        <TextInput placeholder="Email / Telephone"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setUsername(text)} />
                        <TextInput secureTextEntry
                            placeholder="Mot de passe"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setPassword(text)}
                            onSubmitEditing={onLoginPress} />
                        <Pressable onPress={() => navigation.navigate('MotDePasseOublie')}>
                            <Text style={styles.forget_password_link}
                                textContentType='password'>
                                Mot de passe oublié ?
                            </Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={onLoginPress}>
                            <Text style={styles.button_text}>CONNEXION</Text>
                        </Pressable>
                        <DisplayError/>
                        <View style={styles.auth_media_container}>
                            <Text style={styles.auth_media_text}>-- Ou avec --</Text>
                            <View style={styles.media_image_container}>
                                <Image source={require("../../../../assets/google.jpg")}
                                    style={styles.icon_social} />
                                <Image source={require("../../../../assets/facebook.jpg")}
                                    style={styles.icon_social} />
                            </View>
                                <Text  style={styles.auth_media_text}>Vous n'avez pas de compte ? <Pressable onPress={() => navigation.navigate('Inscription')}><Text style={styles.link_underscore}>Inscription</Text></Pressable></Text>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <DisplayLoading/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: global.darkGray,
        paddingLeft: 20,
        paddingRight: 20,
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
      },
      auth_title: {
          marginTop: 20,
          marginBottom: 20,
            fontSize: 32,
            color: global.white
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
      forget_password_link: {
        textAlign: 'right',
        marginTop: 10,
        color: global.darkBlue,
        textDecorationLine: 'underline',
        fontSize: 14,
        fontStyle: 'italic'
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
    auth_media_container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        color: global.white
    },
    auth_media_text: {
        color: global.white
    },
    media_image_container: {
        flexDirection: 'row',
    },
    icon_social: {
        width: 80,
        height: 60,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: 'gray',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,    
    },
    link_underscore: {
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        color: global.darkBlue
    },
    error_container: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 18,
        color: 'red'
    }
})

export default Connexion