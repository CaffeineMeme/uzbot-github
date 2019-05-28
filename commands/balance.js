const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        let som = client.emojis.find(emoji => emoji.name === "som");
        let bal = db.fetch(`money_${message.author.id}`);

   	if (bal === null) bal = 0;
        
        if(args[0] === null || args[0] === undefined){
    	message.channel.send('You have a balance of лв`' + bal + '`' + som);
        }else if(args[0] != null || args[0] != undefined)
        {
                let user = message.mentions.users.first();
                let otherbal = db.fetch(`money_${user.id}`)
                if (otherbal === null) otherbal = 0;
                message.channel.send('You have a balance of лв`' + bal + '`' + som);
                message.channel.send(user + ' has a balance of лв`' + otherbal + '`' + som);
                if(otherbal > bal)
                {
                let lol = client.emojis.find(emoji => emoji.name === "danbull");
                message.channel.send("They're richer than you " + lol); 
                }else if(otherbal < bal)
                {
                let lol = client.emojis.find(emoji => emoji.name === "blacktroll");
                message.channel.send("They're poorer than you " + lol); 
                }if(otherbal === bal)
                {
                let lol = client.emojis.find(emoji => emoji.name === "trollsmile");
                message.channel.send("You are equally poor " + lol); 
                }
        }
}
