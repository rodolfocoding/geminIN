import { Request, Response } from "express";
import GeminiAIService from "../service/gemini-ai.service";

class PostController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { subject } = req.body;

      if (!subject || typeof subject !== "string") {
        return res.status(400).json({
          message:
            "O campo 'subject' é obrigatório e deve ser uma string válida.",
        });
      }

      const prompt: string = `
        Crie uma postagem altamente envolvente para o LinkedIn sobre um tópico inovador relacionado à área de ${subject}.
        A postagem deve:
        - Explorar uma tendência ou tecnologia emergente que esteja moldando o futuro do setor.
        - Fornecer exemplos práticos de como isso já está impactando profissionais e empresas.
        - Oferecer insights valiosos para ajudar os leitores a entenderem os desafios e oportunidades relacionados a essa inovação.
        - Promover o engajamento dos leitores com uma chamada para ação, incentivando-os a compartilhar suas opiniões ou fazer perguntas.
        - Terminar com uma provocação instigante, como: "Como você está se preparando para essa transformação na área de ${subject}? Compartilhe nos comentários!"
        - Use um tom profissional, mas convidativo, próprio para uma audiência de LinkedIn, e mantenha o texto com até 400 palavras.`;

      const generatedPost = await GeminiAIService.sendPrompt(prompt);

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

export default new PostController();
