const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;

exports.run = async (client, message, args, config) => {
  if(args[0] == null || args[0] == undefined)
  {
    jobtitle = args.join(" ");
    if(args[0] == "preacher" || args[0] == "street merchant" || args[0] == "hijab maker" || args[0] == "executioner" ||
    args[0] == "tech support" || args[0] == "saudi comedian" || args[0] == "quran printer" || args[0] == "ISIS manager" || 
    args[0] == "terrorist"){
    db.set(job_${message.author.id}`, jobTitle); 
    }
  }
}
