const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        let som = client.emojis.find(emoji => emoji.name === "som");
        let bal = db.fetch(`money_${message.author.id}`);
        let level = db.fetch(`level_${message.author.id}`);
        let levelUpGoal =  db.fetch(`levelUpGoal_${message.author.id}`);
        let job =  db.fetch(`job_${message.author.id}`);
        let progress = db.fetch(`totalMoney_${message.author.id}`);
        
        if(job == undefined || job == null)
        {
                job = "Unemployed lol";
        }
        
        if(level == null)
        {
             level = 0
        }
        
        if(bal == null)
        {
             bal = 0
        }
        
         if(progress == null)
        {
             progress = 0
        }
        
        let jobTitle =  job.charAt(0).toUpperCase() + job.slice(1);
        let percentage = progress / levelUpGoal;
        
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setTitle(`alright bro here's your stats`)
        .setColor("RANDOM")
        .addField("Username", `${message.author}`)
        .addField("Current Balance", bal + som)
        .addField("Net Worth", progress + som)
        .addField("Current Job", job)
        .addField("Current Level", level)
        .addField("Leveling Progress", progress + '/' + levelUpGoal + "\n" + "(" + (Math.round(percentage * 1000)/10) + "%)");
        message.channel.send(embed);
        
}
