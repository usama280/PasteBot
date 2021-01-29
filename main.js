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
    
    
    else if(message.content.slice(prefix.length) === 'PasteBot show me your brain'){
        message.channel.send('https://myanimelist.net/animelist/PasteLord&view=tile&status=2');
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'gme'){
        message.channel.send('YOLO');
    } else if(command === 'a4l'){
        if((Math.floor(Math.random() * 10) + 1) > 8){
            message.channel.send('ATAGO FOR LIFE!');
        }else{
            message.channel.send('You uncultered swine, cc >> atago');
        }
    } else if(command === 'ccMusicRecc'){
        var x = Math.floor(Math.random() * 4);
        if(x === 0){
            message.channel.send('https://www.youtube.com/watch?v=ZmDBbnmKpqQ');
        }else if (x === 1){
            message.channel.send('https://www.youtube.com/watch?v=KIK3azN4w34');
        }else if (x === 2){
            message.channel.send('https://www.youtube.com/watch?v=kxK1SIOObRE');
        }else{
            message.channel.send('https://www.youtube.com/watch?v=lHxZncV85y0');
        }
    } 

});






client.login(process.env.token);