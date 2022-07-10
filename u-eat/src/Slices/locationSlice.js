import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    extraReducers (builder) {
        builder
        .addCase(chooseLocation.fulfilled,(state,action)=>{
            if (action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage="";
                state.success=true;
            }
        })
    }
});

export const chooseLocation = createAsyncThunk('location/chooseLocation',async(locationInfo,{getState})=> {
    const state = getState();
    const chooseLocationFetch = await fetch ('http://localhost:7500/chooseLocation',{
        method:'POST',
        headers: {
            Authorization: `Bearer ${state.user.user.token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            country: locationInfo.country,
            state: locationInfo.state,
            university: locationInfo.university
        })
    });

    const LocationData = await chooseLocationFetch.json();

    if (chooseLocationFetch.status===200){
        return LocationData;
    }
    else {
        console.log(LocationData.message);
        return {
            error:true,
            message: LocationData.message
        }
    }
})

export default locationSlice.reducer;