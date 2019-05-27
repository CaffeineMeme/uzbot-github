require('dotenv').config(); 
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const db = require("quick.db");
const client = new Discord.Client();

var levelUpGoal = 5000;
var levelUpExpo = 1.05

client.on("up", () => {
  console.log("tajikistan nigga fart");
  client.user.setActivity('-uz help for commands | Currently in ' + client.guilds.size + ' servers');
});

client.on("message", message => 
{
  
  Math.ceil((n+1)/10)*10
  let bal = db.fetch(`totalMoney_${message.author.id}`);
  if(bal >= levelUpGoal)
  {
    levelUpGoal = (Math.ceil((((levelUpGoal * 2.5 ^ levelUpExpo) - (levelUpGoal * 0.2) + 1)/10) * 10);
    levelUpExpo += .0125;
    message.channel.send(congrats a nigga leveled up);
    db.add(`level_${message.author.id}`, 1);
  }
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.TOKEN);
