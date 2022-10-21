
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inscription from '../../screens/auth/register'
import Connexion from '../../screens/auth/login'
import Verification from '../../screens/auth/verification'
import MotDePasseOublie from '../../screens/auth/password-forgot'
import ChangerMotDePasse from '../../screens/auth/change-password'

// ** AUTH ** //
const AuthStack = createNativeStackNavigator()
export const AuthStackScreen = () => {
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
