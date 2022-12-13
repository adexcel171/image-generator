const { Configuration, OpenAIApi } = require("openai");
const { Await } = require("react-router-dom");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const  generateImage = async(req, res) =>  {
try {
    const response = await openai.createImage({
        prompt: 'polor bear on ice skates',
        n:1,
        size: '512*512'
    });
    const imageUrl = response.data.data[0].url 
    res.status(200).json({
        sucess:true,
        data: imageUrl
    });
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
  res.status(200).json({
    sucess:false,
    error: 'image could not be generated'
});
}
};


module.exports= {generateImage};