import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product";

const routerProduct = express.Router();

routerProduct.get("", getAllProducts)
routerProduct.get("/:id", getProductById)
routerProduct.put("/:id", updateProduct)
routerProduct.post("", createProduct);

export default routerProduct;
