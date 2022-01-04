exports.run = (client, message, args) => {
    
    let wait = (milliseconds) => {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
      
    let target = message.guild.channels.cache.find(channel => channel.name === args[0].toLowerCase());
    if(!target)
        message.reply("Enter **channel name** you wanna delete!")
    else
    {
        message.channel.send(`Channel ${target} will be **deleted in 5 seconds**`)
        .then(m => {
            wait(5000);
            target.delete()
            .then(() => {
                m.edit(`Channel **"${args[0]}" has been deleted**`);
            })
            .catch(e => {
                m.edit(`There is an error`);
            });
        });
    
    }
}


exports.help = {
    name: "deletechannel",
    aliases:["del"]
}
