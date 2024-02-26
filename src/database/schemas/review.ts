import mongoose, { Schema } from "mongoose";
import { Review } from "../../typings/interfaces";

interface ReviewModel extends Review, Document { }

const ReviewSchema: Schema = new Schema({
    rating: { type: Number, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    published: { type: Boolean },
}, {
    timestamps: true,
});

const ReviewModel = mongoose.model<ReviewModel>('Review', ReviewSchema);

export default ReviewModel