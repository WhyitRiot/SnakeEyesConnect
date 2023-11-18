import React from 'react'
import {StyleSheet, Text, View, FlatList, Linking, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

const data = [
    {
        id: '00',
        title: 'Daiko Taxi',
        number: '098-932-4035'
    },
    {
        id: '01',
        title: 'Panda Taxi',
        number: '098-970-8888'
    }
]

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
)

const Taxi = () => {
    const renderItem = ({item}) => {
        const backgroundColor = 'black' 
        const color = 'white'
        return (
            <Item
                item={item}
                onPress={() => Linking.openURL(`tel:${item.number}`)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }
    return(
        <SafeAreaView style={{backgroundColor: 'black'}}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'space-around'
    },
    item:{

    },
    title:{
        fontSize: 20
    }
})
export default Taxi;