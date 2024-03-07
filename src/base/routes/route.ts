import express from 'express';
import { Model, Document } from 'mongoose';
import { CRUDController } from '../controllers/controller';
import { CRUDService } from '../services/service';

export function createCRUDRoutes<T extends Document>(model: Model<T>, imageProp?: string) {
    const router = express.Router();
    const service = new CRUDService(model);
    const controller = new CRUDController(service, imageProp);

    // GET
    router.get('/', controller.getBase);

    // GET BY ID
    router.get('/:id', controller.getIdBase);

    // POST
    router.post('/', controller.uploadImageOptional, controller.postBase);

    // PUT
    router.put('/:id', controller.uploadImageOptional, controller.putBase);

    // DELETE
    router.delete('/:id', controller.deleteBase);

    if (imageProp) {
        router.put(`/:id/${imageProp}`, controller.uploadImageOptional, controller.putBase);
    }

    return router;
}
