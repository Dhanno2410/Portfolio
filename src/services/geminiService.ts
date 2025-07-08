
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_CONTEXT } from "../constants";

// Vite exposes env variables through `import.meta.env`
const apiKey = import.meta.env.VITE_API_KEY;

let ai: GoogleGenAI | null = null;

if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
} else {
    console.warn("VITE_API_KEY environment variable not set. AI assistant will not be available.");
}

export const askAIAboutPortfolio = async (question: string): Promise<string> => {
    if (!ai) {
        return "Sorry, the AI assistant is not configured. Please contact the site owner.";
    }

    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
            config: {
                systemInstruction: PORTFOLIO_CONTEXT,
                thinkingConfig: { thinkingBudget: 0 } // For faster responses
            }
        });
        
        return result.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
    }
};