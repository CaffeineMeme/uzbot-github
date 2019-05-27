const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
            var minimum = 0;
			var maximum = 100;
			fetch("https://www.reddit.com/r/arabfunny/new.json?limit=100")
  			.then(response => response.json())
  			.then(response => {
			var arabInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			console.log(arabInt);
    			console.log("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
			message.channel.send("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
  			});
}