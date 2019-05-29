const Discord = require('discord.js')
const db = require('quick.db')

var itemListName = [];
var itemListPrice = [];
var itemListType = [];

module.exports.run = async (bot, message, args) => {
	let itemListName = db.get(`shopItemName${message.guild.id}`);
	let itemListPrice = db.get(`shopItemPrice${message.guild.id}`);
	let itemListType = db.get(`shopItemType${message.guild.id}`);
	
	console.log(itemListName);
	console.log(itemListPrice);
	
	if(isNaN(args[0])) return message.reply('That was not a valid number!');
	if (!args[0]) return message.reply('input a page number dum dum');
	
	let currentPage = ((args[0] - 1)* 5);
	
	let embed = new Discord.RichEmbed()
	.setTitle("Uzbekistan Funny Shop lole")
	.addField(itemListName[0 + currentPage], "Price: " + itemListPrice[0 + currentPage].charAt(0).toUpperCase() + completeTitle.slice(1) + "\n" + "Item Type: " + itemListType[0 + currentPage].charAt(0).toUpperCase() + completeTitle.slice(1));
	
	message.channel.send(embed);

}
