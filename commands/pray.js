const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args, config) => {

  let canPray = db.fetch(`canPray_${message.author.id}`);
  let cooldownTime = db.fetch(`prayCool_${message.author.id}`);
  let bal = db.fetch(`money_${message.author.id}`);
  
  let amount = args[0];
  
  let fail = Math.floor(Math.random() * (100 - 0 + 1)) + Math.floor(bal/1000);
  let failMax = 20 + Math.floor(Math.random() * (100 - 0 + 1)/2);
  
  if(canPray == false){
    message.channel.send("you can't pray yet dumbass");
  }else{
  if(amount > bal)
  {
    message.channel.send("you don't even have that much money stupid");
  }
  else if(args[0] == undefined)
  {
    message.channel.send("you need to put an amount to offer (ex. -uz pray 2000)");
  }
  else
  {
    db.add(`money_${message.author.id}`, amount * -1);
  }
  
  if(fail <= failMax)
        {
          var minimum = 1;
		      var maximum = 4;
          var numberPoop = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
          switch(numberPoop)
          {
            case 1:
            message.channel.send("Allah fucking hates your offering so he decides to make you fail more often, lol");
            db.set(`prayCool_${message.author.id}`, 30);
            db.set(`failMod_${message.author.id}`, 25);
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
            setTimeout(  () => {   db.set(`failMod_${message.author.id}`, 0); },  cooldownTime * 1000000);

            break;
            
            case 2:
            message.channel.send("Allah spits on your offering, now you earn less and lose more lol better luck next time");
            db.set(`prayCool_${message.author.id}`, 30);
            db.set(`earningsMulti_${message.author.id}`, 1.35);
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
	    setTimeout(  () => {   db.set(`earningsMulti_${message.author.id}`, 1); },  cooldownTime * 1000000);
            break;
            
            case 3:
            message.channel.send("Allah thinks your offering is gay, now you can't work for half an hour lol");
            db.set(`prayCool_${message.author.id}`, 30);
            db.set(`canWork_${message.author.id}`, false);
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
	    setTimeout(  () => {   db.set(`canWork_${message.author.id}`, true); },  cooldownTime * 1000000);
            break;
            
            case 4:
             message.channel.send("Your offering makes Allah so mad he takes some more of your money");
            db.set(`prayCool_${message.author.id}`, 30);
            bal = db.fetch(`money_${message.author.id}`);
            db.add(`money_${message.author.id}`, -1 * Math.floor(bal/12.5));
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
            break;
            
          }
          
        }
   else
        {
          var minimum = 1;
          var maximum = 3;
          var numberPoop = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
          switch(numberPoop)
          {
            case 1:
            message.channel.send("Allah loves your offering and makes you more successful");
            db.set(`prayCool_${message.author.id}`, 30);
            db.set(`failMod_${message.author.id}`, -30);
            setTimeout(  () => {   db.set(`failMod_${message.author.id}`, 0); },  cooldownTime * 1000000);
	    setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true);},  cooldownTime * 1000000);
            break;
            
            case 2:
            message.channel.send("Allah accepts your offering and decides you're cool and should make more money");
            db.set(`prayCool_${message.author.id}`, 30);
            db.set(`earningsMulti_${message.author.id}`, 0.625);
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
	    setTimeout(  () => {   db.set(`earningsMulti_${message.author.id}`, 1); },  cooldownTime * 1000000);
            break;
            
            case 3:
            message.channel.send("Allah gives you money for making a good offering");
            db.set(`prayCool_${message.author.id}`, 30);
            bal = db.fetch(`money_${message.author.id}`);
            db.add(`money_${message.author.id}`, -1 * Math.floor(bal/12.5));
            setTimeout(  () => {   db.set(`canPray_${message.author.id}`, true); },  cooldownTime * 1000000);
            break;

            
          }
        }

}
}
