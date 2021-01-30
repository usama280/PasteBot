module.exports = {
    name: 'ccmusic',
    description: "this is cc's recc music",
    execute(message, args){
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
}