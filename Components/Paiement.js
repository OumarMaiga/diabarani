import * as React from 'react'
import { View, Text, Pressable, StyleSheet, StatusBar } from 'react-native'

class Paiement extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <Text style={styles.title}>
                    Paiement
                </Text>
                <View style={styles.container}>
                    <Text style={styles.sub_title}>
                        Choisir votre moyen de paiement
                    </Text>
                    <Pressable style={[styles.button, {backgroundColor: '#F88F33'}]} onPress={()=> {}}>
                        <Text style={styles.button_text}>
                            ORANGE MONEY
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.button, {backgroundColor: '#F21212'}]} onPress={()=> {}}>
                        <Text style={styles.button_text}>
                            SAMA MONEY
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.button, {backgroundColor: '#F3F3F3'}]} onPress={()=> {}}>
                        <Text style={[styles.button_text, {color: '#4D4D4D'}]}>
                            VISA / MASTERCARD
                        </Text>
                    </Pressable>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    sub_title: {
        fontSize: 22,
        color: '#CFCFCF',
        marginBottom: 30,
    },
    button: {
        width: '70%',
        backgroundColor: '#ECBB04',
        textAlign: 'center',
        borderRadius: 7,
        padding: 10,
        marginBottom: 20,
    },
    button_text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
    },
})

export default Paiement