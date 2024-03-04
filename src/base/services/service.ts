import { Model, Document, UpdateQuery } from 'mongoose';

export class CRUDService<T extends Document> {
    model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    getAll = async (filter = {}) => {
        return await this.model.find(filter);
    };
    
    getById = async (filter = {}) => {
        return await this.model.findOne(filter);
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
        return await this.model.findByIdAndUpdate(id, { deleted: true }, { new: true });
    };
    
}
