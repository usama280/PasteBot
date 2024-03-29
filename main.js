const Discord = require('discord.js');
const client = new Discord.Client();
const openai = require('openai');

openai.apiKey = "YOUR_OPENAI_API_KEY";
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
    
    if(message.content.toLowerCase().includes("who is the coolest")){
        message.channel.send('Why cc ofc');
    } else if(message.content.toLowerCase().includes('add me to the test role')){
        let filter = m => m.author.id === message.author.id
        message.channel.send('Say the magic word :)').then(() => {
        
            message.channel.awaitMessages(filter, {
          max: 1,
          time: 10000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toLowerCase().includes('please')) {
            message.channel.send('You cheeky bastard, fine');
            message.member.roles.add('805190796508790784').catch(console.error);
          } else {
            message.channel.send("WRONG! You actually thought bro...");
          }
        })
        .catch(collected => {
            message.channel.send('Times up kiddo :>');
        });
    })
            
    } else if(message.content.toLowerCase().includes('pastebot show me your brain')){
        message.channel.send('https://myanimelist.net/animelist/PasteLord&view=tile&status=2');
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'chat') {
        // Use the GPT-3 model to generate a response based on the user's input.
        openai.Completion.create({
            prompt: message.content,
            temperature: 0.5,
            max_tokens: 128,
            n: 1,
            stop: '\n',
        }, function(error, response) {
            // Send the response as a message to the user.
            message.channel.send(response.choices[0].text);
        });
    }
 
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
    } else if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }

});






client.login(process.env.token);
