import mongoose, { Document, Schema } from 'mongoose';
import { Ticket } from '../../typings/interfaces';

export interface TicketModel extends Ticket, Document { }

const TicketSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  slug: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: String, required: true },
  category: { type: String, required: true },
  conversation: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
}, {
  timestamps: true,
});

const TicketModel = mongoose.model<TicketModel>('Ticket', TicketSchema);

export default TicketModel;
