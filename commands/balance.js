const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        let som = client.emojis.find(emoji => emoji.name === "som");
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

   	if (bal === null) bal = 0;

    	message.channel.send('You have a balance of лв`' + bal + '`' + som);
}
