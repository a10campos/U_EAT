import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";
import { Mixpanel } from "../services/mixpanel";

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
                Mixpanel.identify(action.payload.id);
                Mixpanel.people.set({
                    $name: action.payload.name,
                    $email: action.payload.email,
                })
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
        .addCase(registerUser.fulfilled,(state,action)=>{
            if (action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage= action.payload.message;
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

export const registerUser = createAsyncThunk('user/registerUser', async (credentils) => {
    const registerUserfetch = await fetch('http://localhost:7500/registerUser',{
        method:'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name:credentils.name,
            lastName:credentils.lastName,
            email:credentils.email,
            username:credentils.username,
            telephone:credentils.telephone,
            password:credentils.password
        })
    });
    const userData = await registerUserfetch.json();
    if (registerUser.status === 200){
        return userData;
    } else {
        return {
            error: true,
            message: userData.message
        }
    }
})

export default userSlice.reducer;
