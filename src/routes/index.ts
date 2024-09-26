import { Router } from "express";
import { PostController } from "../controller/post.controller";
import { GeminiAIService } from "../service/gemini-ai.service";

const postController = new PostController(new GeminiAIService());

const routes = Router();

routes.post("/posts", (req, res) => postController.create(req, res));

export default routes;
