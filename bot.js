const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.content === 'hello') {
        message.reply('Hello, world!');
    }
});

client.login('MTMxMTYyODc3NDkyODAyMzYxMg.GW8Zb-.4BTYmIzmZuSwm3cQpFyPwqeoDI8-dKWczsfM8c');  
