import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name: 'restaurant',
    extraReducers (builder) {
        builder
        .addCase(registRest.fulfilled,(state,action)=>{
            if (action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage="";
                state.success=true;
            }
        })
        .addCase(getRestaurants.fulfilled,(state,action) => {
            if(action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage = "";
                state.restaurants = action.payload;
            }
        })
        .addCase(getRestaurants.rejected,(state,action) =>{
            state.restaurants = [];
        })
    }

});

export const registRest = createAsyncThunk('restuarant/registRest',async(credentils,{getState})=> {
    const state = getState();
    const registerRestFetch = await fetch ('http://localhost:7500/registRest',{
        method:'POST',
        headers: {
            Authorization: `Bearer ${state.user.user.token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name:credentils.nameRest,
            email:credentils.email,
            phone:credentils.celRest,
            rangePrice: credentils.rangePrice

        })
    });
    const userData = await registerRestFetch.json();

    if (registerRestFetch.status===200){
        return userData;
    }
    else {
        console.log(userData.message);
        return {
            error:true,
            message: userData.message
        }
    }
})

export const getRestaurants = createAsyncThunk('restuarant/getRestaurants',async(credentils)=> {
    const getRestaurantsFetch = await fetch ('http://localhost:7500/restaurants',{
    });
    const userData = await getRestaurantsFetch.json();
    if (getRestaurantsFetch.status===200){
        return userData;
    }
    else {
        return {
            error:true,
            message: userData.message
        }
    }
})

export default restaurantSlice.reducer;
