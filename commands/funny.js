const Discord = require("discord.js");
const client = new Discord.Client();

var funnyVid = ["https://www.youtube.com/watch?v=8PADgvHeRjk", "https://twitter.com/xoxiok/status/1104619107792576512?s=20", "https://www.youtube.com/watch?v=YCvuCbRsU2Q", "https://www.youtube.com/watch?v=-VZYdogoZvs",
"https://www.youtube.com/watch?v=aFu6BGIfllY", "https://www.youtube.com/watch?v=GpWPsWKJCGw", "https://youtu.be/fGGJeYoYpyQ", "https://youtu.be/2MIHpf3_TzE", "https://youtu.be/gyhJBoWAoyY",
"https://www.instagram.com/p/Bw4WMsXAZ6L/?utm_source=ig_web_copy_link", "https://www.instagram.com/p/Bw334rVnqlM/?utm_source=ig_web_copy_link", "https://www.youtube.com/watch?v=n3I5I0bGxDA",
"https://youtu.be/biUwIqFr4FM", "https://youtu.be/vnp3db8WEZc", "https://cdn.discordapp.com/attachments/560788290551152643/572127941534810216/video37.mov", "https://cdn.discordapp.com/attachments/560788290551152643/572127941534810216/video37.mov",
"https://www.youtube.com/watch?v=WzWV4i6ay10", "https://cdn.discordapp.com/attachments/560788290551152643/571807554141814804/59426289_429270874568340_8887420796008637510_n.mp4", "https://cdn.discordapp.com/attachments/560788290551152643/571696392150712341/59242760_2263847233882280_6883723971414458368_n.mp4",
"https://www.youtube.com/watch?v=d73h1_6nP9U", "https://cdn.discordapp.com/attachments/560788290551152643/571378264237670419/videoplayback_17.mp4", "https://www.dropbox.com/s/k80n3ln5mx0pqx6/random%20sfx%20pack.rar?dl=0", "https://youtu.be/1ToEp4x1FOA",
"https://youtu.be/F5sHI5bjDbU", "https://youtu.be/bWTSJfbqVGU", "https://www.youtube.com/watch?v=AHLCBcGSkMs", "https://www.youtube.com/watch?v=EBsBafZan5M", "https://www.youtube.com/watch?v=YCvuCbRsU2Q",
"https://www.youtube.com/watch?v=qw-tfv48UyA", "https://youtu.be/ZdXpHhR6o4w", "https://youtu.be/O6sPMBRO2d4", "https://youtu.be/tbqieBm--0I", "https://twitter.com/RakanRui/status/1119850812577058816?s=09",
"https://youtu.be/hOnqmWNJ150", "https://www.youtube.com/watch?v=9yDoOzvI3Xc", "https://www.youtube.com/watch?v=HIDi07qQNZk", "https://youtu.be/iJCO5v2Lli8", "https://youtu.be/Nqj0qivLJb8", 
"https://www.youtube.com/watch?v=Xrwy4bNg9Ho", "https://youtu.be/F5ysnt-Bycs", "https://www.youtube.com/watch?v=nUHKOgHgQc4", "https://www.youtube.com/watch?v=bTK2W4b51d8", "https://www.youtube.com/watch?v=kJQctr94leU"];

module.exports.run = async (client, message, args) => {
            var minimum = 0;
		    var maximum = funnyVid.length - 1;
		    var funnyInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		    console.log("source vid number " + funnyInt);
            message.channel.send("i find this in funny vines compilation 2010 " + "\n" + funnyVid[funnyInt]);
}