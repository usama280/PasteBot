module.exports = {
    name: 'ccmusic',
    description: "this is cc's recc music",
    execute(message, args){
        let x = Math.floor(Math.random() * 4);
        message.channel.send('Your mystery number is: ' + x);

        switch(x){
            case 0:
                message.channel.send('https://www.youtube.com/watch?v=ZmDBbnmKpqQ');
                break;
            case 1:
                message.channel.send('https://www.youtube.com/watch?v=KIK3azN4w34');
                break;
            case 2:
                message.channel.send('https://www.youtube.com/watch?v=kxK1SIOObRE');
                break;
            case 3:
                message.channel.send('https://www.youtube.com/watch?v=lHxZncV85y0');
                break;
        }
    }
}