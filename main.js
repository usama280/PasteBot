const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';

const fs = require('fs');  
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('PasteBot is online!');
});

client.on('message', message => {
    let authId; 
    
    if(message.content.toLowerCase().includes("who is the coolest")){
        message.channel.send('Why cc ofc');
    } else if(message.content.toLowerCase().includes('add me to the test role')){
        message.channel.send('Say the magic word :)');
        authId = message.author.id;
    } else if(authId == message.author.id && message.content.toLowerCase().includes('please') ){
            message.channel.send('You cheeky bastard, fine');
            message.member.roles.add('805190796508790784').catch(console.error);
    } else if(message.content.toLowerCase().includes('pastebot show me your brain')){
        message.channel.send('https://myanimelist.net/animelist/PasteLord&view=tile&status=2');
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'gme'){
        message.channel.send('YOLO');
    } else if(command === 'a4l'){
        client.commands.get('a4l').execute(message, args);
    } else if(command === 'ccmusicrecc'){
        client.commands.get('ccmusic').execute(message, args);
    } else if(command === 'testrole'){
        client.commands.get('test').execute(message, args);
    } 

});






client.login(process.env.token);