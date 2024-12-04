import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicans from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const TopicCard = ({item}:any) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        //@ts-ignore
        onPress={() => navigation.navigate(item?.route)}
        style={[styles.topicContainer, {backgroundColor:item?.bgColor}]}>
            <Ionicans name={item?.icon} size={32} color={item.iconColor} />
            <Text style={styles.text}>{item?.name}</Text>
        </TouchableOpacity>
    )
}

export default TopicCard

const styles = StyleSheet.create({
    topicContainer: {
        height: 80,
        width: 110,
        borderRadius: 15,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
        overflow:'hidden'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    }
})