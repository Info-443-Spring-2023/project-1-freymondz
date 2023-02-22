import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoogleAuthProvider } from 'firebase/auth'
import { RootState } from '../../store'


export interface firebaseUIConfigState {
    signInFlow: string,
    signInSuccessUrl: string,
    signInOptions: string[],
}

const initialState: any = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
}

const firebaseUIConfigSlice = createSlice({
    name: 'firebaseUIConfig',
    initialState,
    reducers: {
        setSignInOption: (state, action: PayloadAction<string[]>) => {
        state.status = action.payload
        },
    }
})

export const { setSignInOption } = firebaseUIConfigSlice.actions
export const selectUIConfig = (state: RootState) => state.firebaseUIConfig

export default firebaseUIConfigSlice.reducer