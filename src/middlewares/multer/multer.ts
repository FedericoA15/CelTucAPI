import multer from 'multer';
import { cloudinary } from "../../config/cloudinary";

const storage = multer.memoryStorage(); 

const upload = multer({ storage });

const singleUpload = upload.single('archivo'); 
const multipleUpload = upload.array('archivos', 5); 

export { singleUpload, multipleUpload };
