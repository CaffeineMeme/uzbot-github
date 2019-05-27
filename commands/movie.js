const Discord = require("discord.js");
const client = new Discord.Client();

var movie = ["LWqUupcF7A0", "uwrNwd0_Ug4", "o0G7FL93Hu4", "_TY6kJ3KfT4", "siWDiZhbBek", "7ZsGOyWWj6k", "VsewNIhWwJg", "wz4ewxLCTOE",
"XVccZkiyH-o", "y51ZNsBXpwg", "2R2zzdjfXl4", "XjIZCdWSA-I", "s28m79VkWYI", "eJ1du32NUV8", "mySnCk1uXUM", "dHRFwB_brrw", "e8si-7tY1VI",
"nof2KwWV32o", "Zp3K48ojImw", "DkuYJiyKbrQ", "ubBxPqCDFk4", "ubBxPqCDFk4", "O1MeI-S70Ag", "HbTf_dYogeg", "5QDKX5ExXqM", "K0cu4rZoTSw", 
"kwAtbc0rYZc", "Kf4hN9s1nic", "nJWuLqpSYqM", "Gl2s_DRtPDo", "Wbreg7yMxSk", "dUNHmyb6oVM", "VenkCoKuOxo", "ye5HlqJtYKA", "ZtrGw-oahDk", 
"P3-OklovCg0", "2rFcZ1xGbeU", "CR0UlM1y7do", "nkzbMcREj1s", "zB2uW7hFs1I", "l7E0kTvARsA", "3zxasmxPMro", "3M7g6DPUWK0", "Ssu2nOTMjYM",
"U6ITU1LHzvk", "mDmLJ8LHYTA", "E-Jx9yZugrg", "89vivDEChc", "WNh5LIwPKyk", "_azpWSFEL_Y", "GibI7qM0tYk", "Wz-vegualMg", "KEoGrbKAyKE",
"51dfpYSDz5M", "oOjCXIPpMeo", "N09ygrKKNJE", "fOdBtRzYf5Q", "Tumix4dDDKk", "sz0JhqCGqP0", "vIlJuP5ipH0", "BDFsrztIs8c", "6gggODjnI6Y",
"G2ZRuxCyapc", "nVNRUoLt7EI", "f0GtzlklbGI", "Uao5vyTpyzc"]; 

module.exports.run = async (client, message, args) => {
    var minimum = 0;
	var maximum = movie.length;
	var movieInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	console.log("bruh we watching movie number " + movieInt);
    message.channel.send("Baba, I have found a nice movie for us the in the VHS collection! " + "\n" + "https://www.youtube.com/watch?v=" + movie[movieInt]);
}