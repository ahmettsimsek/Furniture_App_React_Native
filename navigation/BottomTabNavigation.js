import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home,Search,Profile} from '../screens';
import {Ionicons} from "@expo/vector-icons"
import {COLORS} from "../constants/index"
import { StatusBar } from 'expo-status-bar';

<StatusBar hidden={true} />

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation: 0,
        height: 10
    }
}

const BottomTabNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
        <StatusBar hidden={false} />
        <Tab.Navigator screenOptions={screenOptions}>

            <Tab.Screen
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons 
                    name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused ? COLORS.primary : COLORS.gray2 }/>
                }
            }}/>

            <Tab.Screen
            name="Search" 
            component={Search}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons
                    name={'search-sharp'}
                    size={24}
                    color={focused ? COLORS.primary : COLORS.gray2 }/>
                }
            }}/>

            <Tab.Screen
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons 
                    name={focused ? "person" : "person-outline"}
                    size={24}
                    color={focused ? COLORS.primary : COLORS.gray2 }/>
                }
            }}/>

        </Tab.Navigator>
    </SafeAreaView>
  )
}

export default BottomTabNavigation