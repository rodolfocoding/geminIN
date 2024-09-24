import {
  GenerateContentRequest,
  GoogleGenerativeAI,
} from "@google/generative-ai";

class GeminiAIService {
  async sendPrompt(prompt: string): Promise<string> {
    const genAI = new GoogleGenerativeAI(String(process.env.GEMINIAI_TOKEN));
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  }
}

export default new GeminiAIService();
