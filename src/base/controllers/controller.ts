import { Request, Response } from "express";
import { Document } from "mongoose";
import { CRUDService } from "../services/service";

export class CRUDController<T extends Document> {
  service: CRUDService<T>;
  imageProp?: string;

  constructor(service: CRUDService<T>, imageProp?: string) {
    this.service = service;
    this.imageProp = imageProp;
  }

  getBase = async (req: Request, res: Response) => {
    try {
      const page: string = (req.query.page as string) || '1';
      const limit: string = (req.query.limit as string) || '2';
      const skip: number = (parseInt(page, 10) - 1) * parseInt(limit, 10);
  
      const { page: _, limit: __, ...filter } = req.query;
  
      const queryFilter = { ...filter, deleted: false };
  
      if (req.query.deleted === "true") {
        queryFilter.deleted = true;
      }
      
      const documents = await this.service.getAll(queryFilter, skip, parseInt(limit, 10));
      res.status(200).json(documents);
    } catch (err) {
      res.status(500).json({ message: "Error retrieving documents" });
    }
  };
  
  

  getIdBase = async (req: Request, res: Response) => {
    try {
      let filter: any = { ...req.query, _id: req.params.id, deleted: false };

      if (req.query.deleted === "true") {
        filter.deleted = true;
      }

      const document = await this.service.getById(filter);
      if (document) {
        res.status(200).json(document);
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error retrieving document" });
    }
  };

  postBase = async (req: Request, res: Response) => {
    try {
      const body = { ...req.body, deleted: false };
      if (this.imageProp && (req as any)[this.imageProp]) {
        body[this.imageProp] = (req as any)[this.imageProp];
      }
      const document = await this.service.create(body);
      res.status(201).json(document);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

  putBase = async (req: Request, res: Response) => {
    try {
      const updatedDocument = await this.service.update(
        req.params.id,
        req.body
      );
      if (updatedDocument) {
        res.status(200).json(updatedDocument);
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error updating document" });
    }
  };

  deleteBase = async (req: Request, res: Response) => {
    try {
      const updatedDocument = await this.service.update(req.params.id, {
        deleted: true,
      });
      if (updatedDocument) {
        res.status(200).json({
          message: "Document marked as deleted",
          document: updatedDocument,
        });
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error marking document as deleted" });
    }
  };

  putBaseForImg = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      if (this.imageProp && (req as any)[this.imageProp]) {
        body[this.imageProp] = (req as any)[this.imageProp];
      }
      const updatedDocument = await this.service.update(
        req.params.id,
        req.body
      );
      if (updatedDocument) {
        res.status(200).json(updatedDocument);
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error updating document" });
    }
  };
}
