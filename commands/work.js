const db = require('quick.db');
const Discord = require('discord.js');

var canWork = true;
var timeRemaining;
var timeLeft;
var earnMax;
var earnMin;
var failMax;
var failMin;
var cooldownTime;
var successMsg;
var failSmg;

exports.run = async (client, message, args, config) => {
    
    var job = db.fetch(`job_${message.author.id}`);
    let som = client.emojis.find(emoji => emoji.name === "som");
    
    console.log(job);
    
    if(canWork === true){
        if (job == 'preacher') {
        earnMax = 150;
        earnMin = 30;
        failMin = 0;
        failMax = 10;
        cooldownTime = 15;
        successMsg = "You made allah happy so he gave you ";
        failSmg = "You made allah fuckin angry so he pissed on you and stole ";
        }
        else if (job == 'street merchant') {
        earnMax = 250;
        earnMin = 80;
        failMin = 0;
        failMax = 17;
        cooldownTime = 20;
            successMsg = "You sold your garbage to dumbasses and got ";
        failSmg = "Some niggas stole your shit and about ";
        }
        else if (job == 'hijab maker') {
        earnMax = 280;
        earnMin = 110;
        failMin = 0;
        failMax = 12;
        cooldownTime = 30;
            successMsg = "The hijab covers her face well, so you get ";
        failSmg = "The hijab falls apart, and your client is beat to paralysis by the police, so she steals ";
        }
        else if (job == 'executioner') {
        earnMax = 170;
        earnMin = 90;
        failMin = 0;
        failMax = 6;
        cooldownTime = 45;
            successMsg = "The head flies and the prince throws you ";
        failSmg = "You chop off the retards nose, he runs away and from you steals ";
        }
        else if (job == 'tech support') {
        earnMax = 340;
        earnMin = 170;
        failMin = 0;
        failMax = 15;
        cooldownTime = 25;
        successMsg = "You get the dumdum's bank account and grab a nice ";
        failSmg = "Your computer blows up and repairs cost ";
        }
        else if (job == 'saudi comedian') {
        earnMax = 600;
        earnMin = 270;
        failMin = 0;
        failMax = 22;
        cooldownTime = 55;
            successMsg = "You make a funny and get ";
        failSmg = "You make the audience mad. They stone you and medical bills cost ";
        }
        else if (job == undefined){
            earnMax = 0;
            minimum = 0;
            failMax = 0;
            failMin = 0;
            cooldownTime = 0;
            message.channel.send("you don't have a job, use -uz employ to get one");
        }
        
        let fail = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        let amount = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        
        if(fail <= failMax)
        {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author},+ failSmg + ${amount}$`)
            .setColor("RANDOM");
            message.channel.send(embed);
             db.add(`money_${message.author.id}`, (amount * -1));
            canWork = false;
            setTimeout(  () => {    canWork = true;  },  cooldownTime * 1000);
        }else
        {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author},+ successMsg + ${amount}$`)
            .setColor("RANDOM");
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, (amount));
            canWork = false;
            setTimeout(  () => {    canWork = true;  },  cooldownTime * 1000);
        }
    }
    else{
        message.channel.send("hold on faggot, let's not spam commands");
    }
}

