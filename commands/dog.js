const Discord = require('discord.js');
const moment = require("moment");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
    
    let {body} = await superagent.get('https://random.dog/woof.json')

    const embed = new Discord.MessageEmbed()
    .setTitle("Dog image :dog:")
    .setDescription("\n")
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setImage(body.url)
    .setFooter(`Aserain the prototype bot by DLC`);
    
    message.channel.send(embed);
    //console.log(body)
}

exports.help = {
    name: "dog",
    aliases:["doggo", "woof"]
}