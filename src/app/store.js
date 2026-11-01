import { configureStore } from '@reduxjs/toolkit'
import { cakesApi } from '../services/cakes'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartreducer from '../components/cart/cartitems'
import { usersApi } from '../services/usersApi'

export const store = configureStore({
  reducer: {
    [cakesApi.reducerPath]: cakesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    cReducer:cartreducer,
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cakesApi.middleware,usersApi.middleware),
})
setupListeners(store.dispatch)