import { createSlice } from "@reduxjs/toolkit";

// What each item in the cart looks like
interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

// What the whole cart state looks like
interface CartState {
	items: CartItem[];
}

// Starting state - empty cart
const initialState: CartState = {
	items: [],
};

// Create the cart slice
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// Add item to cart
		addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);

			if (existingItem) {
				// If item already exists, increase quantity
				existingItem.quantity++;
			} else {
				// If new item, add it with quantity 1
				state.items.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					quantity: 1,
				});
			}
		},

		// Remove item completely from cart
		removeItem: (state, action) => {
			const id = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
		},

		// Increase quantity
		increaseQuantity: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				item.quantity++;
			}
		},

		// Decrease quantity
		decreaseQuantity: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item && item.quantity > 1) {
				item.quantity--;
			}
		},
	},
});

// Export actions
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
