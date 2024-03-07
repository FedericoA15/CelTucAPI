import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { cloudinary } from '../../config/cloudinary';

const upload = multer({ dest: 'uploads/' });

export const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  upload.single('field')(req, res, async function (err) {
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result.url);
      next();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      }
    }
  });
};

export const uploadMultipleImages = (req: Request, res: Response, next: NextFunction) => {
  upload.array('fields', 10)(req, res, async function (err) {
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message });
    }

    if (!req.files) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // Cargar las imágenes a Cloudinary
    try {
      const urls = [];
      for (const file of req.files as Express.Multer.File[]) {
        const result = await cloudinary.uploader.upload(file.path);
        urls.push(result.url);
      }
      // Las URLs de las imágenes estarán disponibles en urls
      console.log(urls);
      next();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      }
    }
  });
};

