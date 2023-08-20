import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
	_id: Schema.Types.ObjectId,
	id: Number,
	name: String,
	price: Number,
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
