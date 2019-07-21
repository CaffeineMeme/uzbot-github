const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;
var canApply;
var limit = 4

exports.run = async (client, message, args, config) => {
  let cooldown = db.fetch(`jobCooldown_${message.author.id}`);
  let som = client.emojis.find(emoji => emoji.name === "som");
  let canApply = db.fetch(`canApply_${message.author.id}`);
  if(canApply == false){
    message.channel.send('work more and then you can quit bro') 
  }else {
  if((args[0] != null || args[0] != undefined) && isNaN(args[0]))
  {
    if(args[0] == "quit"){
      message.channel.send('ok bro u quit now find a new job lmao');
      db.set(`job_${message.author.id}`, null);
    }else{
    let level = db.fetch(`level_${message.author.id}`);
    let jobTitle = args.join(' ');
    if(jobTitle == "preacher" || jobTitle == "chinese sweatshop worker" || ((jobTitle == "dildo designer" || jobTitle == "executioner") && level == 1) || ((jobTitle == "tech support" || jobTitle == "saudi comedian" || jobTitle == "somali pirate") && level == 2) || ((jobTitle == "peru counterfeiter" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "street shitting supervisor" || jobTitle == "fursuit designer") && level == 4) || ((jobTitle == "gay stripper" || jobTitle == "male gynecologist") && level == 5)){
    db.set(`job_${message.author.id}`, jobTitle); 
    message.channel.send("okay you are a " + jobTitle + " now, gl bro" + "\n" + "If you wanna quit you gotta wait an hour");
    db.set(`canWork_${message.author.id}`, true);
    db.set(`canApply_${message.author.id}`, true);
     db.set(`jobCooldown_${message.author.id}`, 360);
     setTimeout(  () => {    db.set(`canApply_${message.author.id}`, true);  },  cooldown * 1000);
    }
    }
  }else if((args[0] != null || args[0] != undefined) && !isNaN(args[0]) && (args[0] < limit && args[0] > 0)){
    message.channel.send("choose a job nigga");
        if(args[0] == 1){
         let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription('Page ' + args[0] + " of Job Listings", "Page " + args[0] + "of " + limit - 1)
        .addField("Preacher", "Praise allah to pay off allah" + "\n" + "Payment: 60 - 190" + som + "\n" + "Fail Rate: 10%" + "\n" +  "Level Requirement: 0+", true)
        .addField("Chinese Sweatshop Worker", "Make cheap garbage" + "\n" + "Payment: 100 - 275" + som + "\n" + "Fail Rate: 17%" + "\n" + "Level Requirement: 0+", true)
        .addField("Dildo Designer", "Sucky Sucky" + "\n" + "Payment: 150 - 360" + som + "\n" + "Fail Rate: 12%" + "\n" + "Level Requirement: 1+", true)
        .addField("Executioner", "Fun job for everyone" + "\n" + "Payment: 100 - 250" + som + "\n" + "Fail Rate: 6%" + "\n" + "Level Requirement: 1+", true)
        .addField("Tech Support", "Hello this is Rajeesh of Microsoft, how may I assist you?" + "\n" + "Payment: 300 - 650" + som + "\n" + "Fail Rate: 15%" + "\n" + "Level Requirement: 2+", true)
        .addField("Saudi Comedian", "Make Allah laugh" + "\n" + "Payment: 500 - 920" + som + "\n" + "Fail Rate: 23%" + "\n" + "Level Requirement: 2+", true)
         .setColor("RANDOM");
          message.channel.send(embed);
          db.set(`canApply_${message.author.id}`, true);
        }else if(args[0] == 2){
         let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription('Page ' + args[0] + " of Job Listings", "Page " + args[0] + "of " + limit - 1)
        .addField("Somali Pirate", "Free movie for you" + "\n" + "Payment: 270 - 600" + som + "\n" + "Fail Rate: 18%" + "\n" + "Level Requirement: 2+", true)
        .addField("Peru Counterfeiter", "Money for money" + "\n" + "Payment: 370 - 810" + som + "\n" + "Fail Rate: 16%" + "\n" + "Level Requirement: 3+", true)
        .addField("ISIS Manager", "Show the infidels who's the boss" + "\n" + "Payment: 660 - 1060" + som + "\n" + "Fail Rate: 26%" + "\n" + "Level Requirement: 3+", true)
        .addField("Fursuit designer", "Yiff yiff" + "\n" + "Payment: 870 - 1380" + som + "\n" + "Fail Rate: 30%" + "\n" + "Level Requirement: 4+", true)
        .addField("Shitting Street Supervisor", "Pajeet say no to Poo2Loo" + "\n" + "Payment: 570 - 990" + som + "\n" + "Fail Rate: 14%" + "\n" + "Level Requirement: 4+", true)
        .addField("Gay Stripper", "Appeal to the gay" + "\n" + "Payment: 2400 - 4800" + som + "\n" + "Fail Rate: 42%" + "\n" + "Level Requirement: 5+", true)
        .addField("Male Gynecologist", "Vagina inspection" + "\n" + "Payment: 1230 - 1940" + som + "\n" + "Fail Rate: 28%" + "\n" + "Level Requirement: 5+", true)
         .setColor("RANDOM");
          message.channel.send(embed);
          db.set(`canApply_${message.author.id}`, true);
        }

}else{
  message.channel.send("you didn't put an valid argument dumbass" + "\n" + "type in a page valid page number to see job listings (ex. -uz employ 2)" + "\n" + "or type in the job you want (ex. -uz employ preacher)");
}
}
}
