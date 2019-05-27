const Discord = require("discord.js");
const client = new Discord.Client();

var toby = ["https://www.youtube.com/watch?v=zzKFbUxYJys", "https://www.youtube.com/watch?v=eN7dYDYfvVg", "https://www.youtube.com/watch?v=uVTfszppJl8", "https://www.youtube.com/watch?v=kKrtbUinWOU",
"https://www.youtube.com/watch?v=Mmdc9RIhmOI", "https://www.youtube.com/watch?v=WteF0j5gYGk", "https://www.youtube.com/watch?v=upxzaVMhw8k", "https://www.youtube.com/watch?v=wmxUMcqGGTw",
"https://www.youtube.com/watch?v=6TXWzlT02_s", "https://www.youtube.com/watch?v=K0zyjs3i76s", "https://www.youtube.com/watch?v=yxH0r2Z8ce4", "https://www.youtube.com/watch?v=pfsRxTjNGvo",
"https://www.youtube.com/watch?v=XkdJIct_LdM", "https://www.youtube.com/watch?v=G4_T1g_CR9k", "https://www.youtube.com/watch?v=leSvUKji4CE", "https://www.youtube.com/watch?v=PG2w6N6GCsU",
"https://www.youtube.com/watch?v=ba14uJFvqMs", "https://www.youtube.com/watch?v=Q1pfDquA65c", "https://www.youtube.com/watch?v=5RFxUrNcZ1Q", "https://www.youtube.com/watch?v=RjAar9pRxRw"];

module.exports.run = async (client, message, args) => {
        var minimum = 0;
		var maximum = hamood.length - 1;
		var tobyInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("tobuscus adventures #" + tobyInt);
        message.channel.send("chicken nugger biscuit nugget in a biscuit " + "\n" + toby[tobyInt]);
}