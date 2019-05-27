const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
        var dariusInt;
        var darius = ["kys", "who", "literally who", "jew", "nigger", "whojew", "retard", "okbr", "fag", "obkrfag", "whofag", "newwho", 
	    "clown", "speak up", "i don't speak who", "what are you saying", "who clown", "newfag", "i don't speak who", "i don't understand",
	    "soy face", "kill yourself", "autist", "NIGGER", "cuck", "trolled", "owned", "ez", "lol", "dumbass", "clown nigger", "loli", "hentai",
	    "ew", "who?", "?", "stupid"];
        var completeTitle;
        var title;
                completeTitle = "";
				title = [];
    			var min = 0;
				var max = darius.length;
				var min1 = 1;
				var max1 = 10;
				var dariusInt2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
				for (i = 0; i < dariusInt2;){
				dariusInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(darius[dariusInt]);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				message.channel.send(completeTitle);
				console.log(completeTitle);
}