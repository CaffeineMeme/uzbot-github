const db = require('quick.db');
const Discord = require('discord.js');

var canWork = true;
var timeRemaining;

exports.run = async (client, message, args, config) => {
    
    var timer = setInterval(  () => {timeLeft--;}, 1000);
    
if(canWork === true){
    if (args[0] == 'preacher') {

        let amount = Math.floor(Math.random() * 150) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you prayed to Allah and he gave you ${amount}$`)
        .setColor("RANDOM");
        
        timeLeft = db.set(`timeLeft_${message.author.id}`, 20);
        timeRemaining = 20;
        message.channel.send(embed);
        db.add(`totalMoney_${message.author.id}`, amount);
        db.add(`money_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
    } else if(args[0] == 'troll') {
        let amount = Math.floor(Math.random() * 350) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you trolled some gay niggas, and stole ${amount}$ worth of JahCoin.`)
        .setColor("RANDOM");
        
        timeLeft = db.set(`timeLeft_${message.author.id}`, 35);
        timeRemaining = 35;
        message.channel.send(embed);
        db.add(`totalMoney_${message.author.id}`, amount);
        db.add(`money_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
    } else if(args[0] == 'terrorist') {
        let amount = Math.floor(Math.random() * 600) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you bombed a tower and stole ${amount}$ in flaming money`)
        .setColor("RANDOM");
        
    
        timeLeft = db.set(`timeLeft_${message.author.id}`, 50);
        timeRemaining = 35;
        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        db.add(`totalMoney_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
    }
    }else{
        message.channel.send("hold on faggot, let's not spam commands");
    }}

