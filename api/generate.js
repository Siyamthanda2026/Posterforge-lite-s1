import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024"
    });

    const image = result.data[0].url;

    res.status(200).json({ image });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Image generation failed" });
  }
}
