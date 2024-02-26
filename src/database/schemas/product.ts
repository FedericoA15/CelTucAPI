import mongoose, { Schema } from "mongoose";
import { Product } from "../../typings/interfaces";

interface ProductModel extends Document { }

const ProductSchema: Schema = new Schema({
    unit: { type: Schema.Types.Mixed },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    discount: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String },
    size: [{ type: String }],
    status: { type: String },
    colors: [{ type: String }],
    images: [{ type: String }],
    categories: [{ type: Schema.Types.Mixed }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    published: { type: Boolean },
  }, {
    timestamps: true,
  });
  
  const ProductModel = mongoose.model<ProductModel>('Product', ProductSchema);

  export default ProductModel;