import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface UserDataState {
  edit: boolean,
  currInterest: String[],
  currAccessibility: String[],
  profilePic: String,
}

const initialState: UserDataState = {
    edit: false,
    currInterest: [],
    currAccessibility: [],
    profilePic: ''
  }

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserDataEdit: (state, action: PayloadAction<boolean>) => {
        state.edit = action.payload
        },
        setUserDataInterest: (state, action: PayloadAction<String[]>) => {
          state.currInterest = action.payload
        },
        setUserDataAccessibility: (state, action: PayloadAction<String[]>) => {
          state.currAccessibility = action.payload
        },
        setUserDataPic: (state, action: PayloadAction<String>) => {
          state.profilePic = action.payload
        },
        pushUserDataInterest: (state, action: PayloadAction<String>) => {
          state.currInterest.push(action.payload)
        },
        pushUserDataAccessibility: (state, action: PayloadAction<String>) => {
          state.currAccessibility.push(action.payload)
        },
    }
})

export const { setUserDataEdit, setUserDataInterest,  setUserDataAccessibility, setUserDataPic, pushUserDataAccessibility, pushUserDataInterest } = userDataSlice.actions
export const selectUserDataEdit = (state: RootState) => state.userData.edit
export const selectUserDataInterest = (state: RootState) => state.userData.currInterest
export const selectUserDataAccessibility = (state: RootState) => state.userData.currAccessibility
export const selectUserDataPic = (state: RootState) => state.userData.profilePic
export default userDataSlice.reducer