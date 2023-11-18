import React from 'react'
import {View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Alerts from '../screens/Alerts'
import Taxi from '../screens/Taxi'

const Stack = createNativeStackNavigator();

const Buttons = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={({navigation})=>({
                headerShown: false,
            })}>
            </Stack.Screen>
            <Stack.Screen name='Alerts' component={Alerts}>
            </Stack.Screen>
            <Stack.Screen name='Taxi' component={Taxi}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default Buttons;