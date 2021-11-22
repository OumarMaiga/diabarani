import * as React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

class MotDePasseOublie extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.auth_title}>Mot de passe oublié</Text>
                <TextInput placeholder="Telephone"
                    style={styles.text_input}
                    placeholderTextColor="#AAAAAA"  />
                <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Verification')}>
                    <Text style={styles.button_text}>ENVOYER</Text>
                </Pressable>
            </View>
        )
    }
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

export default MotDePasseOublie