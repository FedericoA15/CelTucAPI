import mongoose, { Document, Schema } from "mongoose";
import { Address } from "../../typings/interfaces";

interface AddressModel extends Address, Document { }

const AddressSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    city: { type: String, required: true },
    title: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    country: { type: String, required: true },
}, {
    timestamps: true,
});

const AddressModel = mongoose.model<AddressModel>('Address', AddressSchema);

export default AddressModel;