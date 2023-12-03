import React, {useState, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, Image, ImageBackground, Button, Text, View, ScrollView, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useFonts} from '@expo-google-fonts/inter'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AntDesign, FontAwesome, MaterialCommunityIcons, Feather, Ionicons} from '@expo/vector-icons'
import Notification from '../components/Notification'
//Icon button: <IconButton title="Alerts" onPress={()=>navigation.navigate('Alerts')} icon={() => (<Feather name="alert-circle" size={30} color="black"/>)} style={styles.button} />
const IconButton = ({title, onPress, icon, style}) => {
    return (
        <TouchableOpacity style={[styles.touchableOpacity, style]} onPress={onPress}>
            <View style={{alignItems: 'center', justifyItems: 'center', padding: 10}}>
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

const parseDate = ({date}) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Months are zero-based
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formatedTime = `${month < 10 ? '0' + month: month}/${day}/${year} ${hours}:${minutes}`;
    //`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}:${seconds}`
    return(formatedTime);
}

const Item = ({item}) => (  
    <View style={{}}>
        <Text style={{}}>{item.request.content.title}</Text>
        <Text style={{}}>{parseDate({date: new Date(item.date) })}</Text>
    </View>
)

const renderSeparator = () => (
    <View style={{backgroundColor: 'black', height: 1}} />
);

const Home = ({navigation}) =>{
    const [notifications, setNotifications] = useState([]);
    const handleNotificationsReceived = (_notification) =>{
        setNotifications((prevNotifications) => [_notification, ...prevNotifications])
    };
    const renderItem = ({item}) => {

        console.log('Rendering item:', item);
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
                <Notification onNotificationReceived={handleNotificationsReceived} />
                <View style={styles.buttonWrapper}>
                    <View style={styles.alertContainer}>
                        <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>Alerts</Text>
                        <View style={styles.alertList}>
                            <FlatList
                                data={notifications}
                                renderItem={renderItem}
                                keyExtractor={item => item.request.identifier}
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
        marginRight: 10,
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
        paddingBottom: 15
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
        borderRadius: 10,
        margin: 5
    },
    touchableOpacity:{
        height: 80,
        width: 100
    }
})

export default Home;