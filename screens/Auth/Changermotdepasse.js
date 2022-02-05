import React, { useState } from 'react'
import { View, Text, Image, TextInput, Pressable, StyleSheet } from 'react-native'

const ChangerMotDePasse = ({ navigation }) => {
    return (
        <View style={styles.main_container}>
            <Text style={styles.auth_title}>Changer le mot de passe</Text>
            <TextInput placeholder="Nouveau mot de passe"
                style={styles.text_input}
                placeholderTextColor="#AAAAAA" />
            <TextInput placeholder="Nouveau mot de passe confirmé"
                style={styles.text_input}
                placeholderTextColor="#AAAAAA" />
            <Pressable style={styles.button} onPress={navigation.navigate('Connexion')}>
                <Text style={styles.button_text}>CHANGER</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
        marginTop: 20,
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
      }
})

export default ChangerMotDePasse