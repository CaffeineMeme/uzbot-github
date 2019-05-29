const Discord = require('discord.js')
const db = require('quick.db')

var shopList = [];

module.exports.run = async (bot, message, args) => {

	shopList = db.get(`shopItem${message.guild.id}`);
	console.log(shopList);
	
	let embed = new Discord.RichEmbed()
	.setTitle("Uzbekistan Funny Shop lole")
	.addField(shopList[0]);
	
	message.channel.send(embed);

}
