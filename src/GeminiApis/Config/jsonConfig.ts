export const mcqGenerationConfig = {
    temperature: 0,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {
        response: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string"
              },
              question: {
                type: "string"
              },
              options: {
                type: "array",
                items: {
                  type: "string"
                }
              },
              correctAnswer: {
                type: "object",
                properties: {
                  answer: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    },
  };
