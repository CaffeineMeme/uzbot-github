const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

message.channel.send('https://discordapp.com/oauth2/authorize?client_id=576404103110852617&scope=bot&permissions=59392');

}