
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { MENU_ITEMS } from '../constants';

const API_KEY = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getAIAssistance = async (prompt: string, userLocation?: { lat: number; lng: number }) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are the friendly AI assistant for "Crepe Masters", a premium crepe food truck.
    The owner and head chef is Chef Karla.
    Our signature is the ginger-clove infused dough.
    
    Menu highlights:
    - Nutella Classic Crepe: Only $2.00 (Our special deal!).
    - Clove Chicken: $4.00.
    - Full range of Drinks: Americano ($1.20), Cappuccino, Espresso, Latte, Hot Chocolate, Matcha, and Soft Drinks (Cola, Fanta, Sprite, Water).
    
    Rules:
    1. Be enthusiastic about crepes and Chef Karla's secret dough.
    2. If asked about recommendations, suggest the Nutella Classic for a sweet treat or Clove Chicken for savory.
    3. Always mention Chef Karla as the mastermind behind the recipes.
    4. Keep responses concise, warm, and appetizing.
    5. Mention our eco-friendly cones.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }]
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const urls = groundingChunks
      .filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || 'Related Link',
        uri: chunk.web?.uri || ''
      }));

    return {
      text: response.text || "I'm sorry, I'm having a bit of trouble connecting to Chef Karla's kitchen. Try again!",
      urls
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

export const findNearbyCrepes = async (lat: number, lng: number) => {
  const model = "gemini-2.5-flash";
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: "Where are the best crepe shops or food trucks near these coordinates?",
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const mapUrls = groundingChunks
      .filter(chunk => chunk.maps)
      .map(chunk => ({
        title: chunk.maps?.title || 'Map Location',
        uri: chunk.maps?.uri || ''
      }));

    return {
      text: response.text,
      mapUrls
    };
  } catch (error) {
    console.error("Maps Grounding Error:", error);
    return null;
  }
};
