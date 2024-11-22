import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const GenreCard = ({ genre }: any) => {
    const navigation = useNavigation();
    const [data , setData] = useState([]);

    useEffect(() => {
        const fetchPlayStation = async () =>{
            try{
                const response = await fetch("https://de1.api.radio-browser.info/json/stations/bycountry/india");
                const data = await response.json();
                setData(data);

                
                //save teh fetched result to global state




                return data
            }catch(error){
                console.log("Error occured in fetchPlayStation", error);
            }
        }
        if(data.length === 0){
            fetchPlayStation();
        }
    },[])

    return (
        <TouchableOpacity
            //@ts-ignore
            onPress={() => { navigation.navigate('songlist', {
                genre: genre.name,
                search: genre.search,
            }) }}
            style={styles.container}>
            <ImageBackground source={genre?.image} resizeMode="stretch" style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{genre.name}</Text>
                    <Text style={styles.text1}>{genre.desc}</Text>
                </View>

            </ImageBackground>
        </TouchableOpacity>
    )
}

export default GenreCard

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: '48%',
        borderWidth: 1,
        borderColor: '#D7007D',
        borderRadius: 30,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textContainer: {
        padding: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text1: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        opacity: 0.8
    }
})