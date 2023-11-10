import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState } from './type'

const initialState: InitialState = {
    setSelectedStatus: []
}
export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
     StatusList: (state: any, action: PayloadAction<Array<any>>) => {
        state.setSelectedStatus = action?.payload
      }
    }})
    export default chatSlice.reducer