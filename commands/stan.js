const Discord = require("discord.js");
const client = new Discord.Client();

var stan = ["uz", "af", "ka", "ta", "pa", "ir", "kyr", "turk", "ghan", "zakh", "ijiki", "meni", "gyz", "ki", "ha", 
	    "ya", "hindu", "urdu", "leha", "huna", "hir", "vat", "serbe", "dage", "gole", "bal", "ochi", "lore", 
	    "bash", "kor", "oto", "tar", "gil", "git", "si", "kara", "kal", "pak", "gobu", "nuri", "dzor", "bu", "elbi",
	    "sha", "hri", "arabi", "gor", "je", "kohi", "lez", "gi", "qa", "baili", "za", "buli", "kabuli", "dard", "ban", "tu",
	    "who", "balti", "ghar", "balor", "as", "ore", "dihi", "fr", "ang", "bay", "nig", "wa", "zir"];

module.exports.run = async (client, message, args) => {
    
                var completeTitle = "";
				var title = [];
    			var min = 3;
				var max = 25;
				var min1 = 1;
                var max1 = 10;
                var stanInt;
				var stanInt2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
				for (i = 0; i < stanInt2;){
				stanInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(stan[stanInt]);
			 	console.log(title);
			 	i++;
				}
				title.push("stan");
				completeTitle = title.join("");
				completeTitle =  completeTitle.charAt(0).toUpperCase() + completeTitle.slice(1);
				message.channel.send(completeTitle);
				console.log(completeTitle);
}