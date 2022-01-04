exports.run = (client, message, args) => {
    message.channel.fetchMessages().then(messages => {
        message.channel.send(`${messages.size}`);
    
        let finalArray = [];
    
        const putInArray = (data) => finalArray.push(data);
        const handleTime = (timestamp) => moment(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").reaplce("am", "AM"); 
    
        for (const message of messages.array().reverse()) putInArray(`${handleTime(message.timestamp)} ${msg.author.username} : ${msg.content}`); 
    
        message.channel.send(finalArray);
        message.channel.send(finalArray.length);
    
    });
}


exports.help = {
    name: "fetch",
    aliases:[]
}
