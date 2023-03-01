import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface filtersState {
    activeFilters: String[]
}

const initialState: filtersState = {
    activeFilters: []
  }

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<string[]>) => {
            state.activeFilters = action.payload
        }
    }
})

export const { setFilters } = filtersSlice.actions
export const selectFilters = (state: RootState) => state.filters.activeFilters

export default filtersSlice.reducer