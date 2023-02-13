import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'


export interface OrganizationsState {
    currentOrgId: ''
}

const initialState: any = {
    currentOrgId: ''
  }

const organizationsSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setOrgId: (state, action: PayloadAction<string>) => {
        state.orgId = action.payload
        }
    }
})

export const { setOrgId } = organizationsSlice.actions
export const selectOrgId = (state: RootState) => state.organizations.currentOrgId

export default organizationsSlice.reducer