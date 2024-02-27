import mongoose, { Document, Schema } from 'mongoose';
import { GroceryTwoCarouselItem } from "../../typings/interfaces";

interface GroceryTwoCarouselItemModel extends GroceryTwoCarouselItem, Document { }

const GroceryTwoCarouselItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true },
    appStoreLink: { type: String, required: true },
    playStoreLink: { type: String, required: true },
}, {
    timestamps: true,
});

const GroceryTwoCarouselItemModel = mongoose.model<GroceryTwoCarouselItemModel>('GroceryTwoCarouselItem', GroceryTwoCarouselItemSchema);


export default GroceryTwoCarouselItemModel;