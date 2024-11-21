import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import SongList from '../components/SongList';

const SongListScreen = ({ route }: any) => {
    const { genre, search} = route.params;//extracking params
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            {
                genre==="All" && <Navbar />
            }
            <SongList />
        </View>
    )
}

export default SongListScreen

const styles = StyleSheet.create({})