export interface IGeminiAIService {
  sendPrompt(prompt: string): Promise<string>;
}
