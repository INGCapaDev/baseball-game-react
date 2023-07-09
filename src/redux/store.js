import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { visitorsSlice } from './reducers/visitorsSlice'
import { localsSlice } from './reducers/localsSlice'
import { gameSlice } from './reducers/gameSlice'

export const store = configureStore({
  reducer: combineReducers({
    visitors: visitorsSlice.reducer,
    locals: localsSlice.reducer,
    game: gameSlice.reducer
  }),
})