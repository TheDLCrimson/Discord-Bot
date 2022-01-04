module.exports = message =>{
    const client = message.client
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith('/')) return;


    let command = message.content.split(' ')[0].slice(1);
    let args = message.content.trim().split(/ +/).slice(1);
    command = command.toLowerCase();
    let cmd;
    if(client.commands.has(command)){
            cmd = client.commands.get(command)
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command))
        }
    if(cmd){ 
        cmd.run(client, message, args)
    }
}
//command handler