exports.run = (client, message, args) => {
    message.delete().then(message.channel.send(args.join(" ")))
}


exports.help = {
    name: "say",
    aliases:[]
}
