import React from 'react'
import { TextInput, View, Text, Image, Pressable, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser, updateUser } from '../API/DiabaraniApi'

export default ({ navigation }) => {

    const [first_name, setFirst_name] = React.useState("");
    const [last_name, setLast_name] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [rightPosition, setRightPosition] = React.useState("");
    const [user, setUser] = React.useState(undefined);
        
    const { width, height } = Dimensions.get('window');
    setRightPosition((width/2)-67.5)

    React.useEffect(() => {
        console.log("EditProfile::componentDidMount()");
        token = null;
        async () => {
            try {
                token = await AsyncStorage.getItem('userToken');
            } catch(e) {
                console.log(e);
            }
            let data = await getUser(token);
            if(data.code == 1) {
                setUser(data.user);
            } else {
                alert ("Utilisateur introuvable");
            }
        }
    });

    const displayLoading = () => {
        if(isLoading) {
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    };
    
            /* Sign Up with Backend API */
            /*await signUp({firstname: firstName, lastname: lastName, username: userName,
                email: email, password: password, birthday: birthday, gender: genderBackend});*/
    const onUpdateButtonPress = async () => {
        setLoading(true);
        rc = await updateUser({ first_name: first_name, last_name: last_name, email: email, phone: phone });
        console.log(rc);
        setLoading(false);
    };

    const displayProfile = () => {
        console.log("EditProfile::_displayProfile()");
        if(user != undefined) {
        //console.log("User => "+user);
            return (
            <ScrollView>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Profil
                    </Text>
                </View>
                <View style={styles.profil_image_section}>
                    <Image style={styles.profil_image}
                    source={require("../Images/movie-6.jpg")} />
                    <MaterialCommunityIcons style={[styles.icon_camera, {right: rightPosition}]} 
                        name="camera" size={36} color="#B8B8B8" />
                </View>
                <View style={styles.form_container}>
                    <TextInput placeholder="Prenom"
                        style={styles.text_input}
                        placeholderTextColor="#AAAAAA"
                        value={user.first_name}
                        onChangeText={setFirst_name} />
                    <TextInput placeholder="Nom"
                        style={styles.text_input}
                        placeholderTextColor="#AAAAAA"
                        value={user.last_name}
                        onChangeText={setLast_name} />
                    <TextInput placeholder="Email"
                        style={styles.text_input}
                        placeholderTextColor="#AAAAAA"
                        value={user.email}
                        onChangeText={setEmail} />
                    <TextInput placeholder="Telephone"
                        style={styles.text_input}
                        placeholderTextColor="#AAAAAA"
                        value={user.phone}
                        onChangeText={setPhone} />
                    <Pressable style={styles.button} onPress={onUpdateButtonPress}>
                        <Text style={styles.button_text}>MODIFIER</Text>
                    </Pressable>
                </View>
            </ScrollView>
            )
        }
    }

    return (
        <View style={styles.main_container}>
            {displayProfile}
            {displayLoading}
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
    },
    title_container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 32,
        color: '#EEEEEE',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profil_image_section: {
        display: 'flex',
        alignItems: 'center'
    },
    profil_image: {
        height: 120,
        width: 120,
        borderRadius: 75,
        backgroundColor: '#EEEEEE'
    },
    icon_camera: {
        position: 'absolute',
        bottom: -5,
    },
    form_container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
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
    loading_container: {
        position: 'absolute',
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" ,
        top: 100,
        right: 0,
        bottom: 0,
        left: 0,
    }
});
