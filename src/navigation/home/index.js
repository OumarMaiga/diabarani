import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../../screens/accueil'
import Favorite from '../../screens/favorite'
import Bibliotheque from '../../screens/bibliotheque'
import News from '../../screens/news'
import Profile from '../../screens/profile'
import Abonnement from '../../screens/abonnement'
import Paiement from '../../screens/paiement'
import FilmDetail from '../../screens/film-detail'
import SerieDetail from '../../screens/serie-detail'
import EpisodeDetail from '../../screens/episode-detail'
import FilmPerGenre from '../../screens/film-per-genre'
import EditProfile from '../../screens/edit-profile'

// ** Home ** //
const HomeStack = createNativeStackNavigator()
export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }} />
            <HomeStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
            <HomeStack.Screen name="SerieDetail" component={SerieDetail} options={{ headerShown: false }} />
            <HomeStack.Screen name="EpisodeDetail" component={EpisodeDetail} options={{ headerShown: false }} />
            <HomeStack.Screen name="FilmPerGenre" component={FilmPerGenre} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}

// ** FAVORITE ** //
const FavoriteStack = createNativeStackNavigator()
export const FavoriteStackScreen = () => {
    return (        
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <FavoriteStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </FavoriteStack.Navigator>
    )
}

// ** BIBLIOTHEQUE ** //
const BibliothequeStack = createNativeStackNavigator()
export const BibliothequeStackScreen = () => {
    return (        
        <BibliothequeStack.Navigator>
            <BibliothequeStack.Screen name="Bibliotheque" component={Bibliotheque} options={{ headerShown: false }} />
            <BibliothequeStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </BibliothequeStack.Navigator>
    )
}

// ** New ** //
const NewsStack = createNativeStackNavigator()
export const NewsStackScreen = () => {
    return (        
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={News} options={{ headerShown: false }} />
            <NewsStack.Screen name="FilmDetail" component={FilmDetail} options={{ headerShown: false }} />
        </NewsStack.Navigator>
    )
}

// ** Profile ** //
const ProfilStack = createNativeStackNavigator()
export const ProfilStackScreen = () => {
    return (        
        <ProfilStack.Navigator>
            <ProfilStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <ProfilStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <ProfilStack.Screen name="Abonnement" component={Abonnement} options={{ headerShown: false }} />
            <ProfilStack.Screen name="Paiement" component={Paiement} options={{ headerShown: false }} />
        </ProfilStack.Navigator>
    )
}
