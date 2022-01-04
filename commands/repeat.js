exports.run = (client, message, args) => {
    let times = args[0];
    args.shift();
    let repeat = args.join(" ");
    message.delete();
    for(let i = 0; i < times; i++)
        message.channel.send(repeat);
}


exports.help = {
    name: "repeat",
    aliases:[]
}
