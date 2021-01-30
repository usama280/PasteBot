module.exports = {
    name: 'a4l',
    description: "best waifu",
    execute(message, args){
        if((Math.floor(Math.random() * 10) + 1) > 8){
            message.channel.send('ATAGO FOR LIFE!!!');
        }else{
            message.channel.send('You uncultered swine, cc >> atago (taco)');
        }
    }
}