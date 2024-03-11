import express from "express";
import { createProduct } from "../controllers/product";

const routerProduct = express.Router();

routerProduct.post("", createProduct);

export default routerProduct;
