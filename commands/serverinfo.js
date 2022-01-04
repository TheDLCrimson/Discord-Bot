const Discord = require('discord.js');
const moment = require("moment");

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return "**" + days + "**" + (days == 1 ? " day" : " days") + " ago";
};       //number; test if number == 1 => add 'day' else add 'days'

exports.run = (client, message, args) => {

    let region = {
        "brazil": "Brazil :flag_br:",
        "eu-central": "Central Europe :flag_eu:",
        "singapore": "Singapore :flag_sg:",
        "us-central": "U.S. Central :flag_us:",
        "sydney": "Sydney :flag_au:",
        "us-east": "U.S. East :flag_us:",
        "us-south": "U.S. South :flag_us:",
        "us-west": "U.S. West :flag_us:",
        "eu-west": "Western Europe :flag_eu:",
        "vip-us-east": "VIP U.S. East :flag_us:",
        "london": "London :flag_gb:",
        "amsterdam": "Amsterdam :flag_nl:",
        "hongkong": "Hong Kong :flag_hk:",
        "russia": "Russia :flag_ru:",
        "southafrica": "South Africa :flag_za:"
    };
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Server Information")
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setThumbnail(message.guild.iconURL())
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField("Creation Date", message.guild.createdAt.toString().substr(0, 31) + " (" + moment(message.guild.createdAt).fromNow() + ")", true)
    .addField("Server Founder", message.guild.owner.user.tag, true)
    .addField("Server ID", message.guild.id, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Server Channels", message.guild.channels.cache.filter(channel => channel.type != "category").size + " (" + message.guild.channels.cache.filter(channel => channel.type == "category").size + " categories)", true)
    .addField("Server User", message.guild.memberCount, true)
    .addField("Server Humans", message.guild.members.cache.filter(member => !member.user.bot).size, true)
    .addField("Server Bots", message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField("Server Online", message.guild.members.cache.filter(member => member.presence.status != "offline").size, true)
    .addField("Server Roles", message.guild.roles.cache.size, true)
    .addField("Emojis", message.guild.emojis.cache.size, true)
    .addField("Verification Level", message.guild.verificationLevel, true)
    .setFooter(`Aserain the prototype bot by DLC`);

    message.channel.send(embed)
}

exports.help = {
    name: "serverinfo",
    aliases:["server", "s"]
}