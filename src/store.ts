import { OrganizationsState } from "./features/OrgList/OrgsSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import orgReducer from './features/OrgList/OrgsSlice'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { Accessibility, Interest, Organization, Position, UserData } from './dbSchemas'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { UserDataState } from "./features/UserDataDialog/UserDataSlice"
import userDataReducer from "./features/UserDataDialog/UserDataSlice"
import { InterestState } from "./features/Interest/InterestSlice"
import interestReducer from "./features/Interest/InterestSlice"


const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['interests']
}


interface UserProfile {
    email: string
}

interface DBSchema {
    user: UserData,
    organization: Organization,
    positions: Position,
    interest: Interest,
    accessibility: Accessibility
    [name: string]: any
}

// default root state of react-redux
// there will be more
export type RootState = {
    firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
    organizations: OrganizationsState,
    interests: InterestState,
    userData: UserDataState
}

const rootReducer = combineReducers({
    organizations: orgReducer,
    firebase: firebaseReducer,
    interests: interestReducer,
    userData: userDataReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

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

export type PersistState = ReturnType<typeof persistedReducer>
