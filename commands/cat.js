const Discord = require('discord.js');
const moment = require("moment");
const superagent = require("superagent");
 
exports.run = async (client, message, args) => {
    
    let {body} = await superagent.get('http://aws.random.cat/meow')

    const embed = new Discord.MessageEmbed()
    .setTitle("Cat image :cat:")
    .setDescription("\n")
    .setTimestamp()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setImage(body.file)
    .setFooter(`Aserain the prototype bot by DLC`);

    message.channel.send(embed);

    //console.log(body);

}

exports.help = {
    name: "cat",
    aliases:["moew", "kitten"]
}