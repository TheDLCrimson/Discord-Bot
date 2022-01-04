const Discord = require('discord.js');
const moment = require("moment");

exports.run = (client, message, args) => {

    message.delete();

    let user;
    if (message.mentions.users.first()) 
        user = message.mentions.users.first();
    else if (args[0] != null)     
    {
        if (message.guild.member(args[0]) == null)
            return message.reply(`Cannot find user ${args[0]}, Please check the ID or name again`);
        else
            user = message.guild.member(args[0]).user;   
    }
    else
        return message.reply(`Who are you trying to report? Why?`);

    let member = message.guild.member(user);
    
    args.shift();
    let reason = args.join(" ");

    const embed = new Discord.MessageEmbed()
    .setTitle("**Kick**")
    .setDescription("\n")
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setThumbnail(user.avatarURL())
    .addField("Message Time", message.createdAt.toString().substr(0, 31))
    .addField("Kicked User", `${user}#${user.discriminator}, ID: ${user.id}`)
    .addField("Kicked By", `${message.author}#${message.author.discriminator}, ID: ${message.author.id}`)
    .addField("Reason", reason)
    .setFooter(`Aserain the prototype bot by DLC`);
    
    //console.log();

    let report = message.guild.channels.cache.find(channel => channel.name === 'report');
    if (!report) 
    {
        message.channel.send("Could not find report channel so I will send it here")
        message.channel.send(embed);
    }
    else
        report.send(embed);
}

exports.help = {
    name: "kick",
    aliases:[]
}