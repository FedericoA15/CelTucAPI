import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { cloudinary } from "../../config/cloudinary";

const upload = multer({ dest: "uploads/" });

export const uploadImage = (imageProp: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    upload.single("field")(req, res, async function (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      }

      if (req.file) {
        try {
          const result = await cloudinary.uploader.upload(req.file.path, {
            folder: imageProp, 
          });          
          console.log(result.url);

          // El body.body se deja solo para prueba con postman
          if (req.body && typeof req.body.body === "string") {
            req.body = JSON.parse(req.body.body);
          }
          (req as any)[imageProp] = result.url;
        } catch (err) {
          if (err instanceof Error) {
            return res.status(500).json({ error: err.message });
          }
        }
      }

      next();
    });
  };
};

export const uploadMultipleImages = (imageProp: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    upload.array("fields", 10)(req, res, async function (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      }

      if (req.files) {
        try {
          const urls = [];
          for (const file of req.files as Express.Multer.File[]) {
            const result = await cloudinary.uploader.upload(file.path, {
              folder: imageProp, 
            });
            urls.push(result.url);
          }
          console.log(urls);

          // El body.body se deja solo para prueba con postman
          if (req.body && typeof req.body.body === "string") {
            req.body = JSON.parse(req.body.body);
          }
          (req as any)[imageProp] = urls;
        } catch (err) {
          if (err instanceof Error) {
            return res.status(500).json({ error: err.message });
          }
        }
      }

      next();
    });
  };
};
