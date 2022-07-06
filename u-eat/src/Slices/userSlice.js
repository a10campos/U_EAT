import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
        errorMessage:"",
        success:false
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.userIsLoggedIn = false;
            state.errorMessage = " ";
        }
    },
    extraReducers (builder) {
        builder.addCase(postLogin.fulfilled, (state,action) => {
            if (action.payload.error) {
                state.userIsLoggedIn = false;
                state.user = null;
                state.errorMessage= action.payload.message;
            }
            else {
                state.userIsLoggedIn = true;
                state.user = action.payload;
                state.errorMessage = " ";
            }
        })
        .addCase(postLogin.rejected,(state,action ) => {
            state.userIsLoggedIn = false;
        })
        .addCase(registRest.fulfilled,(state,action)=>{
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

export const {logout} = userSlice.actions;

export const postLogin = createAsyncThunk('user/postLogin', async (credentils) => {
    const loginfetch = await fetch('http://localhost:7500/login',{
        method:'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email:credentils.username,
            password:credentils.password
        })
    });
    const userData = await loginfetch.json();
    if (loginfetch.status === 200){
        return userData;
    } else {
        return {
            error: true,
            message: userData.message
        }
    }
})
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
export default userSlice.reducer;