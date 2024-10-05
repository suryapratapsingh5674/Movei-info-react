import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import PersonReducer from './reducers/PersonSlice'
import TvReducer from './reducers/TvSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    Person: PersonReducer,
    Tv: TvReducer,
  },
})