import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlayerScreen = ({route} : any) => {
    const { } = route.params;//extracking params
    console.log(route.params);
    return (
        <View>
            <Text>PlayerScreen</Text>
        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({})