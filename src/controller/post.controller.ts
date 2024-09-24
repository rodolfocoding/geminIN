import { Request, Response } from "express";
import GeminiAIService from "../service/gemini-ai.service";

class PostController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { subject } = req.body;

      if (!subject) {
        return res.status(400).json({
          message: "O campo 'subject' é obrigatório.",
        });
      }

      const prompt: string = `Crie uma postagem para o LinkedIn sobre um tópico relevante e atual na área de ${subject}.
      A postagem deve destacar uma tendência, inovação ou boas práticas, 
      com foco em como isso impacta profissionais da área. Ela deve ser informativa, 
      inspiradora e promover o engajamento da comunidade, convidando o público a refletir ou compartilhar suas opiniões.
      Inclua uma chamada para ação no final para incentivar a interação.`;

      const text = await GeminiAIService.sendPrompt(prompt);

      return res.status(200).json({ post: text });
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

export default new PostController();
