import React from 'react'
import {View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Alerts from '../screens/Alerts'
import Taxi from '../screens/Taxi'
import Phonebook from '../screens/Phonebook'
import Emergency from '../screens/Emergency'

const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();

function HomeStack({navigation}){
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={({navigation})=>({
            headerShown: false,
        })} />
        <Stack.Screen name='Alerts' component={Alerts}/>
        <Stack.Screen name='Taxi' component={Taxi}/>
        <Stack.Screen name='Phonebook' component={Phonebook}/>
        <Stack.Screen name='Emergency' component={Emergency}/>
    </Stack.Navigator>
}

const Navigation = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation={false} screenOptions={{drawerPosition: 'right'}}>
                <Drawer.Screen name="Home" component={Home} options={({navigation})=>({
                    headerShown: false
                })} />                
                <Drawer.Screen name="Taxi" component={Taxi} />
                <Drawer.Screen name="Phonebook" component={Phonebook} />
                <Drawer.Screen name="Emergency" component={Emergency} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigation;