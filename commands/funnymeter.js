const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

        if(args.length > 20){
			message.channel.send("nigga that's too long");
		}else{
			var minimum = 0;
			var maximum = 110;
			var scale = responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			var subject = args.join(" ");
            var status = "";
			if(scale < 21){
				status = "BRO CRINGE";
			}
			else if(scale > 21 && scale < 41){
				status = "Unfunny";
			}
			else if(scale > 41 && scale < 61){
				status = "bro that's kind of a funny";
			}
			else if(scale > 61 && scale < 81){
				status = "lole";
			}
			else if(scale > 81 && scale < 101){
				status = "BRO THAT FUNNY";
			}
			else if(scale > 101){
				status = "FUNNY METER BROKE";
			}

			message.channel.send({embed: {
					color: 0xffffff,
					author: {
						name: "",
						icon_url: client.user.avatarURL
					},
					title: "UzBot Official IronyMeter",
					fields: [
					{
						name: "Subject:",
						value: subject
						
					},
					{
						name: "Irony Rating:",
						value: scale + "/100"
						
					},
					{
						name: "Status:",
						value: status
						
					}],
					footer: 
					{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Irony = Funny"
					}
			}
			});
	}
}