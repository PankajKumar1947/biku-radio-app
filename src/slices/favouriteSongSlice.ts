import { createSlice } from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";

export interface FavouriteSongState {
    stationuuid: string,
    name: string,
    url_resolved: string
}

const favouriteSongSlice = createSlice({
    name: 'favouriteSong',
    initialState: {
        favouriteSong: [],
    },
    reducers: {
        addFavouriteSong(state, action) {
            if (state.favouriteSong.find((song: FavouriteSongState) => song.stationuuid === action.payload.stationuuid)) {
                //remove the song from the list
                state.favouriteSong = state.favouriteSong.filter((song: FavouriteSongState) => song.stationuuid !== action.payload.stationuuid);
                Snackbar.show({
                    text: 'Removed from favourites',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                })
                return;
            };
            //@ts-ignore
            state.favouriteSong.push(action.payload);
            Snackbar.show({
                text: 'Added to favourites',
                duration: Snackbar.LENGTH_SHORT,
                action: {
                    text: 'View',
                    textColor: 'green',
                    onPress: () => { 
                        //remove the snackbar
                        Snackbar.dismiss();
                        
                        //navigate to favourite screen
                        const { navigation } = action.payload;
                        navigation.navigate('favourite');
                        
                    },
                }
            })
        },
    }
})

export const { 
    addFavouriteSong, 
} = favouriteSongSlice.actions;

export default favouriteSongSlice.reducer;