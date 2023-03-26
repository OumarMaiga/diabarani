import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, View, Text, Platform, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { AuthStackScreen } from '../auth';
import { HomeStackScreen, FavoriteStackScreen, BibliothequeStackScreen, 
    NewsStackScreen, ProfilStackScreen } from '../home';


// ** ROOT ** //
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Navigation = () => {
    
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    //const isAuthenticated = true;

    return (
        <NavigationContainer>
            { isAuthenticated != false ? (
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
                    tabBarActiveTintColor: global.Yellow,
                    tabBarInactiveTintColor: global.lightGray,
                    tabBarStyle: {
                        //padding: 10, 
                        backgroundColor: global.blackLight
                    },
                })}>
                <Tab.Screen name="TabFavorite" component={FavoriteStackScreen} options={{
                    tabBarLabel: "Favorie",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: global.blackLight,
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: global.Yellow,
                                fontSize: 18,
                                }}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color={global.white} />
                    ),
                }} />
                <Tab.Screen name="TabBibliotheque" component={BibliothequeStackScreen} options={{
                    tabBarLabel: "Bibliotheque",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: global.blackLight,
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: global.Yellow,
                                fontSize: 18,
                                }}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color={global.white} />
                    ),
                }} />
                <Tab.Screen name="Home" component={HomeStackScreen} options={{
                    tabBarLabel: "Accueil",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: global.blackLight,
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                    color: global.Yellow,
                                    fontSize: 18,
                                }}
                            >
                                DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color={global.white} />
                    )
                }} />
                <Tab.Screen name="TabNews" component={NewsStackScreen} options={{
                    title: "Nouveauté",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: global.blackLight,
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: global.Yellow,
                                fontSize: 18,}}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color={global.white} />
                    ),
                }} />
                <Tab.Screen name="TabProfil" component={ProfilStackScreen} options={{
                    title: "Profil",
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: global.blackLight,
                    },
                    headerLeft: () => (
                        <View>
                            <Text style={{ 
                                color: global.Yellow,
                                fontSize: 18,}}>
                                    DIABARANI
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons name="magnify" size={28} color={global.white} />
                    ),
                }} />
            </Tab.Navigator>
            ) : (
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            )}
        </NavigationContainer>

    )
}

export default Navigation