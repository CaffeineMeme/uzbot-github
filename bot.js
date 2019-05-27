require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const config = require("./config.json");

client.on("ready", () => {
  console.log("tajikistan nigga fart");
  client.user.setActivity('-uz help for commands | Currently in ' + client.guilds.size + ' servers');
});

client.on('message', message => {

    if (message.author.bot) return;
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (message.content.indexOf(process.env.PREFIX.length) != 0) return;

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args)
    } catch (err) {
        return;
    }
});

client.login(process.env.TOKEN);
