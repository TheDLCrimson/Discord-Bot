module.exports = client => {
    console.log("ready!");
    console.log(`Ready to run in total of ${client.guilds.cache.size} servers`);
    client.user.setActivity('Upgrading myself', { type : 'PLAYING' });
}