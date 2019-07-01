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
    let amountToAdd = (Math.ceil(((((levelUpGoal * 1.35) ^ levelUpExpo)/10) * 10) - (levelUpGoal * 0.4)));
    
    db.add(`levelUpExp_${user.id}`, .0035);
        
    let level =  db.get(`level_${user.id}`);
    let newGoal = 0
    if(level == 0){
    newGoal = Math.round((levelUpGoal * 1.2) + amountToAdd);
    }else{
    newGoal = Math.round((levelUpGoal * 0.875) + amountToAdd);   
    }
    
    message.channel.send("congrats an admin or someone important and cool leveled you up");
    console.log(levelUpGoal);
   console.log(newGoal);
    console.log(user.id);
    db.add(`level_${user.id}`, 1);
    db.set(`levelUpGoal_${user.id}`, newGoal);
    }
    
}
