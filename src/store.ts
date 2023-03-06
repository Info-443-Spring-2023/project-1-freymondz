import { PositionsState } from "./features/Positions/PositionSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import orgReducer from './features/Positions/PositionSlice'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { Accessibility, Interest, Organization, Position, UserData } from './dbSchemas'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { UserDataState } from "./features/UserDataDialog/UserDataSlice"
import userDataReducer from "./features/UserDataDialog/UserDataSlice"
import { InterestState } from "./features/Interest/InterestSlice"
import interestReducer from "./features/Interest/InterestSlice"
import { connect, ConnectedProps } from "react-redux"
import { filtersState } from "./features/FilterBar/FiltersSlice"
import filterReducer from "./features/FilterBar/FiltersSlice"

export const LOGO_IMG_LOCATION = 'https://firebasestorage.googleapis.com/v0/b/future5-7a3d2.appspot.com/o/logo%2FnewLogo.png?alt=media&token=71aaff1a-b36a-46cd-99bd-5052d0cc5d59'

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['interests', 'position']
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
    positions: PositionsState,
    interests: InterestState,
    userData: UserDataState,
    filters: filtersState
}

const rootReducer = combineReducers({
    organizations: orgReducer,
    firebase: firebaseReducer,
    interests: interestReducer,
    userData: userDataReducer,
    filters: filterReducer
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

const mapState = (state: PersistState) => {
    return {
        initPic: state.userData.profilePic
    }
}
export type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(mapState)
// typed redux state dispatch
export type AppDispatch = typeof store.dispatch

// for redux-persist
export const persistor = persistStore(store)

export type PersistState = ReturnType<typeof persistedReducer>
