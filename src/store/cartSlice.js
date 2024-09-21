import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addCart: (state, action) =>{
            // Mutating the state here (Directly change)
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length= 0;
        }
    }
});

export const {addCart, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;