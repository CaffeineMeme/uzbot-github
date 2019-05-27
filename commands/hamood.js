const Discord = require("discord.js");
const client = new Discord.Client();

var hamood = ["https://www.youtube.com/watch?v=PQeD0VA7UA0", "https://www.youtube.com/watch?v=u8LPD6W0PZw", "https://www.youtube.com/watch?v=u8LPD6W0PZw", "https://www.youtube.com/watch?v=5xngr3SwjJw",
"https://www.youtube.com/watch?v=zwrIOsmu184", "https://www.youtube.com/watch?v=2r9pqf7OMCM", "https://www.youtube.com/watch?v=Ks7vGHSI9yM", "https://www.youtube.com/watch?v=MxpUvqdffZs",
"https://www.youtube.com/watch?v=nHthkNZQjbU", "https://www.youtube.com/watch?v=QrgXFdgaz6Y", "https://www.youtube.com/watch?v=Rp6a6GfDjlU"];

module.exports.run = async (client, message, args) => {
        var minimum = 0;
		var maximum = hamood.length - 1;
		var hamoodInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + hamoodInt);
        message.channel.send("hamood funny lol 2019 240p arabic animation " + "\n" + hamood[hamoodInt]);
}