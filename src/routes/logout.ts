import express from 'express';
import { logout } from '../controllers/logout';

const routerLogout = express.Router();

routerLogout.post("", logout)


export default routerLogout;