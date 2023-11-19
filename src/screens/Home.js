import React from 'react'
import { StyleSheet, TouchableOpacity, Image, ImageBackground, Button, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useFonts} from '@expo-google-fonts/inter'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AntDesign, FontAwesome, MaterialCommunityIcons, Feather} from '@expo/vector-icons'

const IconButton = ({title, onPress, icon, style}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <View style={{alignItems: 'center', padding: 5}}>
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
                    <IconButton title="Alerts" onPress={()=>navigation.navigate('Alerts')} icon={() => (<Feather name="alert-circle" size={30} color="black"/>)} style={styles.button} />
                    <IconButton title="Taxi" onPress={()=>navigation.navigate('Taxi')} icon={() => (<FontAwesome name="taxi" size={30} color="black"/>)} style={styles.button} />
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
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
        borderRadius: 50
    },
    button:{
        backgroundColor: 'rgba(99,102,106, 0.8)',
        borderRadius: 10
    }
})

export default Home;