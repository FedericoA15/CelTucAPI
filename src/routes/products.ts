import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product";
import { uploadMultipleImages } from "../middlewares/multer/multer";

const routerProduct = express.Router();

routerProduct.get("", getAllProducts)
routerProduct.get("/:id", getProductById)
routerProduct.put("/:id", updateProduct)
routerProduct.post("", uploadMultipleImages("images"),createProduct);

export default routerProduct;
