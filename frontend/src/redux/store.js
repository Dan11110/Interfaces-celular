import {configureStore} from '@reduxjs/toolkit'
import CelularReducer from './CelularSlice'

export const store = configureStore({
            reducer:{
                celulares: CelularReducer
            }
})