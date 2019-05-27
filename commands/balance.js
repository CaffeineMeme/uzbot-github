const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const som = client.emojis.find(emoji => emoji.name === "som");

module.exports.run = async (client, message, args) => {
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

   	if (bal === null) bal = 0;

    	message.channel.send('You have a balance of `' + bal + '`');
}
