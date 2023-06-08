import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopularScreen from '../screens/PopularScreen';
import CatalogScreen from '../screens/CatalogScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function BottomTabNavigation() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <BottomTab.Navigator initialRouteName="Popular"
        screenOptions={{
          tabBarStyle: {
            height: 100, backgroundColor: "#c0c1c3",
            borderTopLeftRadius: 32, borderTopRightRadius: 32
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#231f20",
          tabBarActiveTintColor: "#231f20",
        }}>
        <BottomTab.Screen
          name="Popular" component={PopularScreen}
          options={{
            tabBarIcon: ({ focused, color }) => 
              focused ? <Entypo
              style={{ backgroundColor: "rgba(230, 129, 86, 0.4)", padding: 16, borderRadius: 100, }}
                name="home" size={32} color={color} /> : <Entypo name="home" size={32} color={color}/>
          }}
        />
        <BottomTab.Screen
          name="Catalog" component={CatalogScreen}
          options={{
            tabBarIcon: ({ focused, color }) => 
              focused ? <Ionicons
              style={{ backgroundColor: "rgba(230, 129, 86, 0.4)", padding: 16, borderRadius: 100, }}
                name="bookmark" size={32} color={color} /> : <Ionicons name="bookmark" size={32} color={color}/>
          }}
        />
        <BottomTab.Screen
          name="Favorite" component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused, color }) => 
              focused ? <MaterialIcons
              style={{ backgroundColor: "rgba(230, 129, 86, 0.4)", padding: 16, borderRadius: 100, }}
                name="favorite" size={32} color={color} /> : <MaterialIcons name="favorite" size={32} color={color}/>
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}