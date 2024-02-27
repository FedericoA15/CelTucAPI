import mongoose, { Document, Schema } from 'mongoose';
import { Brand } from "../../typings/interfaces";

interface BrandModel extends Brand, Document { }

const BrandSchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    featured: { type: Boolean },
}, {
    timestamps: true,
});

const BrandModel = mongoose.model<BrandModel>('Brand', BrandSchema);


export default BrandModel;