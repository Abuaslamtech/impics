import axios from "axios";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const API_URL =
  "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";

app.post("/generate", async (req, res) => {
  try {
    const {
      prompt,
      negative_prompt = "",
      num_inference_steps = 50,
      guidance_scale = 7.5,
      width = 512,
      height = 512,
    } = req.body;

    const headers = {
      Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      "Content-Type": "application/json",
    };

    const payload = {
      inputs: prompt,
      parameters: {
        negative_prompt,
        num_inference_steps,
        guidance_scale,
        width,
        height,
      },
    };

    const response = await axios.post(API_URL, payload, {
      headers,
      responseType: "arraybuffer",
    });

    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    res.json({
      image: base64Image,
      prompt: prompt,
    });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({
      error: "Failed to generate image",
      details: error.response ? error.response.data : error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    status: "healthy",
    api: "HuggingFace Stable Diffusion",
    model: "runwayml/stable-diffusion-v1-5",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
