import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface UserDataState {
  edit: boolean
}

const initialState: UserDataState = {
    edit: false
  }

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserDataEdit: (state, action: PayloadAction<boolean>) => {
        state.edit = action.payload
        }
    }
})

export const { setUserDataEdit } = userDataSlice.actions
export const selectUserDataEdit = (state: RootState) => state.userData.edit

export default userDataSlice.reducer