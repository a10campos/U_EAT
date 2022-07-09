import {combineReducers,configureStore} from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import userSlice from "./Slices/userSlice";
import appSlice from "./Slices/appSlice";
import { persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";


const reducers = combineReducers({
    app:appSlice,
    user:userSlice,
});

const rootPersistConfig = {
    key: "root", 
    storage: storageSession,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{ ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    }),
});

export default store;