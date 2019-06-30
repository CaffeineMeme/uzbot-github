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
    var levelUpGoal =  db.get(`levelUpGoal_${user.id}`);
    var levelUpExpo = db.get(`levelUpExp_${user.id}`);
    
    db.add(`levelUpExp_${user.id}`, .0125);
    db.add(`levelUpGoal_${user.id}`, (Math.ceil((((levelUpGoal * 2.5 ^ levelUpExpo)/10) * 10)));
    
    message.channel.send("congrats an admin or someone important and cool leveled you up");
    goal = db.get(`levelUpGoal_${user.id}`);
    console.log(goal);
    db.add(`level_${user.id}`, 1);
    }
    
}
