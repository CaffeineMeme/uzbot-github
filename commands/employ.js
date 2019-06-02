const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;
var canApply;

exports.run = async (client, message, args, config) => {
  let cooldown = db.fetch(`jobCooldown_${message.author.id}`);
  let som = client.emojis.find(emoji => emoji.name === "som");
  if(canApply == false){
    message.channel.send('work more and then you can quit bro') 
  }else {
    message.channel.send('choose a job first');
    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`List of available jobs`, ` `)
        .addField("Preacher", "Praise allah to pay off allah" + "\n" + "Payment: 30 - 150" + som + "\n" + "Fail Rate: 10%" + "\n" + "Level Requirement: 0+", true)
        .addField("Street Merchant", "Sell your trash to dumb niggas" + "\n" + "Payment: 80 - 250" + som + "\n" + "Fail Rate: 17%" + "\n" + "Level Requirement: 0+", true)
        .addField("Hijab Maker", "Cover em up" + "\n" + "Payment: 110 - 280" + som + "\n" + "Fail Rate: 12%" + "\n" + "Level Requirement: 1+", true)
        .addField("Executioner", "Fun job for everyone" + "\n" + "Payment: 90 - 170" + som + "\n" + "Fail Rate: 6%" + "\n" + "Level Requirement: 1+", true)
        .addField("Tech Support", "Hello this is Rajeesh of Microsoft, how may I assist you?" + "\n" + "Payment: 170 - 340" + som + "\n" + "Fail Rate: 15%" + "\n" + "Level Requirement: 2+", true)
        .addField("Saudi Comedian", "Make Allah laugh" + "\n" + "Payment: 270 - 600" + som + "\n" + "Fail Rate: 23%" + "\n" + "Level Requirement: 2+", true)
    
        .setColor("RANDOM");
        let currentUser = message.author.id;
        message.channel.send(embed);
    
        const getJob = async (currentUser) => {
        
        if (message.author.bot) return;
        if (message.author.id != currentUser) return;
          
        const jobArgs = message.content.split(/ +/g);
          
        let level = db.fetch(`level_${message.author.id}`);
        let jobTitle = jobArgs.join(' ');
        if((jobTitle == "preacher" || jobTitle == "street merchant") || ((jobTitle == "hijab maker" || jobTitle == "executioner") && level == 1) || ((jobTitle == "tech support" || jobTitle == "saudi comedian") && level == 2)){
         message.channel.send("okay you are a " + jobTitle + " now, gl bro" + "\n" + "If you wanna quit you gotta wait an hour");
        canApply = false;
        db.set(`jobCooldown_${message.author.id}`, 360);
        setTimeout(  () => {    canApply = true;  },  cooldown * 1000);
          return;
      }else{
         message.channel.send("not a job stupid");
      }
          
        await getJob();
          
}
}
}
/* || ((jobTitle == "tech support" || == "saudi comedian") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "terrorist" || jobTitle == "shitting street supervisor") && level == 4)*/

