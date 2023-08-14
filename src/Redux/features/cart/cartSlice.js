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


            if (existingItem) {
                existingItem.quantity++;
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

        removeFromCart: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item.id !== action.payload
            )
        },

        resetCart: (state) => {
            state.productData = []
        },

        incrementQty: (state, action) => {
            const item = state.productData.find(
                item.id === action.payload.id
            )
            if (item) {
                item.quantity++
            }
        },

        decrementQty: (state, action) => {
            const item = state.productData.find(
                item.id === action.payload.id
            )
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },

    },
})

export const {
    addToCart,
    removeFromCart,
    resetCart,
    incrementQty,
    decrementQty,
} = cartSlice.actions
export default cartSlice.reducer