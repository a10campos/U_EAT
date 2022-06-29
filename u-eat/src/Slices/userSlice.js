import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.userIsLoggedIn = false;
            console.log(state.isLoggedIn);
        }
    },
    extraReducers (builder) {
        builder.addCase(postLogin.fulfilled, (state,action) => {
            if (action.payload.error) {
                state.userIsLoggedIn = false;
                state.user = null;
            }
            else {
                state.userIsLoggedIn = true;
                state.user = action.payload;
            }
        })
        .addCase(postLogin.rejected,(state,action ) => {
            state.userIsLoggedIn = true;
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
            email: "a10campos",//credentils.email,
            password: "ueat123"//credentils.password
        })
    });
})

export default userSlice.reducer;