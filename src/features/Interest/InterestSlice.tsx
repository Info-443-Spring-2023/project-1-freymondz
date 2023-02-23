import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface InterestState {
  interests: string[];
  selected_interests: string[];
}

const initialState: InterestState = {
  interests: [
    'music',
    'film',
    'dance',
    'technology',
    'coding',
    'kid',
    'nature',
    'handcraft',
    'finace',
    'teaching',
    'analytics',
    'design',
    'marketing',
    'cleaning',
    'healthcare'],
  selected_interests: []
}

const interestSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {
    pushSelectedInterest: (state, action: PayloadAction<string>) => {
      state.selected_interests.push(action.payload)
    }
  }
})

export const { pushSelectedInterest } = interestSlice.actions
export const selectInterest = (state: RootState) => state.interests.interests
export const selectSelectedInterest = (state: RootState) => state.interests.selected_interests

export default interestSlice.reducer