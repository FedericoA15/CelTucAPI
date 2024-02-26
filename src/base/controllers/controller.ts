import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { CRUDService } from '../services/service';

export class CRUDController<T extends Document> {
    service: CRUDService<T>;

    constructor(service: CRUDService<T>) {
        this.service = service;
    }

    getBase = async (req: Request, res: Response) => {
        try {
            const documents = await this.service.getAll();;
            res.status(200).json(documents);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving documents' });
        }
    };

    getIdBase = async (req: Request, res: Response) => {
        try {
            const document = await this.service.getById(req.params.id);
            if (document) {
                res.status(200).json(document);
            } else {
                res.status(404).json({ message: 'Document not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving document' });
        }
    };

    postBase = async (req: Request, res: Response) => {
        try {
            const newDocument = await this.service.create(req.body);
            res.status(201).json(newDocument);
        } catch (err) {
            res.status(500).json({ message: 'Error creating document' });
        }
    };

    putBase = async (req: Request, res: Response) => {
        try {
            const updatedDocument = await this.service.update(req.params.id, req.body);
            if (updatedDocument) {
                res.status(200).json(updatedDocument);
            } else {
                res.status(404).json({ message: 'Document not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Error updating document' });
        }
    };

    deleteBase = async (req: Request, res: Response) => {
        try {
            const document = await this.service.delete(req.params.id);
            if (document) {
                res.status(200).json({ message: 'Document deleted' });
            } else {
                res.status(404).json({ message: 'Document not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Error deleting document' });
        }
    };
}
