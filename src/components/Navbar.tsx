import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Navbar = ({searchInput, setSearchInput}:any) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>🇮🇳</Text>
            <TextInput 
                value={searchInput} onChangeText={setSearchInput} 
                placeholder='Search' style={styles.inputBox} />
            <Text style={styles.hamberger}>🍔</Text>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,   
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: 'white',
    },
    inputBox: {
        padding: 10,
        borderRadius: 10,
        borderColor: 'white',
        width: '70%',
        borderWidth: 0.2,
        color: 'white'
    },
    hamberger: {
        fontSize: 24,
        fontWeight: '800',
        color: 'white',
    }

})