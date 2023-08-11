import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            
            const existingItem = state.productData.find(
                (item) => item.id === newItem.id
            );
            console.log(existingItem)

            if(existingItem){
                existingItem.quantity ++;
                existingItem.price += newItem.price
            } else {
                state.productData.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name,
                    image: newItem.image,
                }
                  
                );
            }
            
            
        },
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer