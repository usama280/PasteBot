module.exports = {
    name: 'embed',
    description: "Embeds stuff",
    execute(message, args, Discord){
        const newEmb = new Discord.MessageEmbed()
        .setColor('#FFA300')
        .setTitle('Test')
        .setDescription('Test Descript.')
        .addFields(
            {name: 'Test 1', value: 'cc is cool'},
            {name: 'Test 2', value: 'atago is cool, sike'}
        )
        .setImage('https://cdn.shopify.com/s/files/1/2281/5369/products/hippopotamus-838129_1000x.jpg?v=1580799007')
        .setFooter('Test Footer');
            
        message.channel.send(newEmb);
    }
}