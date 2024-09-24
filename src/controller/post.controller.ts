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

      const prompt: string = `Crie uma postagem altamente envolvente para o LinkedIn sobre um tópico emergente e relevante na área de ${subject}. 
      A postagem deve explorar profundamente uma tendência inovadora, 
      tecnologia disruptiva ou boas práticas que estejam moldando o futuro do setor, 
      destacando exemplos reais de como isso já está impactando profissionais, 
      empresas e o mercado. Certifique-se de trazer insights valiosos que possam ajudar os leitores a refletirem sobre os desafios e oportunidades que essa inovação traz. Use um tom inspirador e informativo, convidando a comunidade a participar da discussão com seus próprios pontos de vista e experiências.
      Além disso, promova o engajamento ativo, criando uma chamada para ação estratégica que incentive os leitores a compartilhar suas opiniões, soluções práticas ou perguntas, criando um espaço para debates construtivos. Ao final, inclua uma provocação instigante,
      como: "Como você está se preparando para essa transformação no ${subject}? Vamos trocar ideias nos comentários!`;

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
