const Discord = require('discord.js')
const db = require('quick.db')

//require('/../../bot.js');

const botPath = path.resolve('bot.js');

module.exports.run = async (bot, message, args) =>{
   console.log(botPath);    
    let user = message.mentions.users.first();
    
    if (!message.member.hasPermission('ADMINISTRATOR') || message.author.id != "287794457594822657") {
        return message.reply('u cant do that nigga');
    }
    
    db.add(`levelUpExp_${message.author.id}`, .0125);
    db.set(`levelUpGoal_${message.author.id}`, (Math.ceil((((levelUpGoal * 2.5 ^ levelUpExpo) - (levelUpGoal * 0.2) + 1)/10) * 10)));
    
    message.channel.send("congrats an admin or someone important and cool leveled you up");
    db.add(`level_${message.author.id}`, 1);
    
}
