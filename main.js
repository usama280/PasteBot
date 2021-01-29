const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

client.once('ready', () => {
    console.log('PasteBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    /**
    if(message.content.slice(prefix.length) === 'who is the coolest'){
        message.channel.send('Why cc ofc');
    }
    */
    if(message.content === 'coolest'){
    message.channel.send('Why cc ofc');
    }
    else if(message.content.slice(prefix.length) === 'PasteBot show me your brain'){
        message.channel.send('https://myanimelist.net/animelist/PasteLord&view=tile&status=2');
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'gme'){
        message.channel.send('YOLO');
    }

});






client.login(process.env.token);