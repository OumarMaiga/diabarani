import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inscription from '../Components/Auth/Inscription'
import Connexion from '../Components/Auth/Connexion'
import Verification from '../Components/Auth/Verification'
import MotDePasseOublie from '../Components/Auth/Motdepasseoublie'
import ChangerMotDePasse from '../Components/Auth/Changermotdepasse'
import Accueil from '../Components/Accueil'
import Favorite from '../Components/Favorite'
import Bibliotheque from '../Components/Bibliotheque'
import News from '../Components/News'
import Profil from '../Components/Profil'
import Abonnement from '../Components/Abonnement'
import Paiement from '../Components/Paiement'
import FilmDetail from '../Components/FilmDetail'
import { Button, View, Text, Platform, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../Components/Context';
import { login } from '../API/DiabaraniApi'
import { register } from '../API/DiabaraniApi'

// ** AUTH ** //
const AuthStack = createNativeStackNavigator()
function AuthStackScreen() {
    return (
        <AuthStack.Navigator initialRouteName="Connexion">
            <AuthStack.Screen name="Inscription" component={Inscription} options={{headerShown: false}} />
            <AuthStack.Screen name="Connexion" component={Connexion} options={{headerShown: false}} />
            <AuthStack.Screen name="MotDePasseOublie" component={MotDePasseOublie} options={{headerShown: false}} />
            <AuthStack.Screen name="Verification" component={Verification} options={{headerShown: false}} />
            <AuthStack.Screen name="ChangerMotDePasse" component={ChangerMotDePasse} options={{headerShown: false}} />
        </AuthStack.Navigator>
    )
}

// ** Home ** //
const HomeStack = createNativeStackNavigator()
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }} />
            <HomeStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}

// ** FAVORITE ** //
const FavoriteStack = createNativeStackNavigator()
function FavoriteStackScreen() {
    return (        
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <FavoriteStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </FavoriteStack.Navigator>
    )
}

// ** BIBLIOTHEQUE ** //
const BibliothequeStack = createNativeStackNavigator()
function BibliothequeStackScreen() {
    return (        
        <BibliothequeStack.Navigator>
            <BibliothequeStack.Screen name="Bibliotheque" component={Bibliotheque} options={{ headerShown: false }} />
            <BibliothequeStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </BibliothequeStack.Navigator>
    )
}

// ** New ** //
const NewsStack = createNativeStackNavigator()
function NewsStackScreen() {
    return (        
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={News} options={{ headerShown: false }} />
            <NewsStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </NewsStack.Navigator>
    )
}

// ** PROFIL ** //
const ProfilStack = createNativeStackNavigator()
function ProfilStackScreen() {
    return (        
        <ProfilStack.Navigator>
            <ProfilStack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
            <ProfilStack.Screen name="Abonnement" component={Abonnement} options={{ headerShown: false }} />
            <ProfilStack.Screen name="Paiement" component={Paiement} options={{ headerShown: false }} />
        </ProfilStack.Navigator>
    )
}

// ** ROOT ** //
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Navigation = () => {
    
    const initialAuthState = {
        isLoading: true,
        userToken: null,
    };
    const AuthReducer = (prevState, action) => {
        let nextState
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                console.log('Reducer-Logout');
                return {
                    ...prevState,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
        
            default:
                return prevState
        }
    }
    
    const [AuthState, dispatch] = React.useReducer(AuthReducer, initialAuthState)

    const authContext = React.useMemo(() => ({
        signIn: (username, password) => {
            let userToken = null; 
            login (username, password).then( async (data) => {
                if(data.code == 1) {
                    console.log('User LogIn');
                    try {
                        userToken = data.token;
                        await AsyncStorage.setItem('userToken', userToken)
                    } catch(e) {
                        console.log(e);
                    }
                } else {
                    alert('Identifiant non trouvé');
                    console.log(data.error_message);
                }
            })
                
            console.log('signIn-AuthContext');
            console.log('UserToken', userToken);
            dispatch({ type: 'LOGIN', token: userToken });
        },
        signOut: async() => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch(e) {
                console.log(e);
            }
            console.log('signOut-AuthContext');
            dispatch({ type: 'LOGOUT' });
        },
        signUp: (first_name, last_name, phone, email, password, password_confirm) => {
            let userToken = null;
            register(first_name, last_name, phone, email, password, password_confirm).then(async (data) => {
                if(data.code == 1) {
                    console.log('User Registered');
                    try {
                        userToken = data.token;
                        await AsyncStorage.setItem('userToken', userToken);
                    } catch(e) {
                        console.log(e)
                    }
                } else {
                    alert('Enregistrement incorrect');
                    console.log(data.error_message);
                }
                
                console.log('signUp - AuthContext');
                console.log('UserToken', userToken);
                dispatch({ type: 'REGISTER', token: userToken });
            })

        }
    }));
    
    React.useEffect(() => {
        setTimeout( async () => {
            let userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch(e) {
                console.log(e);
            }
            console.log('UseEffect - UserToken', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if(AuthState.isLoading) {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }



    return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            { AuthState.userToken != null ? (
            <Tab.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if(route.name === 'Home') {
                            iconName = 'home';
                        } else if(route.name === 'TabFavorite') {
                            iconName = 'heart';
                        } else if(route.name === 'TabBibliotheque') {
                            iconName = 'play-box-multiple';
                        } else if(route.name === 'TabNews') {
                            iconName = 'compass';
                        } else if(route.name === 'TabProfil') {
                            iconName = 'account';
                        } else {
                            iconName = '';
                        }
                        return <MaterialCommunityIcons name={iconName} size={28} color={color} />
                    },
                    tabBarActiveTintColor: '#ECBB04',
                    tabBarInactiveTintColor: '#CFCFCF',
                    tabBarStyle: {
                        //padding: 10, 
                        backgroundColor: '#242424'
                    },
                })}>
                <Tab.Screen name="TabFavorite" component={FavoriteStackScreen} options={{
                    tabBarLabel: "Favorie",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: '#242424',
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: '#ECBB04', 
                                fontSize: 18,
                                }}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color="#FFFFFF" />
                    ),
                }} />
                <Tab.Screen name="TabBibliotheque" component={BibliothequeStackScreen} options={{
                    tabBarLabel: "Bibliotheque",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: '#242424',
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: '#ECBB04', 
                                fontSize: 18,
                                }}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color="#FFFFFF" />
                    ),
                }} />
                <Tab.Screen name="Home" component={HomeStackScreen} options={{
                    tabBarLabel: "Accueil",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: '#242424',
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                    color: '#ECBB04', 
                                    fontSize: 18,
                                }}
                            >
                                DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color="#FFFFFF" />
                    )
                }} />
                <Tab.Screen name="TabNews" component={NewsStackScreen} options={{
                    title: "Nouveauté",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: '#242424',
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: '#ECBB04', 
                                fontSize: 18,}}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color="#FFFFFF" />
                    ),
                }} />
                <Tab.Screen name="TabProfil" component={ProfilStackScreen} options={{
                    title: "Profil",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: '#242424',
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: '#ECBB04', 
                                fontSize: 18,}}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color="#FFFFFF" />
                    ),
                }} />
            </Tab.Navigator>
            )
            :
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        }
        </NavigationContainer>
        </AuthContext.Provider>

    )
}

export default Navigation