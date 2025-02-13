import {
  GoogleGenerativeAI,
  HarmCategory,
   HarmBlockThreshold,
 }  from "@google/generative-ai";

const apiKey = "AIzaSyAwogXPwjFrzVPlzacBVkVeIWEUQY2rj6w";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({

  
  model: "gemini-2.0-flash-exp",

});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 20,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

let history = []; // Initialize an empty history array outside the function

async function runChat(prompt) {

  const chatSession = model.startChat({
    generationConfig,
    history: history, // Pass the history to the chat session
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response.text();

  // Update the history with the user's prompt and the model's response
  history.push({ role: "user", parts: [{ text: prompt }] });  // Wrap prompt in {text: ...}
  history.push({ role: "model", parts: [{ text: response }] }); // Wrap response in {text: ...}
  console.log(response)
  
  return response;


}

export default runChat;