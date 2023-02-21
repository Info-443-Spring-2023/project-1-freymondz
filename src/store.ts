import { OrganizationsState } from "./features/OrgList/OrgsSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import orgReducer from './features/OrgList/OrgsSlice'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { Organization, Position, UserData } from './dbSchemas'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'


const rootPersistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    organizations: orgReducer,
    firebase: firebaseReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

interface UserProfile {
    email: string
}

interface DBSchema {
    users: UserData,
    organization: Organization,
    positions: Position
    [name: string]: any
}

// default root state of react-redux
// there will be more
export type RootState = {
    firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
    organizations: OrganizationsState,

}

const options = {
    trace: true
}

const composeEnhancers = composeWithDevTools(options)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true,
    enhancers: composeEnhancers
  })

// typed redux state dispatch
export type AppDispatch = typeof store.dispatch

// for redux-persist
export const persistor = persistStore(store)

