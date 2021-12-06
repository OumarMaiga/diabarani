import * as React from 'react'
import { ScrollView, View, Text, Image, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../API/DiabaraniApi'
import { getToken, storeToken } from '../../utils/localStorage'

import { AuthContext } from '../Context'

class Connexion extends React.Component {
    static contextType = AuthContext

    constructor(props) {
        super(props)
        this.loginText = ""
        this.passwordText = ""
        this.state = {
            userData: {},
            isLoading: false,
            errorMessage: ""
        }
        
    }

    _loginTextInputChanged(text) {
        this.loginText = text
    }
    _passwordTextInputChanged(text) {
        this.passwordText = text
    }

    _login() {
        if(this.loginText.length > 0 && this.passwordText.length > 0) {
            this.setState({ isLoading: true });
            signIn(this.loginText, this.passwordText)
            /*login(this.loginText, this.passwordText).then(data => {
                if(data.code == 1) {
                    //console.log('User LogIn');
                    storeToken(data.user);
                } else {
                    alert('Identifiant non trouvé');
                    console.log(data.error_message);
                }
            })*/
            this.setState({ isLoading: false });
        } else {
            alert('Veuillez remplir les champs');
        }
    }
    
    _displayLoading() {
        if(this.state.isLoading) {
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    _displayError() {
        if(this.state.errorMessage.length > 0) {
            return(
                <View>
                    <Text style={styles.error_container}>
                        {this.state.errorMessage}
                    </Text>
                </View>
            )
        }
    }


    render() {
        const { signIn } = this.context;
        return (
            <ScrollView style={styles.main_container}>
                <Text style={styles.auth_title}>Connexion</Text>
                <TextInput placeholder="Email / Telephone"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._loginTextInputChanged(text)}  />
                <TextInput secureTextEntry
                    placeholder="Mot de passe"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._passwordTextInputChanged(text)}
                    onSubmitEditing={() => signIn(this.loginText, this.passwordText)} />
                <Pressable onPress={() => this.props.navigation.navigate('MotDePasseOublie')}>
                    <Text style={styles.forget_password_link}
                        textContentType='password'>
                        Mot de passe oublié ?
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => signIn(this.loginText, this.passwordText )}>
                    <Text style={styles.button_text}>CONNEXION</Text>
                </Pressable>
                {this._displayError()}
                <View style={styles.auth_media_container}>
                    <Text style={styles.auth_media_text}>-- Ou avec --</Text>
                    <View style={styles.media_image_container}>
                        <Image source={require("../../Images/google.jpg")}
                            style={styles.icon_social} />
                        <Image source={require("../../Images/facebook.jpg")}
                            style={styles.icon_social} />
                    </View>
                        <Text  style={styles.auth_media_text}>Vous n'avez pas de compte ? <Pressable onPress={() => this.props.navigation.navigate('Inscription')}><Text style={styles.link_underscore}>Inscription</Text></Pressable></Text>
                </View>
                {this._displayLoading()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#4D4D4D',
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
            color: '#EEEEEE'
      },
      text_input: {
          marginTop: 10,
          paddingLeft: 5,
          borderBottomColor: '#CFCFCF',
          height: 50,
          borderBottomWidth: 1,
          fontSize: 18,
          color: '#EEEEEE'
      },
      forget_password_link: {
        textAlign: 'right',
        marginTop: 10,
        color: "#3A96F2",
        textDecorationLine: 'underline',
        fontSize: 14,
        fontStyle: 'italic'
    },
    button: {
        width: '100%',
        backgroundColor: '#ECBB04',
        textAlign: 'center',
        borderRadius: 7,
        padding: 10,
        marginTop: 30,
        marginBottom: 20,
    },
    button_text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
    auth_media_container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        color: "#fff"
    },
    auth_media_text: {
        color: '#fff'
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
        color: '#3A96F2'
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