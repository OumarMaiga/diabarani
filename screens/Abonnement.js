import * as React from 'react'
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Abonnement = ({ navigation }) => {

    return (
        <View style={styles.main_container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <View>
                <Text style={styles.title}>
                    Abonnement
                </Text>
                <View style={styles.container}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.card_container}>
                            <Text style={styles.card_title}>
                                Premium
                            </Text>
                            <Text style={styles.card_price}>
                                20.000F
                            </Text>
                            <Text style={styles.card_text}>
                                1 ans d'abonnement
                            </Text>
                            <Text style={styles.card_text}>
                                Lorem Ipsum is simply dummy text 
                            </Text>
                            <Text style={styles.card_text}>
                                Voir toutes les films
                            </Text>
                            <Text style={styles.card_text}>
                                Lorem Ipsum is simply dummy text 
                            </Text>
                            <View style={styles.button_container}>
                                <Pressable style={styles.button} onPress={() => navigation.navigate('Paiement')}>
                                    <Text style={styles.button_text}>
                                        CHOISIR
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={styles.card_container}>
                            <Text style={styles.card_title}>
                                Standard
                            </Text>
                            <Text style={styles.card_price}>
                                10.000F
                            </Text>
                            <Text style={styles.card_text}>
                                6 mois d'abonnement
                            </Text>
                            <Text style={styles.card_text}>
                                Lorem Ipsum is simply dummy text 
                            </Text>
                            <Text style={styles.card_text}>
                                Voir toutes les films
                            </Text>
                            <View style={styles.button_container}>
                                <Pressable style={styles.button}>
                                    <Text style={styles.button_text}>
                                        CHOISIR
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        
                        <View style={styles.card_container}>
                            <Text style={styles.card_title}>
                                Basic
                            </Text>
                            <Text style={styles.card_price}>
                                2000F
                            </Text>
                            <Text style={styles.card_text}>
                                1 mois d'abonnement
                            </Text>
                            <Text style={styles.card_text}>
                                Lorem Ipsum is simply dummy text 
                            </Text>
                            <Text style={styles.card_text}>
                                Voir toutes les films
                            </Text>
                            <View style={styles.button_container}>
                                <Pressable style={styles.button}>
                                    <Text style={styles.button_text}>
                                        CHOISIR
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
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
        marginTop: 20,
    },
    card_container: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingTop: 40,
        paddingRight: 20,
        paddingBottom: 40,
        paddingLeft: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 360,
    },
    card_title: {
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: 28,
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    card_price: {
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: 36,
        color: '#C79D02',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    card_text: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
    },
    button_container: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#ECBB04',
        textAlign: 'center',
        borderRadius: 7,
        padding: 10,
    },
    button_text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
});
export default Abonnement