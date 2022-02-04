import * as React from 'react'
import { ScrollView, View, Text, Image, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import { register } from '../../API/DiabaraniApi'

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        this.prenomText = ""
        this.nomText = ""
        this.emailText = ""
        this.phoneText = ""
        this.passwordText = ""
        this.passwordConfirmText = ""

        this.state = {
            isLoading: false
        }
    }

    _prenomTextInputChanged(text) {
        this.prenomText = text
    }
    _nomTextInputChanged(text) {
        this.nomText = text
    }
    _emailTextInputChanged(text) {
        this.emailText = text
    }
    _phoneTextInputChanged(text) {
        this.phoneText = text
    }
    _passwordTextInputChanged(text) {
        this.passwordText = text
    }
    _passwordConfirmTextInputChanged(text) {
        this.passwordConfirmText = text
    }

    _register() {
        if(this.phoneText.length > 0 && this.passwordText.length > 0) {
            if (this.passwordText.length >= 8) {
                if (this.passwordText == this.passwordConfirmText) {
                    this.setState({ isLoading: true });
                    register(this.prenomText, this.nomText, this.phoneText, this.emailText, this.passwordText, this.passwordConfirmText).then(data => {
                        if(data.code == 1) {
                            alert('User inscrit');
                        } else {
                            alert(data.message);
                        }
                        this.setState({ isLoading: false });
                    })
                } else {
                    alert('Les mots de passe doivent être identique');
                }
            } else {
                alert('Mot de passe doit être supérieur ou égal à 8 caractères');
            }
        } else {
            alert ('Les champs téléphone et Mot de passe réquis');
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


    render() {
        const { signUp } = this.context
        return (
            <ScrollView style={styles.main_container}>
                <Text style={styles.auth_title}>Inscription</Text>
                <TextInput placeholder="Prenom"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._prenomTextInputChanged(text)} />
                <TextInput placeholder="Nom"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._nomTextInputChanged(text)} />
                <TextInput placeholder="Email"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._emailTextInputChanged(text)} />
                <TextInput placeholder="Telephone"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._phoneTextInputChanged(text)} />
                <TextInput secureTextEntry
                    placeholder="Mot de passe"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._passwordTextInputChanged(text)} />
                <TextInput secureTextEntry
                    placeholder="Mot de passe confirmer"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"
                    onChangeText={(text) => this._passwordConfirmTextInputChanged(text)} />
                <Pressable style={styles.button} onPress={() => signUp(this.prenomText, this.nomText, this.phoneText, this.emailText, this.passwordText, this.passwordConfirmText)}>
                    <Text style={styles.button_text}>INSCRIPTION</Text>
                </Pressable>
                <View style={styles.auth_media_container}>
                    <Text style={styles.auth_media_text}>-- Ou avec --</Text>
                    <View style={styles.media_image_container}>
                        <Image source={require("../../Images/google.jpg")}
                            style={styles.icon_social} />
                        <Image source={require("../../Images/facebook.jpg")}
                            style={styles.icon_social} />
                    </View>
                        <Text  style={styles.auth_media_text}>Vous êtes déjà inscrit ? <Pressable onPress={() => navigation.navigate('Connexion')}><Text style={styles.link_underscore}>Connexion</Text></Pressable></Text>
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
          marginBottom: 10,
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
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#3A96F2'
      }
})

export default Inscription