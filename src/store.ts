import { combineReducers } from "@reduxjs/toolkit"
import { OrganizationsState } from "./features/OrgList/OrgsSlice"

interface UserProfile {
    email: string
}

// default root state of react-redux
export type RootState = {
    organizations: OrganizationsState
}


// const rootReducer = combineReducers({
//     organizations: organizationsReducer.reducer
// })


