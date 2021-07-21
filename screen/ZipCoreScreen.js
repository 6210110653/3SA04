import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Text, View, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Yala', code: '95000' },
    { place: 'Kanchanaburi', code: '71110' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() =>{
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        /></ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height:'100%'
    },
})