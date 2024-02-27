import mongoose, { Document, Schema } from 'mongoose';
import { Blog } from "../../typings/interfaces";

interface BlogModel extends Blog, Document { }

const BlogSchema: Schema = new Schema({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    createdAt: { type: String, required: true },
    thumbnail: { type: String, required: true },
    comments: { type: Number },
    description: { type: String },
}, {
    timestamps: true,
});

const BlogModel = mongoose.model<BlogModel>('Blog', BlogSchema);


export default BlogModel;