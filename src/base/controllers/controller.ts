import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';
import { CRUDService } from '../services/service';
import { uploadImage } from '../../middlewares/multer/multer';

export class CRUDController<T extends Document> {
    service: CRUDService<T>;
    imageProp?: string;

    constructor(service: CRUDService<T>, imageProp?: string) {
        this.service = service;
        this.imageProp = imageProp;
    }

    getBase = async (req: Request, res: Response) => {
        try {
            let filter = { ...req.query, deleted: false };
    
            if (req.query.deleted === 'true') {
                filter.deleted = true;
            }
    
            const documents = await this.service.getAll(filter);
            res.status(200).json(documents);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving documents' });
        }
    };
    
    getIdBase = async (req: Request, res: Response) => {
        try {
            let filter: any = { ...req.query, _id: req.params.id, deleted: false };
    
            if (req.query.deleted === 'true') {
                filter.deleted = true;
            }
    
            const document = await this.service.getById(filter);
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
            const body = req.body;
            console.log(body);
            if (this.imageProp && req.body.imageURL) {
                body[this.imageProp] = req.body.imageURL;
            }
            const document = await this.service.create(body);
            res.status(201).json(document);
        } catch (err) {
            res.status(500).json({ error: "err.message" });
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
            const updatedDocument = await this.service.update(req.params.id, { deleted: true });
            if (updatedDocument) {
                res.status(200).json({ message: 'Document marked as deleted', document: updatedDocument });
            } else {
                res.status(404).json({ message: 'Document not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Error marking document as deleted' });
        }
    };
}
