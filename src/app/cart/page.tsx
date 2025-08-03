"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import {
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
} from "../../store/cartSlice";

const Cart = () => {
	// Get cart items from Redux store
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();

	// Sample products to add to cart
	const sampleProducts = [
		{ id: 1, name: "Apple", price: 1.5 },
		{ id: 2, name: "Banana", price: 0.75 },
		{ id: 3, name: "Orange", price: 2.0 },
	];

	// Add item to cart
	const handleAddItem = (product: {
		id: number;
		name: string;
		price: number;
	}) => {
		dispatch(addItem(product));
	};

	// Remove item from cart
	const handleRemoveItem = (id: number) => {
		dispatch(removeItem(id));
	};

	// Increase quantity
	const handleIncreaseQuantity = (id: number) => {
		dispatch(increaseQuantity(id));
	};

	// Decrease quantity
	const handleDecreaseQuantity = (id: number) => {
		dispatch(decreaseQuantity(id));
	};

	// Calculate total
	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div className="max-w-4xl mx-auto p-4 mt-36">
			<h1 className="text-2xl font-bold mb-4">Cart</h1>

			{/* Map over the products */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Products</h2>
				<div className="grid grid-cols-3 gap-4">
					{sampleProducts.map((product) => (
						<div key={product.id} className="border p-4 rounded">
							<h3 className="font-medium">{product.name}</h3>
							<p className="text-gray-600">${product.price}</p>
							<button
								onClick={() => handleAddItem(product)}
								className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600"
							>
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</div>

			{/* Cart items */}
			<div>
				<h2 className="text-xl font-semibold mb-4">Cart Items</h2>
				{cartItems.length === 0 ? (
					<p className="text-gray-500">Your cart is empty</p>
				) : (
					<div>
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="border p-4 rounded mb-2 flex justify-between items-center"
							>
								<div>
									<h3 className="font-medium">{item.name}</h3>
									<p className="text-gray-600">${item.price} each</p>
								</div>

								<div className="flex items-center gap-2">
									<button
										onClick={() => handleDecreaseQuantity(item.id)}
										className="bg-gray-800 px-2 py-1 rounded"
									>
										-
									</button>

									<span className="mx-2">{item.quantity}</span>

									<button
										onClick={() => handleIncreaseQuantity(item.id)}
										className="bg-gray-800 px-2 py-1 rounded"
									>
										+
									</button>

									<button
										onClick={() => handleRemoveItem(item.id)}
										className="bg-red-500 text-white px-3 py-1 rounded ml-4 hover:bg-red-600"
									>
										Remove
									</button>
								</div>

								<div>
									<p className="font-semibold">
										${(item.price * item.quantity).toFixed(2)}
									</p>
								</div>
							</div>
						))}

						<div className="border-t pt-4 mt-4">
							<h3 className="text-lg font-bold">Total: ${total.toFixed(2)}</h3>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
