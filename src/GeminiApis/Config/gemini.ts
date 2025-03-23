import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai";

const apiKey:any = import.meta.env.VITE_GEMINI_API_KEY;
const genAI:any = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-exp-0801",
    systemInstruction: "Act as a senior professor with more than 3 decades of experience in academic field. You are the question setter of the institute. Now you will be given some documents. Based on the document's information you have to create a MCQ question paper. Question paper must contains 10 MCQ quesitions.\n\nYou must set all the questions from the context of the document and do not go outside of the context of the document.\n\n",
});

export const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
]

