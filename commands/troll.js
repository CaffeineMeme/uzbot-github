const Discord = require("discord.js");
const client = new Discord.Client();

var troll = ["https://cdn.discordapp.com/attachments/557265635114090525/577274948465197066/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275034847019029/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275105856454656/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577275237339627530/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275610787872771/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275688416182311/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577275808037470212/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275881446178816/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275959498113034/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577276175475539981/emote.png", "https://media1.tenor.com/images/5e0021dce6226d67bce5b2af6d20a37d/tenor.gif?itemid=3530316", "https://i.ytimg.com/vi/7SdUB6Va7AY/maxresdefault.jpg",
"https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l300.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXn2JY75kyTgoOtMCJvtxx0G6OdZ3fohKV0UN2sS3FsbC9EPLu", "https://thumbs.dreamstime.com/z/trollface-dark-spectacled-internet-troll-d-illustration-laughing-isolated-53719224.jpg",
"https://image.shutterstock.com/image-illustration/laughing-internet-troll-head-3d-450w-528857095.jpg", "https://files.gamebanana.com/img/ico/sprays/5391d4e8edb05.gif", "https://pics.me.me/troll-face-14350384.png"];

module.exports.run = async (client, message, args) => {
        var minimum = 0;
		var maximum = troll.length - 1;
		trollInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + trollInt);
		const embed = new Discord.RichEmbed().setColor(0x0099b5).setTitle("trolled").addField("lol bro u got trolled", "lol dumb nigga was just trolled what a loser", true).setImage(troll[trollInt])
        message.channel.send(embed);
}