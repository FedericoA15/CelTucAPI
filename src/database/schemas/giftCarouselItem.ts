import mongoose, { Document, Schema } from 'mongoose';
import { GiftCarouselItem } from "../../typings/interfaces";

interface GiftCarouselItemModel extends GiftCarouselItem, Document { }

const GiftCarouselItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    subTitle: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
}, {
    timestamps: true,
});

const GiftCarouselItemModel = mongoose.model<GiftCarouselItemModel>('GiftCarouselItem', GiftCarouselItemSchema);

export default GiftCarouselItemModel;