import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoogleAuthProvider } from 'firebase/auth'
import { RootState } from '../../store'


export interface LoginState {
    status: boolean,
}

const initialState: any = {
    status: false,
  }

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginStatus: (state, action: PayloadAction<boolean>) => {
        state.status = action.payload
        }
    }
})

export const { setLoginStatus } = loginSlice.actions
export const selectLoginStatus = (state: RootState) => state.login.status

export default loginSlice.reducer