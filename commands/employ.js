const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;

exports.run = async (client, message, args, config) => {
  if(args[0] == null || args[0] == undefined)
  {
    let level = db.fetch(`level_${message.author.id}`);
    jobTitle = args.join(" ");
    if((jobTitle == "preacher" || jobTitle == "street merchant") || ((jobTitle == "hijab maker" || jobTitle == "executioner") && level == 1)){
    db.add(`job_${message.author.id}`, jobTitle); 
    }else{
      message.channel.send('you are too infidel, level up more first');
    }
  }else{
    message.channel.send('nigga you gotta put a job first');
    }
}
/* || ((jobTitle == "tech support" || == "saudi comedian") && level == 2) || ((jobTitle == "quran printer" || jobTitle == "ISIS manager") && level == 3) || ((jobTitle == "terrorist" || jobTitle == "shitting street supervisor") && level == 4)*/
