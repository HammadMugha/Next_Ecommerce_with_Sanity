import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action)=>{
      const existingProduct = state.cartItems.find(item=> item.slug === action.payload.slug)
      if(existingProduct){
        existingProduct.quantity += action.payload.quantity
      }else{
        state.cartItems.push(action.payload)
      } 
    },
    increaseQty: (state,action)=>{
      const existingProduct = state.cartItems.find(item=> item.slug === action.payload.slug)
      existingProduct && existingProduct.quantity++
    },
    decreaseQty: (state,action)=>{
      const existingProduct = state.cartItems.find(item=> item.slug === action.payload.slug)
      if(existingProduct.quantity === 1){
        existingProduct.quantity = 1
      }else{
        existingProduct.quantity--
      }
      
    },
    deleteProduct: (state,action)=>{
      state.cartItems = state.cartItems.filter(item=> item.slug !== action.payload.slug)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteProduct,increaseQty,decreaseQty } = cartSlice.actions

export default cartSlice.reducer