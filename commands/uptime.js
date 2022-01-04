exports.run = (client, message, args) => {
    
    let s = (time) => {
        return (time > 1 ? "s" : "");
    }
    
    var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
        days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);

        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        message.reply(":chart_with_upwards_trend: Sir, I've been running for** " + days + " **day" + s(days) + ", **" + hours + " **hour" + s(hours) + ", **" + minutes + "** minute" + s(minutes) + " and **" + seconds + "." + milliseconds + "** seconds!");
}


exports.help = {
    name: "uptime",
    aliases:["ut", "u"]
}
