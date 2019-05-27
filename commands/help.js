const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

if(args[0] == null || args[0] == undefined){
						message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Choose a section first",
						value: "We had to divide this shit to make it readable (-uz help [section])"
					},
					{
						name: "General Fun Stuff [fun]",
						value: "Fun commands that aren't necessarily arabfunny/worldfunny related"
					},
					{
						name: "Arabfunny/Worldfunny [arab, world]",
						value: "Funny commands originally intended for arabfunny/worldfunny"
					},
					{
						name: "Other [other]",
						value: "Other misc. commands"
					},
					{
						name: "Economy",
						value: "Coming soon..."
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: I love you"
						}
						}});
			}
			else if (args[0] == "fun"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "General Fun Stuff",
						value: "epic funny command for all"
					},
					{
						name: "askallah [question (no limit)]",
						value: "Ask allah your important questions"
					},
					{
						name: "troll",
						value: "pull up a funny trollface"
					},
					{
						name: "danbull",
						value: "funny dan bull rapper song for gaming"
					},
					{
						name: "toby",
						value: "funny tobygames nugget in a biscuit song"
					},
					{
						name: "funnymeter [question (30 word limit)]",
						value: "ranks a funny on it's funnyness"
					},
					{
						name: "ironymeter [question (30 word limit)]",
						value: "use this to check if it's an irony or not"
					},
					{
						name: "stan",
						value: "create epic funny stani country"
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}
			else if (args[0] == "arab" || args[0] == "world"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Arabfunny/Worldfunny Stuff",
						value: "funny arabic command"
					},
					{
						name: "title [number of words (up to 30)] [language]",
						value: "Generate a funny title for arab something else that is not arab" +"\n"+ "EXAMPLE: -uz title 20 ru"
					},
					{
						name: "movie",
						value: "funny movie for cinemas"
					},
					{
						name: "tv",
						value: "go through baba's vcr recordings"
					},
					{
						name: "funny",
						value: "funny lol random XD source for arabfunny video"
					},
					{
						name: "music",
						value: "songs for dance at UN meeting"
					},
					{
						name: "darius72",
						value: "kys okbr whojew newfag"
					},
					{
						name: "arabfunny",
						value: "funny arabfunny comedy post best sub"
					},
					{
						name: "worldfunny",
						value: "arabfunny but the whole world bro very comedy 10/10"
					},
					{
						name: "hamood",
						value: "hamood habibi hamood hamood habibi"
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}else if (args[0] == "other"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Other Stuff",
						value: "idk what this is"
					},
					{
						name: "bruh",
						value: "bruh moment",
					},
					{
						name: "maketoast",
						value: "toast for dinner"
					},
					{
						name: "info",
						value: "new updates and new for arab"
					},
					{
						name: "help",
						value: "for zion who don't know"
					},
					{
						name: "invite",
						value: "free uzbot 4 u server"
					},
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}
}