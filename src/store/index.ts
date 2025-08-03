import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create the store
export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
