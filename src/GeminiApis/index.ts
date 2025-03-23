import { mcqGeminiChatSession } from "./Chat/chatSession";

export default async function mcqGen(context:String) {
    const result = await mcqGeminiChatSession.sendMessage(context);
    return result;
}