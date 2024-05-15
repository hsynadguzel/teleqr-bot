# Telegram QR Code Bot

This Telegram bot allows users to generate QR codes from text or URLs and send them as photos in Telegram chats.

## Features

- Generate QR codes from text or URLs.
- Support for various QR code formats (PNG, SVG, etc.).
- Scalable and adjustable QR code parameters (scale, margin, etc.).
- Error handling for invalid input or generation failures.

## Requirements

- Node.js
- npm (Node.js package manager)
- Telegram Bot API token (obtainable from BotFather on Telegram)

## Installation

1. Clone the repository:
git clone https://github.com/your-username/telegram-qr-code-bot.git

2. Install dependencies:
cd telegram-qr-code-bot
npm install

3. Replace the value of token in index.js with your Telegram Bot API token.

4. Run the bot:
bash
Kodu kopyala
npm start

## Usage
1. Start a conversation with the bot by searching for it on Telegram (@your-bot-username).

2. Use the /qr command followed by the text or URL you want to generate a QR code for. For example:
/qr Hello, world!

3. The bot will generate a QR code from the provided text or URL and send it as a photo in the chat.

## Configuration
You can adjust the parameters of the generated QR code (such as scale, margin, etc.) by modifying the options passed to the qr.toFile function in index.js.

## Support
If you encounter any issues or have questions about the bot, please open an issue on the GitHub repository.

## Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
