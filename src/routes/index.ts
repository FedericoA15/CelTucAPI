import { Router } from "express";
import { createCRUDRoutes } from "../base/routes/route";
import { TicketModel, UserModel } from "../database/schemas/index";

const router = Router();

router.use("/user", createCRUDRoutes(UserModel))
router.use("/ticket", createCRUDRoutes(TicketModel))

export default router;