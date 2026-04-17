const telegrambot = require ('node-telegram-bot-api');

const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config();

const bot = new telegrambot (process.env.TELEGRAM_TOKEN, {polling:true})
bot.on('message',(option)=>{
    console.log("Message recived on the bot",option);

    bot.sendMessage(option.chat.id ,"hello,im a bot");
})

bot.onText(/\/joke/,async (option)=>{
    const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke')
   // console.log(response.data);
    const setup = response.data.setup;
    const punchline = response.data.punchline
    bot.sendMessage(option.chat.id , setup + " ," + punchline);
})