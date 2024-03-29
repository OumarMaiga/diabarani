import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, StatusBar,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { Loading } from '../../../components/Loading';

const MotDePasseOublie = ({ navigation }) => {
    
    const [isLoading, setIsLoading] = useState(false);

    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.auth_title}>Mot de passe oublié</Text>
                        <TextInput placeholder="Email / Telephone"
                            style={styles.text_input}
                            placeholderTextColor={global.gray} />
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Verification')}>
                            <Text style={styles.button_text}>ENVOYER</Text>
                        </Pressable>
                    </View>
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
      }
})

export default MotDePasseOublie