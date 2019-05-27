const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        let som = client.emojis.find(emoji => emoji.name === "som");
        let lol = client.emojis.find(emoji => emoji.name === "trollsmile");
        let bal = db.fetch(`money_${message.author.id}`);

   	if (bal === null) bal = 0;
        
        if(args[1] === null || args[1] === undefined){
    	message.channel.send('You have a balance of лв`' + bal + '`' + som);
        }else if(args[1] === message.mentions.users.first())
        {
                let user = message.mentions.users.first().id;
                let otherbal = db.fetch(`money_${user.id}`)
                message.channel.send(user + " has a balance of лв`' + otherbal + '`' + som);
                if(otherbal > bal)
                {
                message.channel.send("They're richer than you " + lol); 
                }else if(otherbal > bal)
                {
                message.channel.send("They're poorer than you " + lol); 
                }if(otherbal === bal)
                {
                message.channel.send("You are equally poor " + lol); 
                }
        }
}
