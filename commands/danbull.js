const Discord = require("discord.js");
const client = new Discord.Client();

var danbull = ["https://www.youtube.com/watch?v=h_wUdzVZD3o", "https://www.youtube.com/watch?v=8slWBUSdGBE", "https://www.youtube.com/watch?v=Pa5Ti_tR0hE", "https://www.youtube.com/watch?v=szXAh0fDnrA",
"https://www.youtube.com/watch?v=rkfVkC_Xprk", "https://www.youtube.com/watch?v=ZZujisNZuw0", "https://www.youtube.com/watch?v=ZZujisNZuw0", "https://www.youtube.com/watch?v=vZG_s7eHrGc",
"https://www.youtube.com/watch?v=5237hmNkCms", "https://www.youtube.com/watch?v=tY0a-d67drE", "https://www.youtube.com/watch?v=Y_xhwcO31Fo", "https://www.youtube.com/watch?v=y1K818C7wm4",
"https://www.youtube.com/watch?v=OEUSl96MkoY", "https://www.youtube.com/watch?v=p0DtB4GMUfA", "https://www.youtube.com/watch?v=9tm7TktS55Y", "https://www.youtube.com/watch?v=LkvlHE5QA-Y",
"https://www.youtube.com/watch?v=MqnnuvVSLqY", "https://www.youtube.com/watch?v=MqnnuvVSLqY", "https://www.youtube.com/watch?v=6cV_YnETtec", "https://www.youtube.com/watch?v=gKyTrLRJPnM",
"https://www.youtube.com/watch?v=w_a7_pygtNA", "https://www.youtube.com/watch?v=vvKUfY7neYw", "https://www.youtube.com/watch?v=v1o4l6SPS60", "https://www.youtube.com/watch?v=9hBKQwaHHwU"];

module.exports.run = async (client, message, args) => {
        var minimum = 0;
		var maximum = danbull.length - 1;
		var danInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("boom boom boom " + danInt);
        message.channel.send("Bro i found a good dan bull music " + "\n" + danbull[danInt]);
}
