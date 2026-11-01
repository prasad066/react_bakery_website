import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    cart:[]
}

export const cartslice= createSlice({
    name:'crt',
    initialState,
    reducers:{
        additem:(state,{payload})=>{
            const prod=state.cart.find((data)=>data.id==payload.id);
            if(prod){
                prod.quantity+=1
            }
            else{
                state.cart.push({...payload,quantity:1})
            }
        },
        delitem:(state,{payload})=>{
            const produ=state.cart.findIndex((data)=>data.id==payload.id);
            if(produ!==-1){
                if(state.cart[produ].quantity>1){
                    state.cart[produ].quantity-=1
                }
                else{
                    state.cart.splice(produ,1)
                }
            }


        }
    }

})
export const{additem,delitem}=cartslice.actions
const cartreducer=cartslice.reducer
export default cartreducer;