import mongoose, { Document, Schema } from 'mongoose';
import { CategoryBasedProducts } from "../../typings/interfaces";

interface CategoryBasedProductsModel extends CategoryBasedProducts, Document { }


const CategoryBasedProductsSchema: Schema = new Schema({
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    category: {
        title: { type: String },
        children: [{ type: String }],
    },
}, {
    timestamps: true,
});

const CategoryBasedProductsModel = mongoose.model<CategoryBasedProductsModel>('CategoryBasedProducts', CategoryBasedProductsSchema);

export default CategoryBasedProductsModel;