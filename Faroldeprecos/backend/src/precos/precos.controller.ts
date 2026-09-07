import { Request, Response, NextFunction } from "express";
import * as precosService from "./precos.service";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const precos = await precosService.listAll();
    res.json(precos);
  } catch (err) {
    next(err);
  }
}