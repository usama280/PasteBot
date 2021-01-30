module.exports = {
    name: 'test',
    description: "this is a test role",
    execute(message, args){

        if(message.member.roles.cache.has('805190796508790784')){
            message.channel.send('You are a part of the test role!');
        }else{
            message.channel.send('You are not a part of the test role, *cough cough* loser.');
        }
    }
}