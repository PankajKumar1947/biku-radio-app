import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TopicCard from './TopicCard'

const Topics = () => {
    const data = [
        {
            id: '1',
            name: "Trending",
            icon: 'trending-up',
            iconColor: "#ff0000",
            bgColor: "#3C3D37",
            route: "trending",
        },
        {
            id: '2',
            name: "Favorites",
            icon: 'heart',
            iconColor: "#ff0000",
            bgColor: "#0B192C",
            route: "favourite",
        }, 
        {
            id: '3',
            name: "Popular",
            icon: 'logo-rss',
            iconColor: "#ff0000",
            bgColor: "#3C0753",
            route: "popular",
        },
        {
            id: '4',
            name: "New",
            icon: 'heart',
            iconColor: "#ff0000",
            bgColor: "#030637",
            route: "new",
        },
        
    ];
    
    
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
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