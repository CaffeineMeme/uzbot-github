const db = require('quick.db');
const Discord = require('discord.js');

var canWork = true;
var timeLeft;

exports.run = async (client, message, args, config) => {
if(canWork === true){
    clearInterval();
    clearTimeout();
    if (args[0] == 'preacher') {

        let amount = Math.floor(Math.random() * 100) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you prayed to Allah and he gave you ${amount}$`)
        .setColor("RANDOM");
        
        timeLeft = 10;
        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
        setInterval(  () => {timeLeft--;}, 1000);
    } else if(args[0] == 'troll') {
        let amount = Math.floor(Math.random() * 260) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you trolled some gay niggas, and stole ${amount}$ worth of JahCoin.`)
        .setColor("RANDOM");
        
        timeLeft = 15;
        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
        setInterval(  () => {timeLeft--;}, 1000);
    } else if(args[0] == 'terrorist') {
        let amount = Math.floor(Math.random() * 420) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you bombed a tower and stole ${amount}$ in flaming money`)
        .setColor("RANDOM");
        
    
        timeLeft = 20;
        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        canWork = false;
        setTimeout(  () => {    canWork = true;  },  timeLeft * 1000);
        setInterval(  () => {timeLeft--;}, 1000);
    }
    }else{
        message.channel.send("Yo hold on you've only got " + timeLeft + " before you can work again");
    }
}
