import mongoose, { Document, Schema } from 'mongoose';
import { HealthCarouselItem } from "../../typings/interfaces";

interface HealthCarouselItemModel extends HealthCarouselItem, Document { }

const HealthCarouselItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
}, {
    timestamps: true,
});

const HealthCarouselItemModel = mongoose.model<HealthCarouselItemModel>('HealthCarouselItem', HealthCarouselItemSchema);


export default HealthCarouselItemModel;