import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default function MainNavigation() {

    const RootStack= createNativeStackNavigator()

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false}}>
                <RootStack.Screen name="Welcome" component={WelcomeScreen}/>
                <RootStack.Screen name="Home" component={HomeScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}