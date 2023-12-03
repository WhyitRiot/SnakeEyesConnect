import React, {useState, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, Image, ImageBackground, Button, Text, View, ScrollView, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useFonts} from '@expo-google-fonts/inter'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AntDesign, FontAwesome, MaterialCommunityIcons, Feather, Ionicons} from '@expo/vector-icons'
import Notifications from './src/components/Notifications';
//Icon button: <IconButton title="Alerts" onPress={()=>navigation.navigate('Alerts')} icon={() => (<Feather name="alert-circle" size={30} color="black"/>)} style={styles.button} />
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

const data = [
    {
        id: '00',
        title: 'Notification 1 Text, test overflow',
        date: '11-26-2023 16:47'
    },
    {
        id: '01',
        title: 'Notification 2 Text',
        date: '11-26-2023 16:45'
    },
    {
        id: '02',
        title: 'Notification 2 Text',
        date: '11-26-2023 16:45'
    },
    {
        id: '03',
        title: 'Notification 2 Text',
        date: '11-26-2023 16:45'
    },
    {
        id: '04',
        title: 'Notification 2 Text',
        date: '11-26-2023 16:45'
    },
    {
        id: '05',
        title: 'Notification 2 Text',
        date: '11-26-2023 16:45'
    },
]

const Item = ({item}) => (  
    <View style={{}}>
        <Text style={{}}>{item.request.content.title}</Text>
        <Text sylte={{}}>{item.request.content.date}</Text>
    </View>
)

const renderSeparator = () => (
    <View style={{backgroundColor: 'black', height: 1}} />
);

const Home = ({navigation}) =>{
    const [notifications, setNotifications] = useState([]);
    const handleNotificationsReceived = (notification) =>{
        setNotifications((prevNotifications) => [...prevNotifications, notification])
    };
    const renderItem = ({item}) => {
        const backgroundColor = 'white' 
        const color = 'black'
        return (
            <Item
                item={item}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }

    return (
        <ImageBackground source={require('../../assets/11ADA.jpg')} style={styles.imageLayout}>
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/out.png')} style={styles.image}></Image>
                <Notifications onNotificationReceieved={handleNotificationsReceived} />
                <View style={styles.buttonWrapper}>
                    <View style={styles.alertContainer}>
                        <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>Alerts</Text>
                        <View style={styles.alertList}>
                            <FlatList
                                data={notifications}
                                renderItem={renderItem}
                                keyExtractor={item => item.notificationId}
                                ItemSeparatorComponent={renderSeparator}
                                style={{height: 200}}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <IconButton title="Emergency" onPress={()=>navigation.navigate('Emergency')} icon={() => (<Ionicons name="medical" size={30} color="black"/>)} style={styles.button} />
                        <IconButton title="Phonebook" onPress={()=>navigation.navigate('Phonebook')} icon={() => (<AntDesign name="phone" size={30} color="black"/>)} style={styles.button} />
                        <IconButton title="Taxi" onPress={()=>navigation.navigate('Taxi')} icon={() => (<FontAwesome name="taxi" size={30} color="black"/>)} style={styles.button} />
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
        flexDirection: 'row',
        alignItems: 'space-around',
        backgroundColor: 'rgba(217,217,214, 0.8)',
        borderRadius: 10
    },
    buttonContainer:{ 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'space-around',
        marginBottom: 10,
        marginLeft: 'auto'
    },
    alertContainer:{
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'column'
    },
    alertList:{
        justifyContent: 'space-around',
        alignContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
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