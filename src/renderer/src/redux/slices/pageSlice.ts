import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
  currentPage: string
}

const initialState: PageState = {
  currentPage: 'sales'
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload
    }
  }
})

export const { setPage } = pageSlice.actions
export const pageReducer = pageSlice.reducer
