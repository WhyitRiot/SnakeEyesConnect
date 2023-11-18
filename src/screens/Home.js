import React from 'react'
import { StyleSheet, ImageBackground, Button, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Home = ({navigation}) =>{
    return (
        <ImageBackground source={require('../../assets/11ADA.jpg')} style={styles.imageLayout}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Snake Eyes Connect</Text>
                <View style={styles.buttonWrapper}>
                    <Button title="Alerts" onPress={()=>navigation.navigate('Alerts')}/>
                    <Button title="Taxi" onPress={()=>navigation.navigate('Taxi')}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageLayout:{
        flex:1
    },
    container:{
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    text:{
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffd700',
        backgroundColor: 'red',
        borderWidth: 4,
        borderColor: '#ffd700',
        borderRadius: 6
    },
    buttonWrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Home;