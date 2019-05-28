const db = require('quick.db');
const Discord = require('discord.js');
var timeRemaining;

exports.run = async (client, message, args, config) => {
    var timeLeft = db.fetch(`timeLeft_${message.author.id}`);
    var canWork = db.fetch(`canWork_${message.author.id}`);
    var timer = setInterval(  () => {db.add(`timeLeft_${message.author.id}`, -1); console.log(timeLeft);}, 1100);
   
    if (timeRemaining == undefined){
        timeRemaining = 0;
    }
    
    canWork = db.set(`canWork_${message.author.id}`, true);
    
    if(timeLeft <= 0)
        {
            clearTimeout();
            clearInterval(timer);
            canWork = db.set(`canWork_${message.author.id}`, true);
            timeLeft = 0;
            timeRemaining = 0;
        }
if(canWork === true){

    if (args[0] == 'preacher') {
            var minimum = 20;
			var maximum = 150;

        let amount = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you prayed to Allah and he gave you ${amount}$`)
        .setColor("RANDOM");
        
        timeLeft = db.add(`timeLeft_${message.author.id}`, 20);
        timeRemaining = 20;
        message.channel.send(embed);
        db.add(`totalMoney_${message.author.id}`, amount);
        db.add(`money_${message.author.id}`, amount);
       db.set(`canWork_${message.author.id}`, false);
        setTimeout(  () => {    db.set(`canWork_${message.author.id}`, true);  },  timeLeft * 1100);
    } else if(args[0] == 'troll') {
        var minimum = 100;
			var maximum = 350;

        let amount = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you trolled some gay niggas, and stole ${amount}$ worth of JahCoin.`)
        .setColor("RANDOM");
        
        timeLeft = db.add(`timeLeft_${message.author.id}`, 35);
        timeRemaining = 35;
        message.channel.send(embed);
        db.add(`totalMoney_${message.author.id}`, amount);
        db.add(`money_${message.author.id}`, amount);
        db.set(`canWork_${message.author.id}`, false);
        setTimeout(  () => {    db.set(`canWork_${message.author.id}`, true);  },  timeLeft * 1100);
    } else if(args[0] == 'terrorist') {
        var minimum = 300;
			var maximum = 600;

        let amount = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you bombed a tower and stole ${amount}$ in flaming money`)
        .setColor("RANDOM");
        
    
        timeLeft = db.add(`timeLeft_${message.author.id}`, 50);
        timeRemaining = 50;
        message.channel.send(embed);
        db.add(`money_${message.author.id}`, amount);
        db.add(`totalMoney_${message.author.id}`, amount);
        db.set(`canWork_${message.author.id}`, false);
        setTimeout(  () => {    db.set(`canWork_${message.author.id}`, true);  },  timeLeft * 1100);
    }
    }else{
        message.channel.send("Yo hold on you've only got " + timeLeft + " seconds before you can work again");
    }
}
