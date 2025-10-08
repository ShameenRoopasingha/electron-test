import { configureStore } from '@reduxjs/toolkit'
import { pageReducer } from './slices/pageSlice'

const CompStore = configureStore({
  reducer: {
    page: pageReducer
  }
})

export type RootState = ReturnType<typeof CompStore.getState>
export type AppDispatch = typeof CompStore.dispatch

export default CompStore
