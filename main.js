const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

client.once('ready', () => {
    console.log('PasteBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content.slice(prefix.length) === 'who is the coolest'){
        message.channel.send('Why cc ofc');
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'gme'){
        message.channel.send('YOLO');
    }

});






client.login('ODA0NzU2ODE2OTg2MTEyMDIx.YBQ-MA.Llgcx7LGTKgfd9FebUh4u8WAeOE');