import "dotenv/config";
import express from "express";
import { PostRoutes } from "./routes/post.routes";
import { PostController } from "./controller/post.controller";
import { GeminiAIService } from "./service/gemini-ai.service";

const app = express();
app.use(express.json());

const postController = new PostController(new GeminiAIService());
const postRoutes = new PostRoutes(postController);

app.use(postRoutes.getRouter());

const port = process.env.port;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
