import express from 'express';
import { Model, Document } from 'mongoose';
import { CRUDController } from '../controllers/controller';
import { CRUDService } from '../services/service';
import { uploadImage, uploadMultipleImages } from '../../middlewares/multer/multer';

export function createCRUDRoutes<T extends Document>(model: Model<T>, imageProp?: string) {
    const router = express.Router();
    const service = new CRUDService(model);
    const controller = new CRUDController(service, imageProp);

    // GET
    router.get('/', controller.getBase);

    // GET BY ID
    router.get('/:id', controller.getIdBase);

    // POST
    if(imageProp){
        router.post('/', uploadImage(imageProp), controller.postBase);
    }else{
        router.post('/', controller.postBase);
    }

    // PUT
    router.put('/:id', controller.putBase);

    // DELETE
    router.delete('/:id', controller.deleteBase);

    // PUT FOR IMG ONLY
    if(imageProp){
        router.put("update-img/:id", uploadImage(imageProp), controller.putBaseForImg)
    }

    return router;
}
