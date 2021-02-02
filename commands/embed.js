module.exports = {
    name: 'embed',
    description: "Embeds stuff",
    execute(message, args, Discord){
        const newEmb = new Discord.MessageEmbed()
        .setColor('#FFA300')
        .setTitle('Hippo')
        .setDescription('This is a Hippo')
        .addFields(
            {name: 'Fact 1', value: 'Hippos think cc is cool'},
            {name: 'Fact 2', value: 'Hippos think atago is cool, sike!'}
        )
        .setImage('https://cdn.shopify.com/s/files/1/2281/5369/products/hippopotamus-838129_1000x.jpg?v=1580799007')
        .setFooter('Hippos like tacos');
            
        message.channel.send(newEmb);
    }
}