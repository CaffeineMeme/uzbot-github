const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    let bal =  db.fetch(`money_${message..id}`);

    if (!args[0]) return message.reply('Please specify an amount to add.');
    if (isNaN(args[0])) return message.reply('That was not a valid number!');
    if (bal < args[0]) return message.reply("You're too poor so you can't do that");
    if (!args[1]) return message.reply('Please specify a user to give to.');

    let user = message.mentions.users.first();
    message.channel.send('Successfully gave ' + args[0] + ' to ' + user);
    db.add(`money_${user.id}`, args[0]);
    db.add(`money_${message.author.id}`, (args[0] * -1));
    
}
