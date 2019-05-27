const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
					color: 0x0099b5,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "Yo whats up this is UzBot",
					fields: [{
						name: "Verison",
						value: "Current UzBot Version: Bukhara (0.9.2)" + "\n" + "Current Status: Late Beta"
					},
					{
						name: "Creators",
						value: "Created by CaffeineMeme and onjah_69"
					},
					{
						name: "News and Updates",
						value: "Lots of new and epic commands" + "\n"
						+ "Remade title generator to include worldfunny regions" + "\n" + 
						"Increase databases for various commands" + "\n" +
						"Reorganized help into sections" + "\n" +
						"Code optimizations"
						
					},
					{ 
						name: "Special Thanks to:",
						value: "Calaz" + "\n" + "muslim jesus" + "\n" + "Dabbing🅱️eter666" + "\n" + "and T r a z"
						
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: I used to be called Uzghamenzakhijikyzstan but that was a retarded name"
						}
			}	
			});
		}