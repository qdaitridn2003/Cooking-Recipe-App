import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailRecipeScreen from '../screens/DetailRecipeScreen';

export default function StackNavigation(props) {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Main" component={props.screen} />
                <Stack.Screen name="Detail" component={DetailRecipeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}