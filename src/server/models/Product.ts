import mongoose, { Schema, Document, Model } from "mongoose";

// Define TypeScript interface
export interface Product extends Document {
	title: string;
	description: string;
	price: number;
	category: string;
	createdAt: Date;
	updatedAt: Date;
}

// Define static method interface
interface ProductModel extends Model<Product> {
	findByCategory(category: string): Promise<Product[]>;
}

// Create schema
const ProductSchema = new Schema<Product>(
	{
		title: {
			type: String,
			required: [true, "Title is required"],
			trim: true,
		},
		description: {
			type: String,
			required: [true, "Description is required"],
		},
		price: {
			type: Number,
			required: [true, "Price is required"],
			min: [0, "Price cannot be negative"],
		},
		category: {
			type: String,
			required: [true, "Category is required"],
			lowercase: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

// Add static method
ProductSchema.statics.findByCategory = function (category: string) {
	return this.find({ category: category.toLowerCase() });
};

// Export model
export const Product = mongoose.model<Product, ProductModel>(
	"Product",
	ProductSchema
);
