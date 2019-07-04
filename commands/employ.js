const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;
var canApply;
var pageNum;

exports.run = async (client, message, args, config) => {
  let cooldown = db.fetch(`jobCooldown_${message.author.id}`);
  let som = client.emojis.find(emoji => emoji.name === "som");
  let canApply = db.fetch(`canApply_${message.author.id}`);
  if(canApply == false){
    message.channel.send('work more and then you can quit bro') 
  }else {
  if(args[0] != null || args[0] != undefined)
  {
    if(args[0] == "quit"){
      message.channel.send('ok bro u quit now find a new job lmao');
      db.set(`job_${message.author.id}`, null);
    }else{
    let level = db.fetch(`level_${message.author.id}`);
    let jobTitle = args.join(' ');
    if(jobTitle == "preacher" || jobTitle == "street merchant" || ((jobTitle == "hijab maker" || jobTitle == "executioner") && level == 1) || ((jobTitle == "tech support" || jobTitle == "saudi comedian" || jobTitle == "kaaba repairman") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "street shitting supervisor" || jobTitle == "terrorist") && level == 4) || ((jobTitle == "gay stripper" || jobTitle == "booze smuggler") && level == 5)){
    //if((jobTitle == "preacher" || jobTitle == "street merchant") || ((jobTitle == "hijab maker" || jobTitle == "executioner") && level == 1) || ((jobTitle == "tech support" || jobTitle == "saudi comedian") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "terrorist" || jobTitle == "shitting street supervisor") && level == 4) || ((jobTitle == "gay stripper" || jobTitle == "booze smuggler") && level == 5)){ 
    //if((jobTitle == "preacher" || jobTitle == "street merchant") || ((jobTitle == "hijab maker" || jobTitle == "executioner") && level == 1) || ((jobTitle == "tech support" || jobTitle == "saudi comedian" || jobTitle == "kaaba repairman") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "terrorist" || jobTitle == "shitting street supervisor") && level == 4) || ((jobTitle == "gay stripper" || jobTitle = "booze smuggler") && level == 5)){
    db.set(`job_${message.author.id}`, jobTitle); 
    message.channel.send("okay you are a " + jobTitle + " now, gl bro" + "\n" + "If you wanna quit you gotta wait an hour");
    db.set(`canWork_${message.author.id}`, false);
     db.set(`jobCooldown_${message.author.id}`, 360);
     setTimeout(  () => {    db.set(`canApply_${message.author.id}`, true);  },  cooldown * 1000);
    }
    }
  }else{
    message.channel.send('choose a job first');
    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`List of available jobs`, `FORMAT EXAMPLE: -uz employ preacher`)
        .addField("Preacher", "Praise allah to pay off allah" + "\n" + "Payment: 60 - 190" + som + "\n" + "Fail Rate: 10%" + "\n" +  "Level Requirement: 0+", true)
        .addField("Street Merchant", "Sell your trash to dumb niggas" + "\n" + "Payment: 100 - 275" + som + "\n" + "Fail Rate: 17%" + "\n" + "Level Requirement: 0+", true)
        .addField("Hijab Maker", "Cover em up" + "\n" + "Payment: 150 - 360" + som + "\n" + "Fail Rate: 12%" + "\n" + "Level Requirement: 1+", true)
        .addField("Executioner", "Fun job for everyone" + "\n" + "Payment: 100 - 250" + som + "\n" + "Fail Rate: 6%" + "\n" + "Level Requirement: 1+", true)
        .addField("Tech Support", "Hello this is Rajeesh of Microsoft, how may I assist you?" + "\n" + "Payment: 300 - 650" + som + "\n" + "Fail Rate: 15%" + "\n" + "Level Requirement: 2+", true)
        .addField("Saudi Comedian", "Make Allah laugh" + "\n" + "Payment: 500 - 920" + som + "\n" + "Fail Rate: 23%" + "\n" + "Level Requirement: 2+", true)
        .addField("Kaaba Repairman", "Fix the holy block please" + "\n" + "Payment: 270 - 600" + som + "\n" + "Fail Rate: 18%" + "\n" + "Level Requirement: 2+", true)

    .setColor("RANDOM");
  message.channel.send(embed);
  pageNum = 1;
  
  message.react(':arrow_backward:');
  message.react(':arrow_forward:');
  message.react(':stop_button:');
    client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.emoji.name == ':arrow_backward:' && reaction.count >= 2)
  {
    reaction.remove(message.author.id);
    if(pageNum > 1)
    {
      pageNum++;
    }
  }
    
  if(reaction.emoji.name == ':arrow_forward:' && reaction.count >= 2)
  {
    reaction.remove(message.author.id);
    if(pageNum < 2)
    {
      pageNum--;
    }
  }
    
  if(reaction.emoji.name == ':stop:' && reaction.count >= 2)
  {
    message.delete();
  }
  });
            
 if(pageNum == 1){
    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`List of available jobs`, `FORMAT EXAMPLE: -uz employ preacher`)
        .addField("Preacher", "Praise allah to pay off allah" + "\n" + "Payment: 60 - 190" + som + "\n" + "Fail Rate: 10%" + "\n" +  "Level Requirement: 0+", true)
        .addField("Street Merchant", "Sell your trash to dumb niggas" + "\n" + "Payment: 100 - 275" + som + "\n" + "Fail Rate: 17%" + "\n" + "Level Requirement: 0+", true)
        .addField("Hijab Maker", "Cover em up" + "\n" + "Payment: 150 - 360" + som + "\n" + "Fail Rate: 12%" + "\n" + "Level Requirement: 1+", true)
        .addField("Executioner", "Fun job for everyone" + "\n" + "Payment: 100 - 250" + som + "\n" + "Fail Rate: 6%" + "\n" + "Level Requirement: 1+", true)
        .addField("Tech Support", "Hello this is Rajeesh of Microsoft, how may I assist you?" + "\n" + "Payment: 300 - 650" + som + "\n" + "Fail Rate: 15%" + "\n" + "Level Requirement: 2+", true)
        .addField("Saudi Comedian", "Make Allah laugh" + "\n" + "Payment: 500 - 920" + som + "\n" + "Fail Rate: 23%" + "\n" + "Level Requirement: 2+", true)
        .addField("Kaaba Repairman", "Fix the holy block please" + "\n" + "Payment: 270 - 600" + som + "\n" + "Fail Rate: 18%" + "\n" + "Level Requirement: 2+", true)

    .setColor("RANDOM");
   
   message.edit(embed);
 }
    
     if(pageNum == 2){
    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .addField("Quran Printer", "Print holy books for Allah" + "\n" + "Payment: 370 - 810" + som + "\n" + "Fail Rate: 16%" + "\n" + "Level Requirement: 3+", true)
        .addField("ISIS Manager", "Show the infidels who's the boss" + "\n" + "Payment: 660 - 1060" + som + "\n" + "Fail Rate: 26%" + "\n" + "Level Requirement: 3+", true)
        .addField("Terrorist", "I don't like big towers" + "\n" + "Payment: 870 - 1380" + som + "\n" + "Fail Rate: 30%" + "\n" + "Level Requirement: 4+", true)
        .addField("Shitting Street Supervisor", "Pajeet say no to Poo2Loo" + "\n" + "Payment: 570 - 990" + som + "\n" + "Fail Rate: 14%" + "\n" + "Level Requirement: 4+", true)
        .addField("Gay Stripper", "Appeal to the gay" + "\n" + "Payment: 2400 - 4800" + som + "\n" + "Fail Rate: 42%" + "\n" + "Level Requirement: 5+", true)
        .addField("Booze Smuggler", "Pay for drink and drive please" + "\n" + "Payment: 1230 - 1940" + som + "\n" + "Fail Rate: 28%" + "\n" + "Level Requirement: 5+", true)

    .setColor("RANDOM");
   
   message.edit(embed);
 }
    
    db.set(`canApply_${message.author.id}`, true);
}
}
}
/* || ((jobTitle == "tech support" || == "saudi comedian") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "terrorist" || jobTitle == "shitting street supervisor") && level == 4)*/
