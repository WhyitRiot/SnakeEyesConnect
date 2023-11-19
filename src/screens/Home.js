import React from 'react'
import { StyleSheet, TouchableOpacity, Image, ImageBackground, Button, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useFonts} from '@expo-google-fonts/inter'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AntDesign, FontAwesome, MaterialCommunityIcons, Feather, Ionicons} from '@expo/vector-icons'

const IconButton = ({title, onPress, icon, style}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <View style={{alignItems: 'center', padding: 10}}>
                {icon()}
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Home = ({navigation}) =>{
    return (
        <ImageBackground source={require('../../assets/11ADA.jpg')} style={styles.imageLayout}>
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/out.png')} style={styles.image}></Image>
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttonContainer}>
                        <IconButton title="Alerts" onPress={()=>navigation.navigate('Alerts')} icon={() => (<Feather name="alert-circle" size={30} color="black"/>)} style={styles.button} />
                        <IconButton title="Phonebook" onPress={()=>navigation.navigate('Phonebook')} icon={() => (<AntDesign name="phone" size={30} color="black"/>)} style={styles.button} />
                        <IconButton title="Taxi" onPress={()=>navigation.navigate('Taxi')} icon={() => (<FontAwesome name="taxi" size={30} color="black"/>)} style={styles.button} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <IconButton title="Emergency" onPress={()=>navigation.navigate('Phonebook')} icon={() => (<Ionicons name="medical" size={30} color="black"/>)} style={styles.button} />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageLayout:{
        flex:1
    },
    image:{
        alignSelf: 'center',
        width: 200, 
        height: 200
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
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FCE051',
        backgroundColor: '#CB0014',
        borderWidth: 4,
        borderColor: '#FCE051',
        borderRadius: 6
    },
    buttonWrapper:{
        padding: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(217,217,214, 0.8)',
        borderRadius: 10
    },
    buttonContainer:{
        flexDirection: 'row', 
        alignItems: 'space-around', 
        justifyContent: 'center',
        marginBottom: 10
    },
    button:{
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
        borderColor: 'rgba(128, 128, 128, 0.8)',
        borderWidth: 1,
        backgroundColor: 'rgba(242,233,234, 0.8)',
        borderRadius: 10
    }
})

export default Home;