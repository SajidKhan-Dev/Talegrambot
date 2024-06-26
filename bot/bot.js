const TelegramBot = require('node-telegram-bot-api');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const token = '7380866750:AAE629oXtzIso42TjoXkk6UGJEIjbJCktLA';
const bot = new TelegramBot(token, { polling: true, request: { timeout: 60000 } }); // 60 seconds timeout

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Click the button below to launch the app.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Launch App',
            web_app: { url: 'https://your-web-app-url.com' }, // Replace with your actual web app URL
          },
        ],
      ],
    },
  });
});

console.log('Bot is running...');
