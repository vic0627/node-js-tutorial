const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAIApi(configuration);
const response = await openai.retrieveModel("text-davinci-003");
