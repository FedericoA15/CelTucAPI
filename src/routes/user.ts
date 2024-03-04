import express from "express";
import { postUser } from "../controllers/user";

const routerUser = express.Router();

routerUser.post("", postUser);

export default routerUser;
