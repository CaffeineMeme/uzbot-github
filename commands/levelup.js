const Discord = require('discord.js')
const db = require('quick.db')

const path = require('path');

require('/app/bot.js');

const botPath = path.resolve('bot.js');

module.exports.run = async (bot, message, args) =>{
    let user = message.mentions.users.first();
    
    if (!message.member.hasPermission('ADMINISTRATOR')) {
    return message.reply('u cant do that nigga');
    }else if (user == undefined) {
    return message.reply('name a user retard');
    }else if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == "287794457594822657"){
    let levelUpGoal =  db.fetch(`levelUpGoal_${user.id}`);
    let levelUpExpo = db.fetch(`levelUpExp_${user.id}`);
    let amountToAdd = (Math.ceil((((levelUpGoal * 2.45 ^ levelUpExpo)/10) * 10) - (levelUpGoal/2.2));
    
    db.add(`levelUpExp_${user.id}`, .0125);
    let newGoal = levelUpGoal + amountToAdd;
    
    message.channel.send("congrats an admin or someone important and cool leveled you up");
    console.log(levelUpGoal);
   console.log(newGoal);
    console.log(user.id);
    db.add(`level_${user.id}`, 1);
    db.set(`levelUpGoal_${user.id}`, newGoal);
    }
    
}
