import mongoose, { Document, Schema } from 'mongoose';
import { Order } from "../../typings/interfaces";

interface OrderModel extends Order, Document { }

const OrderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tax: { type: Number, required: true },
    items: [{ type: Schema.Types.Mixed, required: true }],
    createdAt: { type: Schema.Types.Date, required: true },
    discount: { type: Number, required: true },
    deliveredAt: { type: Schema.Types.Date, required: true },
    totalPrice: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true },
    shippingAddress: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Processing", "Delivered", "Cancelled"], required: true },
}, {
    timestamps: true,
});

const OrderModel = mongoose.model<OrderModel>('Order', OrderSchema);

export default OrderModel;