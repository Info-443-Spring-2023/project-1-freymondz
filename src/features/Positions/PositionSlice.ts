import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'


export interface PositionsState {
    currentPositionId: String
}

const initialState: PositionsState = {
    currentPositionId: ''
  }

const organizationsSlice = createSlice({
    name: 'positions',
    initialState,
    reducers: {
        setPositionId: (state, action: PayloadAction<string>) => {
        state.currentPositionId = action.payload
        }
    }
})

export const { setPositionId } = organizationsSlice.actions
export const selectPositionId = (state: RootState) => state.positions.currentPositionId

export default organizationsSlice.reducer