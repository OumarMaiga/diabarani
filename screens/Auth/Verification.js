import * as React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

const Verification = ({ navigation }) => {
    return (
        <View style={styles.main_container}>
            <Text style={styles.auth_title}>Verification de numéro</Text>
            <Text style={{ color: '#fff' }}>Un code de 4 chiffres vous a été envoyer au 223 71 31 65 44</Text>
            <View style={styles.number_container}>
                <TextInput 
                    style={styles.number_input}
                    placeholderTextColor="#EEEEEE"
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
      number_container: {
          flexDirection: 'row',
          marginTop: 20,
      },
      number_input: {
          marginLeft: 10,
          marginRight: 10,
          textAlign: 'center',
          backgroundColor: '#AAAAAA',
          width: 60,
          height: 80,
          color: '#EEEEEE',
          fontSize: 32
      },
      send_link: {
        textAlign: 'right',
        marginTop: 10,
        color: '#3A96F2',
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
      }
})

export default Verification