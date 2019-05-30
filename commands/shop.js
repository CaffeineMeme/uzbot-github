const Discord = require('discord.js')
const db = require('quick.db')

var itemListName = [];
var itemListPrice = [];
var itemListType = [];

module.exports.run = async (bot, message, args) => {
	itemListName = db.all(`shop${message.guild.id}.name`);
	itemListPrice = db.get(`shop${message.guild.id}.price`);
	itemListType  = db.get(`shop${message.guild.id}.type`);
	
	console.log(itemListName[0]);
	console.log(itemListPrice[0]);
	console.log(itemListName[1]);
	console.log(itemListPrice[1]);
	
	if(isNaN(args[0])) return message.reply('That was not a valid number!');
	if (!args[0]) return message.reply('input a page number dum dum');
	
	let currentPage = ((args[0] - 1)* 5);
	
	let embed = new Discord.RichEmbed()
	.setTitle("Uzbekistan Funny Shop lole")
	.addField(itemListName[0 + currentPage], "Price: " + itemListPrice[0 + currentPage] + "\n" + "Item Type: " + itemListType[0 + currentPage])
	.addField(itemListName[1 + currentPage], "Price: " + itemListPrice[1 + currentPage] + "\n" + "Item Type: " + itemListType[1 + currentPage]);
	
	message.channel.send(embed);

}
