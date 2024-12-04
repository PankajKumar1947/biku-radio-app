import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TopicCard from './TopicCard'
import { topicList } from '../utils/topicList'
const Topics = () => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={topicList}
                renderItem={({ item }) => <TopicCard item={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Topics

const styles = StyleSheet.create({
    container: {   
        marginTop: 5,
    }
})