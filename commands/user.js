const Discord = require('discord.js');
const moment = require("moment");

exports.run = (client, message, args) => {

    let word = (str) => {
        return str.toString()[0] +  str.toString().slice(1).toLowerCase();
    }
    
    let emo = (emoji) => {
        if (emoji != null)
            return emoji.name + " ";
        return "";
    }
    
    let fix = (str) => {
        return (str != null ? str : "");
    }

    let user;
    if (message.mentions.users.first()) 
        user = message.mentions.users.first();
    else if (args[0] != null)     
    {
        if (message.guild.member(args[0]) == null)
            return message.reply(`Cannot find user ${args[0]}, Please check the ID again`);
        else
            user = message.guild.member(args[0]).user;   
    }
    else
        user = message.author;

    let member = message.guild.member(user);

    
    let stat = null;
    let act = null;
        if (member.presence.activities[1] == null && member.presence.activities[0] != null)  
        {
            if(member.presence.activities[0].type != 'CUSTOM_STATUS' )
                act = word(member.presence.activities[0].type) + " " + member.presence.activities[0].name;
            else
                stat = emo(member.presence.activities[0].emoji) + fix(member.presence.activities[0].state);
        }
        else if (member.presence.activities[1] != null && member.presence.activities[0] != null)
        {
            act = word(member.presence.activities[1].type) + " " + member.presence.activities[1].name;
            stat =  emo(member.presence.activities[0].emoji) + fix(member.presence.activities[0].state);
        }

    const embed = new Discord.MessageEmbed()
    .setTitle("User Information")
    .setDescription("\n")
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setThumbnail(user.avatarURL())
    .addField("Creation Date", user.createdAt.toString().substr(0, 31) + "\n(" + moment(user.createdAt).fromNow() + ")", true)
    .addField("Joined Server", member.joinedAt.toString().substr(0, 31) + "\n(" + moment(member.joinedAt).fromNow() + ")", true)
    .addField("Username", user.tag, true)
    .addField("Nickname", member.nickname != null ? member.nickname : "None", true)
    .addField("ID", user.id, true)
    .addField("Status", member.presence.status.toUpperCase(), true)
    .addField("Activity",  act !== null ? act : "None", true)
    .addField("Custom Status",  stat !== null ?  stat : "None", true)
    .addField("Species", !user.bot ? "**Human**" : "**Bot**", true)
    .addField("Roles", member.roles.cache.size > 1 ? `${member.roles.cache.filter(role => role.name !== '@everyone').array()}` : "None", true)
    .setFooter(`Aserain the prototype bot by DLC`);
    
    //console.log();
    message.channel.send(embed);
}

exports.help = {
    name: "user",
    aliases:["userinfo", "me"]
}