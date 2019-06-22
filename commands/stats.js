const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        let som = client.emojis.find(emoji => emoji.name === "som");
        let bal = db.fetch(`money_${message.author.id}`);
        let level = db.fetch(`level_${message.author.id}`);
        let levelUpGoal =  db.get(`levelUpGoal_${message.author.id}`);
        let job =  db.get(`job_${message.author.id}`);
        
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
        
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setTitle(`alright bro here's your stats`)
        .setColor("RANDOM")
        .addField("Username", `${message.author}`)
        .addField("Current Balance", bal + som)
        .addField("Current Job", job)
        .addField("Current Level", level)
        .addField("Leveling Progress", bal + '/' + levelUpGoal + "      (" + (Math.round((bal/levelUpGoal)  * 10) / 10) + "%)");
        message.channel.send(embed);
        
}
