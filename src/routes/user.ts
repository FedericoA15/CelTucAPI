import express from "express";
import { createUser } from "../controllers/user";

const routerUser = express.Router();

routerUser.post("", createUser);

export default routerUser;
