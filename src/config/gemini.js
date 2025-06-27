import { GoogleGenAI } from '@google/genai';

async function main(prompt, retries = 1) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyByc8ozJFo32mqXibYqe50qZTIXVTG0MAI",
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({ model, config, contents });
    for await (const chunk of response) {
      return chunk.text;
    }
  } catch (error) {
    if (error.message.includes("429") && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 30000));
      return main(prompt, retries - 1);
    } else {
      throw error;
    }
  }
}

export default main;
export { main as onSend };
