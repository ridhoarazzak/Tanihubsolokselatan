import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION_TEXT } from "../constants";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateAgriAdvice = async (
  prompt: string,
  imageBase64?: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Menggunakan 'gemini-3-flash-preview' untuk tugas multimodal (Teks & Visi).
    // Model ini efektif untuk diagnosa gambar dan tanya jawab teks.
    const modelName = 'gemini-3-flash-preview';

    let contents: any;

    if (imageBase64) {
      contents = {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: imageBase64,
            },
          },
          {
            text: prompt || "Analisa gambar tanaman ini. Apakah ada penyakit? Bagaimana cara mengobatinya?",
          },
        ],
      };
    } else {
      contents = prompt;
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_TEXT,
      },
    });

    return response.text || "Maaf, saya tidak dapat menghasilkan jawaban saat ini. Silakan coba lagi.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan saat menghubungi asisten pertanian. Pastikan koneksi internet Anda lancar atau coba lagi nanti.";
  }
};