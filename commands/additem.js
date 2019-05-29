const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()

module.exports.run = async (bot, message, args) => {

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
    
    db.push(`shopItemPrice${message.guild.id}`, [price.toString()]);
    db.push(`shopItemType${message.guild.id}`, [itemType]);
    db.push(`shopItemName${message.guild.id}`, [name]);
    
}
