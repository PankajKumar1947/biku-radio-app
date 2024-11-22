import { createSlice } from "@reduxjs/toolkit";

const playStationDataSlice = createSlice({
    name: 'playstationData',
    initialState: {
        playstationData: [],
        loading: false,
    },
    reducers: {
        addPlaystationData(state, action) {
            state.playstationData = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
});

export const {
    addPlaystationData,
    setLoading
} = playStationDataSlice.actions;

export default playStationDataSlice.reducer;