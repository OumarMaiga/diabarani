import React, { useState } from 'react'
import { View, Text, Image, TextInput, Pressable, StyleSheet } from 'react-native'

const ChangerMotDePasse = ({ navigation }) => {
    return (
        <View style={styles.main_container}>
            <Text style={styles.auth_title}>Changer le mot de passe</Text>
            <TextInput placeholder="Nouveau mot de passe"
                style={styles.text_input}
                placeholderTextColor={global.gray} />
            <TextInput placeholder="Nouveau mot de passe confirmé"
                style={styles.text_input}
                placeholderTextColor={global.gray} />
            <Pressable style={styles.button} onPress={navigation.navigate('Connexion')}>
                <Text style={styles.button_text}>CHANGER</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: global.darkGray,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
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
      }
})

export default ChangerMotDePasse