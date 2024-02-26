import mongoose, { Document, Schema } from 'mongoose';
import { Shop } from '../../typings/interfaces';

interface ShopModel extends Shop, Document { }

const ShopSchema: Schema = new Schema({
  slug: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number },
  verified: { type: Boolean, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  coverPicture: { type: String, required: true },
  profilePicture: { type: String, required: true },
  socialLinks: {
    facebook: { type: String },
    youtube: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
}, {
  timestamps: true,
});

const ShopModel = mongoose.model<ShopModel>('Shop', ShopSchema);

export default ShopModel;