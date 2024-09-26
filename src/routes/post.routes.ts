import { Router, Request, Response } from "express";
import { PostController } from "../controller/post.controller";

export class PostRoutes {
  private router: Router;
  private postController: PostController;

  constructor(postController: PostController) {
    this.router = Router();
    this.postController = postController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/posts", (req: Request, res: Response) =>
      this.postController.create(req, res)
    );
  }

  public getRouter() {
    return this.router;
  }
}
