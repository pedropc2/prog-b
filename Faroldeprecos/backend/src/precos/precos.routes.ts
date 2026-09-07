import { Router } from "express";
import * as precosController from "./precos.controller";

const router = Router();
router.get("/api/precos", precosController.getAll);

export default router;
