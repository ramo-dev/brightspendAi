const express = require("express");
const dotenv = require("dotenv");
const app = express();
const Model = require("./src/Model");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

dotenv.config();
const api = process.env.GEMINI_API;

app.post("/chat", async (req, res) => {
  console.log(req.body);
  const { inputText } = req.body;
  try {
    const generatedText = await Model(api, inputText);
    res.send({ BrightSpendAI: generatedText });
    console.log(generatedText);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

app.post("/wakeUp", (req, res)=>{
  const {hello} = req.body;
  res.status(200).send(hello);
  console.log(hello)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
