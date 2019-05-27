const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
        var toast = ["https://media.discordapp.net/attachments/577835516993732630/580736414174543873/tile000.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736416267632641/tile001.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736418360459304/tile002.png", 
	    "https://media.discordapp.net/attachments/577835516993732630/580736420180787210/tile003.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736422131138561/tile004.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736424287141914/tile005.png"];
        var trollInt;
        var responseInt;
			var minimum = 0;
			var maximum = 110;
			var toastLink = "";
            var scale = responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            var status = "";
			if(scale < 21){
				status = "Lol untoasted you dumbass";
				toastLink = toast[0];
			}
			else if(scale > 21 && scale < 41){
				status = "barely toasted but still toast";
				toastLink = toast[1];
			}
			else if(scale > 41 && scale < 61){
				status = "yum good";
				toastLink = toast[2];
			}
			else if(scale > 61 && scale < 81){
				status = "bro this kinda brown yo";
				toastLink = toast[3];
			}
			else if(scale > 81 && scale < 101){
				status = "bruh nigga you overtoast";
				toastLink = toast[4];
			}
			else if(scale > 101){
				status = "SUDAN TOAST SUDAN TOAST SUDAN TOAST";
				toastLink = toast[5];
				
			}

			message.channel.send({embed: {
					color: 0xce1126,
					author: {
						name: "you made toast over the sand",
						icon_url: client.user.avatarURL
					},
					title: "UzBot Official FunnyMeter",
					fields: [
					{
						name: "Toastedness:",
						value: scale + "/100"
						
					},
					{
						name: "Status:",
						value: status
						
					}],
					image: 
					{
						url: toastLink
					},
					footer: 
					{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Israel is fucking fake"
					}
			}
			});
}