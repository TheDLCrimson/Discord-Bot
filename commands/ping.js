exports.run = (client, message, args) => {
    message.channel.send("Ping?").then(m => m.edit(`API: ${m.createdTimestamp - message.createdTimestamp}ms. Web Socket: ${Math.round(client.ws.ping)}ms.`))
}


exports.help = {
    name: "ping",
    aliases:['p']
}