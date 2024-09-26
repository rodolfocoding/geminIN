import {
  GoogleGenerativeAI,
  GenerateContentRequest,
} from "@google/generative-ai";

export class GeminiAIService {
  async sendPrompt(prompt: string): Promise<string> {
    try {
      const genAI = new GoogleGenerativeAI(String(process.env.GEMINIAI_TOKEN));

      const model = genAI.getGenerativeModel({
        model: process.env.PROMPT_MODEL || "",
      });

      const result = await model.generateContent(prompt);

      if (!result || !result.response) {
        throw new Error("Nenhuma resposta válida recebida da GeminiAI");
      }

      const text = result.response.text();

      return text;
    } catch (error) {
      console.error("Erro ao enviar prompt para GeminiAI:", error);
      throw new Error("Falha ao gerar conteúdo com a GeminiAI.");
    }
  }
}
