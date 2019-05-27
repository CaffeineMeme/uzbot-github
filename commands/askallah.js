const Discord = require("discord.js");
const client = new Discord.Client();

var responses = ["Yes", "No", "Maybe", "Ask Allah Later", "Ask Muhammed Instead", "Go Away", "Probably", "If You Believe in Allah, It Will Happen", "Probably", "Hopefully", "Eventually",
"Please Refer to Quran", "Are you Zionist?", "You stupit", "Allah does not consent", "Allah likes this", "Allah approved", "Possibly", "Insert 25c to Continue", "I don't feel like it",
"Stop being degenerate, Allah doesn't like.", "Shut up", "Try Harder", "Free Palestine", "Ask Saudi Prince", "It'll happen soon", "Allah is angry, try later", "You are infidel",
"nigga", "bruh", "Stop reading bible", "You will be beheaded", "Ask goat", "Women cannot ask", "I want an offering first", "Hell yeah nigga", "dude that's haram", "Yeah", "Nah",
"Yes bro", "It's happening", "Wish granted by Allah", "Allah is busy", "The Quran agrees", "I will answer you at the Kaaba", "Pray to Allah, and it will be so", "Allah sees you haven't prayed",
"Read the Quran first, then ask again", "Will Smith Allah", "Definitely", "Absolutely", "Mohammed disagrees with you, and I do too", "Mohammed and I agree on this", "Fuck you", "I don't speak who"];

module.exports.run = async (client, message, args) => {
            var minimum = 0;
            var maximum = responses.length;
            var responseInt;
			if(args[0] === null || args[0] === undefined)
			{
				message.channel.send("You need to ask a question, stupit");
			}else if(args[0] != undefined){
				responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
				console.log("i am allah i say response " + responseInt);
				message.channel.send("**Allah says: **" + "\n" + responses[responseInt]);
			}
}