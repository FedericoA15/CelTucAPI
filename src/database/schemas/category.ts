import mongoose, { Document, Schema } from 'mongoose';
import { Category } from "../../typings/interfaces";

interface CategoryModel extends Category, Document { }

const CategorySchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    icon: { type: String },
    image: { type: String },
    parent: [{ type: String }],
    featured: { type: Boolean },
    description: { type: String },
}, {
    timestamps: true,
});

const CategoryModel = mongoose.model<CategoryModel>('Category', CategorySchema);

export default CategoryModel;