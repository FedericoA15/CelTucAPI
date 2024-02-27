import mongoose, { Document, Schema } from 'mongoose';
import { FurnitureCarouselItem } from "../../typings/interfaces";

interface FurnitureCarouselItemModel extends FurnitureCarouselItem, Document { }

const FurnitureCarouselItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    subTitle: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});

const FurnitureCarouselItemModel = mongoose.model<FurnitureCarouselItemModel>('FurnitureCarouselItem', FurnitureCarouselItemSchema);

export default FurnitureCarouselItemModel;