import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        success:false
    },

    extraReducers (builder) {
        builder
        .addCase(registRest.fulfilled,(state,action)=>{
            if (action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage="";
                state.success = true;

            }
        })
    }

});

export const registRest = createAsyncThunk('restuarant/registRest',async(credentils,{getState})=> {
    const state = getState();
    const formData = new FormData();
    formData.append ('file',credentils.restuarantPicture);
    const uploadFileFetch = await fetch ('http://localhost:7500/upload',{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${state.user.user.token}`,
        },
        body: formData,
    });
    const uploadFileData = await uploadFileFetch.json();
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
            rangePrice: credentils.rangePrice,
            country: credentils.country,
            province: credentils.province,
            university: credentils.university,
            photo: uploadFileData.url
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

export default restaurantSlice.reducer;
