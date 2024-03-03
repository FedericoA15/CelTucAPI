import express from 'express';
import { Model, Document } from 'mongoose';
import { CRUDController } from '../controllers/controller';
import { CRUDService } from '../services/service';

export function createCRUDRoutes<T extends Document>(model: Model<T>) {
    const router = express.Router();
    const service = new CRUDService(model);
    const controller = new CRUDController(service);

    // GET
    router.get('/', controller.getBase);

    // GET BY ID
    router.get('/:id', controller.getIdBase);

    // POST
    router.post('/', controller.postBase);

    // PUT
    router.put('/:id', controller.putBase);

    // DELETE
    router.delete('/:id', controller.deleteBase);

    return router;
}
