const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()

module.exports.run = async (bot, message, args) => {
    
    itemListName = db.get(`shop${message.guild.id.name}`);
	itemListPrice = db.get(`shop${message.guild.id.price}`);
	itemListType  = db.get(`shop${message.guild.id.type}`);
    
    if(itemListName === null)
    {
        db.set(`shop${message.guild.id}`, {price: [], name: [], type: []});
    }
  
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have enough permission to use this command.');
    }
    
    if (!args[0]) return message.reply('Please specify a price');
    if (isNaN(args[0])) return message.reply('That was not a valid number!');

    let price = args[0];
    let itemType = args[1];
    
    if (args[1] == "role")
    {
        if (!args[2]) return message.reply('Please specify a role');
        
    }
    if (args[1] == "item")
    {
        if (!args[2]) return message.reply('Please specify an item name');
    }
    if (args[1] == "consumible")
    {
        if (!args[2]) return message.reply('Please specify a consumable name');
    }
    
    let name = args[2];
    
    message.channel.send("Added item " + name + " to shop");
    
    itemString = price + " " + itemType + " " + name;
    console.log(itemString);
    
    db.push(`shop${message.guild.id.price}`, price.toString);
    db.push(`shop${message.guild.id.type}`, itemType);
    db.push(`shop${message.guild.id.name}`, name);
    
}
