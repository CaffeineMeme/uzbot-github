const Discord = require("discord.js");
const client = new Discord.Client();

var tv = ["https://www.youtube.com/watch?v=4xEH43Dmm4I", "https://www.youtube.com/watch?v=73Yfuu9Nmjw", "https://www.youtube.com/watch?v=ZiKaFiikhL8", "https://www.youtube.com/watch?v=oWLwsIXPN8o",
"https://www.youtube.com/watch?v=gMmjuVtNlBk", "https://www.youtube.com/watch?v=BX5IeuLlovc", "https://www.youtube.com/watch?v=9jstuGMumK0", "https://www.youtube.com/watch?v=vU5dU8upwwE",
"https://www.youtube.com/watch?v=UJtahHyWx2U", "https://www.youtube.com/watch?v=-lg5YjLdQ5E", "https://www.youtube.com/watch?v=LykyDhERSEU", "https://www.youtube.com/watch?v=wc2sHygF40k",
"https://www.youtube.com/watch?v=E1o8SYZcvgs", "https://www.youtube.com/watch?v=7u_h2pyaeu8", "https://www.youtube.com/watch?v=L0nQCRmDaQw", "https://www.youtube.com/watch?v=_2Ydlhkm_0s",
"https://www.youtube.com/watch?v=oahsGcq_x-g", "https://www.youtube.com/watch?v=a67t_kv5TCc", "https://www.youtube.com/watch?v=lTecJA4W5EE", "https://www.youtube.com/watch?v=VOICuaneyVM",
"https://www.youtube.com/watch?v=AiZKTvyJz3U", "https://www.youtube.com/watch?v=ziWRBhXV8Sw", "https://www.youtube.com/watch?v=M-9qxhuoD0Q", "https://www.youtube.com/watch?v=D2_rvOfblKc", 
"https://www.youtube.com/watch?v=C9iLXPwttqA", "https://www.youtube.com/watch?v=uSz69zaHwwo", "https://www.youtube.com/watch?v=xVPNvUzHRT8", "https://www.youtube.com/watch?v=PHrIbQaoEjs",
"https://www.youtube.com/watch?v=lYHotmmuarg", "https://www.youtube.com/watch?v=TCuyQU3Uy3Y", "https://www.youtube.com/watch?v=Vc7xaa3WeZQ", "https://www.youtube.com/watch?v=yhjT0CkQ-gc",
"https://www.youtube.com/watch?v=j3p1bV45lZ0", "https://www.youtube.com/watch?v=Rx9d7Pj4qlc", "https://www.youtube.com/watch?v=vlWtSGEeXe0", "https://www.youtube.com/watch?v=wDYpplZEgBk",
"https://www.youtube.com/watch?v=tuMDMF-1-HE", "https://www.youtube.com/watch?v=RMU-_r9GilY", "https://www.youtube.com/watch?v=dLxq9pcNnFE", "https://www.youtube.com/watch?v=Bd2AdASx63c",
"https://www.youtube.com/watch?v=xlavcSONoDw", "https://www.youtube.com/watch?v=-HTFvI63ggI", "https://www.youtube.com/watch?v=amfxTI5-xPQ", "https://www.youtube.com/watch?v=dVSG1W04fq8",
"https://www.youtube.com/watch?v=y02sp2EtB74", "https://www.youtube.com/watch?v=XrabmKgGS9k", "https://www.youtube.com/watch?v=U86R5IqPTlk", "https://www.youtube.com/watch?v=LgdiG_lUfA4",
"https://www.youtube.com/watch?v=eM-JCphjM_M", "https://www.youtube.com/watch?v=v4_QB-_w80k"];

module.exports.run = async (client, message, args) => {
            var minimum = 0;
		    var maximum = tv.length - 1;
		    var tvInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		    console.log("arab tv channel #" + tvInt);
            message.channel.send("Finally, some good shit's on TV " + "\n" + tv[tvInt]);
}