const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const som = client.emojis.find(emoji => emoji.name === "som");

module.exports.run = async (client, message, args) => {
        let user = message.mentions.members.first() || message.author;
		let money = await db.fetch ('money_${user.id}');
		
		if (money === null){money = 0;}
		
		message.channel.send('${user}, you have лв${money} ${som} niggaface');
}