import mongoose, { Document, Schema } from 'mongoose';
import { User } from '../../typings/interfaces';

interface UserModel extends User, Document { }

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    avatar: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    verified: { type: Boolean, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    deleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const UserModel = mongoose.model<UserModel>('User', UserSchema);

export default UserModel;
