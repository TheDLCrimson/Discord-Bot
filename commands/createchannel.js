
exports.run = (client, message, args) => {
    
    let type = args[0];
    if(type.toLowerCase() === 'text')
        type = 'text';
    else if(type.toLowerCase() === 'voice')
        type = 'voice';
    else
        return message.reply("Enter **channel type** you wanna create!")
    
    args.shift();
    let name = args.join(" ");

    message.guild.channels.create(name, {type : type}).catch(e => {message.reply("Unable to create new channel. Please enter channel name or check my administration")});
    message.delete();
    message.channel.send(`A ${type} channel **"${name}"** has been created`);
    
}


exports.help = {
    name: "createchannel",
    aliases:["cc"]
}
