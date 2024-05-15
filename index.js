import qr from 'qrcode';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

// Replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/qr [text]"
bot.onText(/\/qr (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];

    // create QR code as SVG
    qr.toFile('qr.png', text, { type: 'png', scale:10, margin:1 }, function (err) {
        if (err) {
            console.error('Error while generating QR code:', err);
            bot.sendMessage(chatId, 'An error occurred while generating the QR code.');
        } else {
            // Send QR code
            bot.sendPhoto(chatId, 'qr.png');
        }
    });
});
