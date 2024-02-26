import { Request, Response } from 'express';
import { Model, Document, UpdateQuery } from 'mongoose';

export class CRUDService<T extends Document> {
    model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    getAll = async () => {
        return await this.model.find();
    };

    getById = async (id: string) => {
        return await this.model.findById(id);
    };

    create = async (body: T) => {
        const newDocument = new this.model(body);
        await newDocument.save();
        return newDocument;
    };

    update = async (id: string, body: UpdateQuery<T>) => {
        return await this.model.findByIdAndUpdate(id, body, { new: true });
    };

    delete = async (id: string) => {
        return await this.model.findByIdAndDelete(id);
    };
}
