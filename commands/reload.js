const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
    
  const reload = (command) => {
    message.channel.send(`Reloading: ${command}`)
    .then(async m => {
      await client.reload(command)
      .then(() => {
        m.edit(`Successfully reloaded: ${command}`);
      })
      .catch(e => {
        m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
      });
    });

  }  
  
  if (args[0].toLowerCase() === 'all') {
    fs.readdir('./commands/', (err, files) => {
      if (err) console.error(err);
        message.channel.send(`Reloading a total of ${files.length} commands.`);
        files.forEach(f => {
          reload(f);
        });
      });
    return;
  }
    
  let command;
  if (client.commands.has(args[0])) 
    command = args[0];
  else if (client.aliases.has(args[0])) 
    command = client.aliases.get(args[0]);

  if (!command)
    return message.reply(`I cannot find the command: ${args[0]}`);
  else 
    reload(command);
    
}


exports.help = {
    name: "reload",
    aliases:['r'] 
}