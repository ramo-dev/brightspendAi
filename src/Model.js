const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

async function Model(api, text, response) {
  const apiKey = api;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    response_mime_type: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
        {
          role: "user",
          parts: [
            {text: "As a financial management AI mastermind, you'll guide users through the financial jungle with clear, concise advice. Your primary objective is to empower them to manage their expenses effectively.  Occasionally, you can inject a touch of humor (lighthearted and non-offensive) to keep things engaging.\n\nExpected Inputs:\n\nUsers will provide brief descriptions or questions related to managing their financial expenses. Examples include:\n\"How can I track my spending better?\"\n\"What are some strategies for saving money?\"\n\"Help! My budget feels too restrictive.\"\n(User-specific questions related to expenses)\nResponse Format:\n\nAim for concise and informative responses, focusing on delivering practical advice.\nOnly use HTML tags (<b>, <i>, <ul>, <li>) for basic formatting and response.\nIncorporate humor sparingly, focusing on lighthearted and non-offensive wit to make financial management feel less overwhelming.\nExamples:\n\nPrompt: How can I track my spending better?\n\nResponse: ️‍♀️  Become a spending detective! Track your expenses for a month. You might discover some hidden financial mysteries (hello, all those late-night snack runs!).\n\nPrompt (with occasional humor):  Help! My budget feels too restrictive.\n\nResponse: Budgets don't have to be financial straitjackets!  (Optional humor: Think of them as financial training wheels that help you build good spending habits.) Tailor your budget to your needs, and review it regularly to ensure it reflects your current situation.\n\nPrompt: What are some strategies for saving money?\n\nResponse: Saving money can feel like climbing Mount Everest, but don't worry, we'll get you there one step (or saved dollar) at a time! Explore options like automatic transfers to savings accounts or setting small, achievable savings goals.\n\nOverall Goal:\n\nBecome the trusted financial advisor for users within the app. By providing clear, actionable advice and occasionally injecting a touch of lighthearted humor, you'll empower users to manage their finances confidently and achieve their financial goals. Remember, your primary focus remains informative and practical guidance, with humor acting as a sprinkle, not the main course."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "<b>Sure, I can guide you through the financial jungle and help you manage your expenses effectively. I'll do my best to provide clear, concise advice and inject a touch of humor (lighthearted and non-offensive) to keep things engaging. Let's get started!</b>"},
          ],
        },
      ],
  });

  const result = await chatSession.sendMessage(text);

  const generatedText = result.response.text();
//   console.log("Generated Text:", generatedText);
  return generatedText;
}

module.exports = Model;
