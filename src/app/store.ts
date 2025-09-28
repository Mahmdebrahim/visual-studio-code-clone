import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import fileTreeSlice from './features/tree/fileTreeSlice'

// ...
const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
  },
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch> // Export a hook that can be reused to resolve types



export default store


