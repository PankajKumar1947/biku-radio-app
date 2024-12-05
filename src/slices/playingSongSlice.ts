import { createSlice } from "@reduxjs/toolkit";

const playingSongSlice = createSlice({
    name: 'playingSong',
    initialState: {
        playingSongUrl: '',
        playingSongId: '',
        playingSongName: '',
        loadingSong: false,
        mutedAudio: false,
        isPlayingSong: false,
        favicon: '',
    },
    reducers: {
        setPlayingSongUrl: (state, action) => { 
            state.playingSongUrl = action.payload 
        },
        setPlayingSongId: (state, action) => { 
            state.playingSongId = action.payload 
        },
        setPlayingSongName: (state, action) => { 
            state.playingSongName = action.payload 
        },
        setLoadingSong: (state, action) => { 
            state.loadingSong = action.payload 
        },
        setMutedAudio: (state, action) => { 
            state.mutedAudio = action.payload 
        },
        setIsPlayingSong: (state, action) => { 
            state.isPlayingSong = action.payload 
        },
        setFavicon: (state, action) => { 
            state.favicon = action.payload 
        },
    }
})

export const { 
    setPlayingSongUrl, 
    setPlayingSongId, 
    setPlayingSongName, 
    setLoadingSong,
    setMutedAudio,
    setIsPlayingSong,
    setFavicon
} = playingSongSlice.actions

export default playingSongSlice.reducer;