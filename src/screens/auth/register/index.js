import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, Pressable, StyleSheet, ActivityIndicator, StatusBar,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { register } from '../../../../services/auth';
import { useDispatch } from "react-redux";
import * as GLOBAL from '../../../../data/global';
import '../../../../data/global';
import { Loading } from '../../../components/Loading';

const Inscription = ({ navigation }) => {
    
    const dispatch = useDispatch();

    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onRegisterPress = async () => {
        
        if (global.debug >= GLOBAL.LOG.INFO) console.log("Inscription:onRegisterPress()");

        if(phone.length == 0 || password.length == 0) {
            alert ('Les champs téléphone et Mot de passe réquis');
            return;
        }

        if (password.length < 8) {
            alert('Mot de passe doit être supérieur ou égal à 8 caractères');
            return;
        }

        if (password != passwordConfirm) {
            alert('Les mots de passe doivent être identique');
            return;
        }

        setIsLoading(true);
        let data = await register({prenom, nom, phone, email, password, passwordConfirm})
        if (global.debug >= GLOBAL.LOG.ROOT)  console.log("Inscription:onRegisterPress()::data "+JSON.stringify(data));

        if(data.code == 1) {
            dispatch({
                type: "LOGIN",
                payload: data
            })
        } else {
            alert(data.message);
        }
        setIsLoading(false);

    }

    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.auth_title}>Inscription</Text>
                        <TextInput placeholder="Prenom"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setPrenom(text)} />
                        <TextInput placeholder="Nom"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setNom(text)} />
                        <TextInput placeholder="Email"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setEmail(text)} />
                        <TextInput placeholder="Telephone"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setPhone(text)} />
                        <TextInput secureTextEntry
                            placeholder="Mot de passe"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setPassword(text)} />
                        <TextInput secureTextEntry
                            placeholder="Mot de passe confirmer"
                            style={styles.text_input}
                            placeholderTextColor={global.gray}
                            onChangeText={(text) => setPasswordConfirm(text)} />
                        <Pressable style={styles.button} onPress={() => onRegisterPress()}>
                            <Text style={styles.button_text}>INSCRIPTION</Text>
                        </Pressable>
                        <View style={styles.auth_media_container}>
                            <Text style={styles.auth_media_text}>-- Ou avec --</Text>
                            <View style={styles.media_image_container}>
                                <Image source={require("../../../../assets/google.jpg")}
                                    style={styles.icon_social} />
                                <Image source={require("../../../../assets/facebook.jpg")}
                                    style={styles.icon_social} />
                            </View>
                                <Text  style={styles.auth_media_text}>Vous êtes déjà inscrit ? <Pressable onPress={() => navigation.navigate('Connexion')}><Text style={styles.link_underscore}>Connexion</Text></Pressable></Text>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <Loading isLoading={isLoading}/>
        </SafeAreaView>
    )
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
          marginBottom: 10,
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
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: global.darkBlue
      }
})

export default Inscription