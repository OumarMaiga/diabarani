import AsyncStorage from '@react-native-async-storage/async-storage';
    
    const storeToken = async (user) => {
        try {
            await AsyncStorage.setItem("userData", JSON.stringify(user));
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }
    const getToken = async (user) => {
        try {
            let userData = await AsyncStorage.getItem("userData");
            let data = JSON.parse(userData);
            console.log('Loc+++ +++ +++');
            //console.log(data);
            console.log('+++ +++ +++End');
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

export { storeToken, getToken };