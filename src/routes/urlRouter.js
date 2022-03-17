import { Router } from "express";
import { createShorterUrl } from "../controllers/urlController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import urlSchema from "../schemas/urlSchema.js";

const userRouter = Router();
userRouter.post('/urls/shorten', validateSchemaMiddleware(urlSchema), validateTokenMiddleware, createShorterUrl);
/* userRouter.get('/users', validateTokenMiddleware, getUser); */
export default userRouter;