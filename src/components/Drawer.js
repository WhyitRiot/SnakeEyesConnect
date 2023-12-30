import React from 'react'
import {View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Alerts from '../screens/Alerts'
import Taxi from '../screens/Taxi'
import Phonebook from '../screens/Phonebook'
import Emergency from '../screens/Emergency'

const Menu = createNativeStackNavigator();

const Drawer = () =>{
    return(
        <Menu.Navigator initialRouteName='Home'>
            <Menu.Screen name='Home' component={Home} />
            <Menu.Screen name='Taxi' component={Taxi} />
            <Menu.Screen name='Phonebook' component={Phonebook} />
            <Menu.Screen name='Emergency' component={Emergency} />
        </Menu.Navigator>
    )
}

export default Drawer;