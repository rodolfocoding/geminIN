import { Request, Response } from "express";
import { createPostPrompt } from "../prompts";
import { IGeminiAIService } from "../interfaces/geminiAI-service";

export class PostController {
  private readonly geminiAIService: IGeminiAIService;

  constructor(geminiAIService: IGeminiAIService) {
    this.geminiAIService = geminiAIService;
  }

  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { subject } = req.body;

      if (!subject || typeof subject !== "string") {
        return res.status(400).json({
          message:
            "O campo 'subject' é obrigatório e deve ser uma string válida.",
        });
      }

      const prompt: string = createPostPrompt(subject);

      const generatedPost = await this.geminiAIService.sendPrompt(prompt);

      return res.status(200).json({ post: generatedPost });
    } catch (err) {
      console.error("Erro ao gerar postagem:", err);

      return res.status(500).json({
        message:
          "Erro ao gerar a postagem. Por favor, tente novamente mais tarde.",
        error: `${err}`,
      });
    }
  }
}
