const db = require('quick.db');
const Discord = require('discord.js');

var jobTitle;

exports.run = async (client, message, args, config) => {
  if(args[0] == null || args[0] == undefined)
  {
    let level = db.fetch(`level_${message.author.id}`);
    jobtitle = args.join(" ");
    if(args[0] == "preacher" || args[0] == "street merchant") ||
    ((args[0] == "hijab maker" || args[0] == "executioner") && level == 1) ||
    ((args[0] == "tech support" || args[0] == "saudi comedian") && level == 2) ||
    ((args[0] == "quran printer" || args[0] == "ISIS manager") && level == 3) ||
    ((args[0] == "terrorist" || args[0] == "shitting street supervisor") && level == 4)
    ){
    db.add(job_${message.author.id}`, jobTitle); 
    }else{
      message.channel.send('you are too infidel, level up more first');
    }
  }
}
