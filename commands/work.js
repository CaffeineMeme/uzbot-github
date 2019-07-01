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
    let cooldownTime = db.fetch(`jobWait_${message.author.id}`);
    let canWork = db.fetch(`canWork_${message.author.id}`);
    
    console.log(job);
    
    if(canWork === true){
        if (job == undefined || job == null){
            earnMax = 0;
            minimum = 0;
            failMax = 0;
            failMin = 0;
            cooldownTime = 0;
            message.channel.send("you don't have a job, use -uz employ to get one");
        }else{
        if (job == 'preacher') {
        earnMax = 190;
        earnMin = 60;
        failMin = 0;
        failMax = 10;
        if(canWork = true) {
        db.set(`jobWait_${message.author.id}`, 15);
        }
        successMsg = "You made allah happy so he gave you ";
            successMsg2 = "";
        failSmg = "You made allah fuckin angry so he pissed on you and stole ";
            failSmg2 = " in reparations";
        }
        else if (job == 'street merchant') {
        earnMax = 275;
        earnMin = 100;
        failMin = 0;
        failMax = 17;
        if(canWork = true) {
        db.set(`jobWait_${message.author.id}`, 20);
        }
        successMsg = "You sold your garbage to dumbasses and got ";
            successMsg2 = "";
        failSmg = "Some niggas stole your shit and you lost about ";
            failSmg2 = " and like half your stock";
        }
        else if (job == 'hijab maker') {
        earnMax = 360;
        earnMin = 150;
        failMin = 0;
        failMax = 12;
            if(canWork = true) {
         db.set(`jobWait_${message.author.id}`, 30);
            }
            successMsg = "The hijab covers her face well, so you get ";
            successMsg2 = "";
        failSmg = "The hijab falls apart, and your client is beat to paralysis by the police, so she steals ";
            failSmg2 = " from you";
        }
        else if (job == 'executioner') {
        earnMax = 250;
        earnMin = 100;
        failMin = 0;
        failMax = 6;
            if(canWork = true) {
       db.set(`jobWait_${message.author.id}`, 35);
            }
        successMsg = "The head flies and the prince throws you ";
            successMsg2 = "";
        failSmg = "You chop off the retards nose, he steals ";
        failSmg2 = " and runs away.";
        }
        else if (job == 'tech support') {
        earnMax = 650;
        earnMin = 300;
        failMin = 0;
        failMax = 15;
            if(canWork = true) 
            {db.set(`jobWait_${message.author.id}`, 25);
            }
        successMsg = "You get the dumdum's bank account and grab a nice ";
            successMsg2 = "";
        failSmg = "Your computer blows up and you spend ";
        failSmg = " to repair it";
        }
        else if (job == 'saudi comedian') {
        earnMax = 920;
        earnMin = 500;
        failMin = 0;
        failMax = 22;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 55);
            }
        successMsg = "You make a funny and get ";
            successMsg2 = "";
        failSmg = "You make the audience mad. They stone you and medical bills cost ";
            failSmg2 = "";
        }
        else if (job == 'kaaba repairman') {
        earnMax = 600;
        earnMin = 270;
        failMin = 0;
        failMax = 18;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 30);
            }
        successMsg = "You fix the kaaba very good and Allah gives you ";
            successMsg2 = "";
        failSmg = "You chip off a block killing a diciple and their hospital bill costs ";
            failSmg2 = "";
        }
        else if (job == 'quran printer') {
        earnMax = 810;
        earnMin = 370;
        failMin = 0;
        failMax = 22;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 25);
            }
        successMsg = "You print a nice quran and get ";
             successMsg2 = "";
        failSmg = "Your dumb ass printed it all in English and you need to reprint, and you spend ";
        failSmg2 = " to make arab subtitles";
        }
        else if (job == 'ISIS manager') {
        earnMax = 600;
        earnMin = 1160;
        failMin = 0;
        failMax = 26;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 55);
            }
        successMsg = "You send your best men to kill the infidels and they loot ";
        successMsg2 = " from the pigs and give it to you";
        failSmg = "Some of your best men are killed and you have to pay a lowly peasant ";
        failSmg2 = " to fetch their AK47s, after all, you can't let them go to waste";
        }
        else if (job == 'terrorist') {
        earnMax = 600;
        earnMin = 1160;
        failMin = 0;
        failMax = 26;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 65);
            }
        successMsg = "You send your best men to kill the infidels and they loot ";
        successMsg2 = " from the pigs and give it to you";
        failSmg = "Some of your best men are killed and you have to pay a lowly peasant ";
        failSmg2 = " to fetch their AK47s, after all, you can't let them go to waste";
        }
        else if (job == 'street shitting supervisor') {
        earnMax = 570;
        earnMin = 990;
        failMin = 0;
        failMax = 14;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 35);
            }
        successMsg = "You make organized poopoos on the street, the citizens give you ";
        successMsg2 = " for your coordination skills";
        failSmg = "You have make such a bad poopoo coordination that they leave and poo in the loo, costing you ";
        failSmg2 = "";
        }
        else if (job == 'gay stripper') {
        earnMax = 2400;
        earnMin = 4800;
        failMin = 0;
        failMax = 41;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 100);
            }
        successMsg = "You strip like a mega gay and the fags toss you ";
        successMsg2 = " which you stuff in your ass";
        failSmg = "The police bust the bar and shoot everyone in the bar and you get shot in the cock. Repairs cost ";
        failSmg2 = " and they overcharge because you're gay";
        }
             else if (job == 'booze smuggler') {
        earnMax = 1230;
        earnMin = 1990;
        failMin = 0;
        failMax = 27;
            if(canWork = true) {
        cooldownTime = db.set(`jobWait_${message.author.id}`, 40);
            }
        successMsg = "You sell booze to the infidel and make ";
        successMsg2 = " before you ask Allah for forgiveness";
        failSmg = "The saudi prince sees you and steals all of your booze for himself. Oh yeah and he also steals ";
        failSmg2 = " for recoupment fines.";
        }
            
        
        
        let fail = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        let amount = Math.floor(Math.random() * (earnMax - earnMin + 1)) + earnMin;
        
        if(fail <= failMax)
        {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author} , ${failSmg}${amount}${som}${failSmg2}`)
            .setColor("RANDOM");
            message.channel.send(embed);
             db.add(`money_${message.author.id}`, (amount * -1));
            db.set(`canWork_${message.author.id}`, false);
            setTimeout(  () => {   db.set(`canWork_${message.author.id}`, true);  },  cooldownTime * 1000);
        }else
        {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author} , ${successMsg}${amount}${som}${successMsg2}`)
            .setColor("RANDOM");
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, (amount));
            db.add(`totalMoney_${message.author.id}`, (amount));
            db.set(`canWork_${message.author.id}`, false);
            setTimeout(  () => {   db.set(`canWork_${message.author.id}`, true);  },  cooldownTime * 1000);
        }
        }
        console.log(cooldownTime);
    }
    else{
        message.channel.send("hold on faggot, let's not spam commands");
    }
    console.log(canWork);
}

