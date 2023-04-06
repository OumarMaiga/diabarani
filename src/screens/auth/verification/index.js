import React, {useState} from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, StatusBar,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { Loading } from '../../../components/Loading';

const Verification = ({ navigation }) => {
    
    const [isLoading, setIsLoading] = useState(false);

    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
    
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.auth_title}>Verification de numéro</Text>
                        <Text style={{ color: global.white }}>Un code de 4 chiffres vous a été envoyer au 223 71 31 65 44</Text>
                        <View style={styles.number_container}>
                            <TextInput 
                                style={styles.number_input}
                                placeholderTextColor={global.white}
                                autoFocus='true'
                                maxLength='1'
                                textContentType='telephoneNumber'
                                keyboardType='numeric' />
                            <TextInput
                                style={styles.number_input}
                                maxLength='1'
                                textContentType='telephoneNumber'
                                keyboardType='numeric' />
                            <TextInput 
                                style={styles.number_input}
                                maxLength='1'
                                textContentType='telephoneNumber'
                                keyboardType='numeric' />
                            <TextInput 
                                style={styles.number_input}
                                maxLength='1'
                                textContentType='telephoneNumber'
                                keyboardType='numeric' />
                        </View>
                        <Text style={styles.send_link}>Re-envoyer le code</Text>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ChangerMotDePasse')}>
                            <Text style={styles.button_text}>VERIFICATION</Text>
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
      number_container: {
          flexDirection: 'row',
          marginTop: 20,
      },
      number_input: {
          marginLeft: 10,
          marginRight: 10,
          textAlign: 'center',
          backgroundColor: global.gray,
          width: 60,
          height: 80,
          color: global.white,
          fontSize: 32
      },
      send_link: {
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
      }
})

export default Verification