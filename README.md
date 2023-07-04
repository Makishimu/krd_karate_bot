# krd_karate_bot
Telegram chat bot for karate team from Krasnodar. Use NodeJs, Telegraf and nodemon while development.

How to start:

0. This step for you, if you don't have Telegram bot token*

1. Clone the repository.
2. You need to have .env file with BOT_TOKEN, PORT, NODE_ENV and ADMIN_ID variables.
3. "npm install".
4.  Use "npm run dev" while local development, 'nodemon' will refresh your bot.
4.1  Use "npm run start" for external server.

*How to get Telegram bot token:
  0.1 Go to the Telegram and find @BotFather;
  0.2 /newbot;
  0.3 Choose a name for your bot;
  0.4 Choose a username for your bot. It must end in `bot`. Like this, for example: Tetris Bot or tetris_bot;
  0.5 Congrats, afret those steps you have a token (under "Use this token to access the HTTP API:").
