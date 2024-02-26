import mongoose, { Schema } from "mongoose";
import { MainCarouselItem } from "../../typings/interfaces";

interface MainCarouselItemModel extends Document { }

const MainCarouselItemSchema: Schema = new Schema({
    title: { type: String },
    imgUrl: { type: String },
    category: { type: String },
    discount: { type: Number },
    buttonLink: { type: String },
    buttonText: { type: String },
    description: { type: String },
}, {
    timestamps: true,
});

const MainCarouselItemModel = mongoose.model<MainCarouselItemModel>('MainCarouselItem', MainCarouselItemSchema);

export default MainCarouselItemModel;