import { Router } from "express";
import PostController from "../controller/post.controller";

const routes = Router();

routes.post("/posts", PostController.create);

export default routes;
