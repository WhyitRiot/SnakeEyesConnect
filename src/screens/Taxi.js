import React from 'react'
import {StyleSheet, Text, View, FlatList, Linking, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'

const data = [
    {
        id: '00',
        title: 'Daiko Taxi',
        number: '098-932-4035',
        icon: () => {
            return(
                <FontAwesome name="taxi" size={24} color="black"/>
            )
        }
    },
    {
        id: '01',
        title: 'Panda Taxi',
        number: '098-970-8888',
        icon: () => {
            return(
                <MaterialCommunityIcons name="panda" size={24} color="black"/>
            )
        }
    }
]

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>  
        <View style={styles.itemContent}>
            <View style={styles.leftContent}>
                <item.icon />
                <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
            </View>
            <AntDesign name="phone" size={24} color="black"/>
        </View>
    </TouchableOpacity>
)

const Taxi = () => {
    const renderItem = ({item}) => {
        const backgroundColor = 'white' 
        const color = 'black'
        return (
            <Item
                item={item}
                onPress={() => Linking.openURL(`tel:${item.number}`)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }
    const renderSeparator = () => (
        <View style={{backgroundColor: 'black', height: 2}} />
    );
    return(
        <SafeAreaView edges={['right','bottom','left']} style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={renderSeparator}
                ListFooterComponent={renderSeparator}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
    },
    item:{
        padding: 30,
        alignContent: 'space-around'
    },
    itemContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContent:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        marginLeft: 25,
        fontSize: 20,
    }
})
export default Taxi;