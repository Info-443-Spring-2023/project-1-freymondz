import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { OrganizationsState } from "./features/OrgList/OrgsSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import orgReducer from './features/OrgList/OrgsSlice'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'

const rootPersistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    organizations: orgReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

interface UserProfile {
    email: string
}

// default root state of react-redux
// there will be more
export type RootState = {
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


// const rootReducer = combineReducers({
//     organizations: organizationsReducer.reducer
// })


