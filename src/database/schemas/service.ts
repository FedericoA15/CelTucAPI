import mongoose, { Document, Schema } from 'mongoose';
import { Service } from '../../typings/interfaces';

interface ServiceModel extends Service, Document { }

const ServiceSchema: Schema = new Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
}, {
  timestamps: true,
});

const ServiceModel = mongoose.model<ServiceModel>('Service', ServiceSchema);

export default ServiceModel;