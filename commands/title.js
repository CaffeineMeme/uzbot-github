const Discord = require("discord.js");
const client = new Discord.Client();

var titleLength;
var words = ["nigga", "free", "HD", "sexy", "download", "fart", "cartoon", "funny", "vine", "instagram", "comedy",
"anime", "dub", "shawarma", "chipmunks", "song", "lol", "random", "porn", "troll", "trollface", "prank", "fortnite", "4K", 
, "obama", "nokia","lole", "emoji", "pubg", "install", "cheap", "rice", "hentai", "flash game", "online", "24/7", "turtle", "bruh", "penis",
	     "cringe", "bro", "buzzfeed", "popular", "movie", "English", "ringtone", 
"ring ring", "100%", "now", "George Bush", "apk", "mp4", "exe", "HQ", "no jailbreak", "telephone", "quran", "bible", "hack", "V-Bucks",
"Soundtrack", "spongebob", "annoying orange", "Dan Bull", "compilation", "4G", "3G", "4G LTE", "peter griffin", "ninja", "XXX", 
"epic", "cool", "full movie", "no scam", "divorce", "homo", "2016", "2020", "2019", "2012", "2091", "2003", "2010", "2017", "144p", "rap",
"tech support", "Darius72", "ape", "jahseh",  "Fallout 76", "jahcoin", "generate", "free key", "windows", "microsoft", "bruh moment", "lole", "NickGurr45", 
"toilet", "pornography", "240p", "installation", "gamer", "ape", "milk", "Chinese", "Wish.com", "21 you stupid", "oh nigga you gay",
"ironic", "irony", ".rar",  "jailbreak", "foreskin",
"goat", "banned", "legal", "illegal", "legit", "actually free", "real copy", "Kinemaster", "funny ape", "peanut", "homosexual", "accordion",
"ping", "nigga troll", "Free Shipping", "amazon prime", "best deal", "only $20", "epic", "clown", "who",
"musical", "songs", "full album", "frick", "niggas", "Ram Ranch Full Collection", "semen", "butthole", "nigga toilet", "insta", "facebook", "twitter",
"sub 4 sub", "like", "comment", "looooool", "mfw", "mfw (my face when)", "endgame", "Thanos",
"dies", "film", "iOS", "iPhone X",
"no spoilers", "review", "animated", "parody", "satire", "irony 100%", "shrek", ".avi", ".wav", ".jpg"];
var arab = ["رمضان","هندوستان", "أوباما", "باكستان", "سلحفاة فارسية", "ਮਾਈਕਰੋਸੌਫਟ", "ਭਾਰਤ", "ਮਜ਼ਾਕੀਆ", "ਨਿਗਲ", "ਧੱਫੜ", "harambe", "ਜੰਜੀਰ", "ਟੋਲ", "ਪੰਜਾਬੀ", "ਪਾਕਿਸਤਾਨ ਦੀ ਧੱਕੇ", "ਪਰਿਵਾਰ 420", 
"ਤਕਨੀਕੀ ਸਮਰਥਨ", "ਕਾਮੇਡੀ","ਵਾਇਰਸ", "ਕੰਪਿਊਟਰ", "ਮੁਫ਼ਤ ਡਾਊਨਲੋਡ", "ਵਿਸ਼ਨੂੰ", "ਉਰਦੂ", "ਓਬਾਮਾ",  "دعم تقني", "مضحك", "حرام", "قضيب","سعودي", "ضرطة", "نيغا", "براز الانسان", "إسرائيل", "بول", 
"نوكيا", "مغني الراب", "سودان", "الدوري العربي", "دين الاسلام", "الله", "مايكروسوفت", "صدام", "هههه", "هههههههه", "هههههههههههههههههههه", "الهند", "قطع رأسه", "ماعز",
 "برتقالى مزعج", "صهيوني", "البنجابية", "فلسطين حرة", "كوميديا", "مفعم بالحيوية", "كارتون كويتي", "هجاء", "سخرية", "البنجابية", "ايفون", "2000 ريال", "تأخير", "حرب", "ضرطة", 
 "الأمير السعودي", "القطري", "Afghan", "iran turtle", "the great punjabi comedy show", "Isrealis", "palestine", "Kurdistan", "Somaliland", "bangla", "delhi", "UAE", "sudan",
"hindustan", "iraq", "farsi", "amazon.co.in",  "ramadan", "hamood", "india", "arab", "Masameer", "Bangladesh", "Azerbaijan", "hindi",  "hindu",  "Turkmenistan", "Yemen", 
"Vimto", "allah", "kaaba", "block 13",  "arabia", "bangla", "delhi", "UAE",  "morocco",  "pakistan", "tajikistan",  "zionist", "punjabi", "saudi", "kuwaiti",  "tajikistan", "urdu",
"tajik", "مزاحیہ", "پاکستان", "بھارت شیطانی", "مدرس صالح", "الحمام", "انفجار", "twin tower", "saudi", "chant", "medicine", "stoning", "live ISIS stream", "yemen GDP",
	   "big iran moustache", "mudenseti", "nane", "zibade", "bruh turtle", "war song", "sad arabian", "arabian nights", "hookah", "ak47", "against islam",
	   "বিষ্ঠা", "baba", "alisha", "underage marriage", "marriage", "prearranged marriage", "beating", "sharia", "dark skin", "sun", "bahrian", "consent", 
	   "bangla", "palestinians", "lizard man israeli", "pray to allah", "hamood habibi", "nigga poop", "uzbekistan", "kyrgyz", "fake israel",
	   "fasting", "ramadan fast", "ramadan ape", "iran missile", "oil saudi", "$1 trillion saudi invest", "karim yakarim", "كريم وكريم",
	   "epic rap battles of allah", "stani", "arab squat toilet"]; 

var rus = ["vodka", "russia", "yugoslavia", "soviet", "putin", "vladmir", "iran deal", "водка", "СССР", "Stalin", "chernobyl", "ruble", "ukraina", "slav", "armenia", "azerbaijan",
	  "squat", "gopnik", "gulag", "internet closed", "Жопа", "adidas", "cold war", "missile", "nuclear bomb", "capitalist pig", "srbija", "USSR",
	  "comrade", "комраде", "ushanka", "russia winter", "ww2", "communism", "capitalist pig", "supply and demand", "mafia", "putin funny", "elect", "navalny", "kavkaz",
	  "georgia", "sakartvelo", "armenia genocide real", "azeri", "dardubala", "დარდუბალა", "ramishvili", "ass", "mail-order wife", "russian bombshell", "landmine border", "angry bear",
	  "putin riding bear", "KGB", "punch fag", "FSB", "smoke", "government", "russia hack", "hack sony", "gay", "ukraine", "belarus", "tajik ssr", "AYE", "drag race", "illegal", 
	  "putin vs isis", "bitcoin mine", "investment venezuela", "pachansky", "Zhmysheno", "gopnik vaping", "serb attack", "kill turk", "grandpa smash america ipad", "tarrif america", "rennk",
	  "winne the pooh", "russian dub", "russian edition", "iraq war", "mongolia is slav", "kazakhstan", "radioactive", "nuclear reactor explosion" ,"[REDACTED]", "смешной",
	  "туалет", "ниггер", "пердеть", "славянский", "хреновый трах", "Албания", "косово", "косово је србија", "тролл", "ტროლის სახე პრეზიდენტი", "არაყი", "მიხილ საკაშვილი", "ტუალეტი", "геиик", "путин",
	  "trade deal", ".ru", ".rs", "croatian ustashe", "karadzic", "drink water serb", "serb", "montenegro", "kill bosnia", "CS:GO", "minecraft russian hack", "mc khovanskiy", "free steam key", "only 20 ruble",
	  "steam key cheap", "cs:go knife", "free skin", "ak47", "kalashnikov", "iran", "banned game", "nintendo of russia", "largest country", "siberia", "snow", "village", "dagestan", "Bloodbath Kavkaz", "Bloodbath Kavkaz full download"];

var esp = ["ay ay ay", "quien", "no intiendo", "comedia", "negrito", "doritos gallo de pico", "100 pesos", "descuento", "africanos", "hermano", "puto", "chingate", "mexico", "guatemala", "caravan", "cocaina", "el chapo", "beheading video el chapo", "weed money", "mexico prison", "venezuela", "foreign aid",
	  "papi", "modelo", "television", "televisa", "funny el chavo", "el chavo animado", "pepsi vidrio", "alcolico", "chulo", "guey", "frijoles", "burrito guero", "guero", "video juego de nokia", "descargar gratis", "facebook espana", "jodate", "irmao", "bolsonaro", "brazil trump", "gratis", "compra barata",
	  "brasilia", "coffee bean country", "suicidio", "immigrantes", "immigrant", "america border", "we no pay for it", "mow lawns", "cheap mexican maid", "mexico sexi", "leche fresca", "chingate lol", "anime subtitulo espanol", "matematicas de caballo", "pelo de testiculos", "pito", "chichis", 
	   "leche de cabra de india", "culo", "coco", "loco", "fetiche de pies", "asqueroso", "escuela", "molho szechuan de rick e morti", "joto", "omosexual son feo", "mexico strong",
	  "venezuela embargo", "gran colombia", "colombia cocaine", "nicaragua", "nicauguan drug trade", "el savlador", "burning garbage", "pan dulce", "platano", "foda-te", "uruguay", "chile", "long country", "pedo",
	  "ecuador", "venezuela poop in hole", "bano lleno", "caca", "vaca", "islam in mexico", "baja california", "venzuela 2 president", "chingow", "calvo",
	  "risa", "lol espanol risas cool", "china", "viva espana", "ecuatorial guinea", "spanish africa", "nigga speak spanish", "lol poor niggas", "sudan del sur", "bombas", "cacahuates", "muy caro",
	  "espanol comedia", "endgame spanish dub", "callate", "chapulin colorado", "glass pepsi bottle", "latin america poor bro", "spanish nigga", "puerto rico", "hurrican reparations", 
	"domican republic", "nigga mexico", "muy gracioso", "salchipapa", "takis", "jalapeno", "retrasado", "relaciones de mexico y china", "quetzal", "aztec", "blood god", "bruh sacrifice", "nueva ropa", "obama presidente", "naranja molestia",
	  "republica dominicana", "dispierta america", "hugo chavez", "maduro venezuela", "parabrillas", "sonriete estas con cricket"];

var asia = ["fried rice", "cat", "china", "myanmar", "cambodia", "chicken", "mao", "free pirated movie", "tiananment square", "sex robot", "japan", "hentai", "anime", "jov", "jap", "ww2", "hiroshima", "nuke", "loas", "thailand", "trap" ,"vietnam", "vietnam war", "1989",
	   "bangladesh", "rohingya", "philippines", "singapore", "arrested for gum", "small penis", "korea", "best korea", "kpop", "live concert", "kim", "kim jong um", "us summit", "fuck united nations", "ching chong", "karaoke", "chinese dub", "sub", "japan dub", "anime dvd",
	   "yangon", "landmines on border", "panda express", "fortune cookie", "horoscope", "manicure", "trap", "cringe", "yuan value", "5000 yen", "animation studio", "slave labor", "child labor", "only 1 child", "eat children", "eternal life", "face cream", "chigga", "shampoo", 
	   "sanctions", "amelikan pig", "pronounce r", "china government", "glorious leader", "free with purchase", "cock and ball", "korean animate", "kid make tshirt", "eat cat", "fried dog", "free child", "child for sale", "china hooker", "love you long time", "thai trap", 
	   "toilet hole", "poop in hole", "shit on street", "amelika", "kim jong", "cambodia genocide", "滑稽", "史诗", "智障", "黑人", "米姆", "nothing happened", "天安门广场", "大街上的便便", "手机厂", "童工", "血汗工厂", "工作室", "below minimmum wage", "no job", "rice farm", "buffalo poop",
	   "水牛屎", "水牛屎", "大声笑", "xixixixi", "腾讯", "沙特", "黑鬼", "김정은", "tree", "viet tang", "검열", "권자", "염소", "똥", "공산주의", "영화", "一个孩子的法律", "缅甸", "小便和便便", "喜剧搞笑", "清冲", "天安门广场上没有任何事情发生", "烟雾", "铅中毒", "伟大的领袖", "洗头", "讽刺", 
	   "ရွှင်မြူးဘွယ်ဖြစ်သော", "ကြှဲ", "ဆန်လယ်ယာ", "ဆိတ်", "ကျပ်", "တရုတ်လိင်တံ", "ကုန်သွယ်ရေးစစ်ပွဲ", "ပြဇါတ်", "ရုပ်မြင်သံကြားပြပွဲ", "အပြည့်အဝရုပ်ရှင်ရုပ်ရှင်ရုံ", "ပြဇာတ်ရုံ", "အမေရိကတိုက်", "ကျွဲမစင်", "ဒီမိုကရေစီ", "masama ang gamot", "bluray factory", "age consent 13", "batas ng baril", "tito titi", "nakakatawa", 
	   "mga mahihirap na tao", "itim na tao", "ປະເທດກຳປູເຈຍ", "อินเทอร์เน็ต", "เกย์กับดัก", "ลาว gdp", "ดาวน์โหลดฟรี", "เกมจบภาพยนตร์ที่สมบูรณ์"];

var euro = ["immigrant", "sweden", "trans", "rape cases", "syria migrant", "euro", "brexit", "EU", "germany", "third reich", "nazi", "ww2", "axis power", "annex", "nazi reparations", "holocaust", "kill jew", "butterknife banned", "tv license", "article 13 funny politic", 
	    "romania", "transylvania is hungary", "finland", "danke", "frank", "france", "baguette", "wine", "smelly american", "armpit", "french", "hon hon", "ibradude ramadan", "open border", "dumb tourist nigga", "french bread", "garlic", "quebec is france", "dildo ice cream",
	   "76 gender", "swede", "pewdiepie", "gaming", "poland", "funny ball comic", "polandball lol xd", "sniff fart", "anschluss", "warsaw", "polska strong", "estonia", "azeri x russia", "netherlands", "europe weed smoke", "euro porn", "frankfurter", "turkey", "turkey is EU",
	   "dumb turkey lol", "sweden tranny child sad story", "USSR", "yugoslav", "anti-vax", "european union", "le", "transnistria", "moldova", "europoor", "lol ukraine", "yukaina", "eurofag", "darius", "romania lettuce funny pun"];
	    
var us = ["oil", "hamburger", "ronald mcdonald", "grilling", "beer", "alabama", "abortion", "redneck", "cousin", "incest", "tea", "1/32 native american", "orange man", "trump lol",
	 "libtard rekt", "broh", "getto", "nigga", "homo", "LGBT", "god hates fags", "alcoholism", "Jimmy Fallon", "comedian", "free movie ticket", "$3.99 on sale", "DVD bluray", "comcast",
	 "seinfeld", "funny movies", "gasoline", "car crash", "surgery", "nigga doctor", "bomb", "obama", "mobamba", "president", "clinton president girl", "rights", "burger king", "fish mcbite",
	 "may may", "meemee", "trump baby balloon", ".co.uk.", "import tax", "amazon prime best deal", "$$$", "scotland", "america", "american", "freedom", "cuck", "boomer", "doomer", "zoomer", "jew media", "zion control government",
	 "bomb pakistan", "iran missile deal", "kim jong un", "trump jong un", "north korea", "capitalism", "communist bad", "commie", "kill commie", "trade war", "britain", "illegal butterknife", "liscence", "police", "beating", "prison shower", "shower rape",
	 "hurricane", "puerto rico next state", "rated M", "bernie", "cartoon", "pistol", "school shooting", "funny monkey", "cringe baby", "landfill", "brit", "crisps", "bro", "football", "pigskin", "bacon", "wendy's burder funny twitter", "porno american", "big money",
	 "mcdonald employment", "call now", "free consultation", "youtube unblocker", "adblock", "lower class", "funny nigga ghetto", "vodka america", "pancake", "abraham lincoln", "omg george washington come alive???", "poop",
	 "shit on toilet", "lawnmower", "uwu", "california", "gold miner", "native maerican", "1/16 cherokee", "inbred", "crooked teeth", "highest GDP", "missile codes", "twitter", "amy scheumer funny", "comedy show", "live on tv", "informercial",
	 "syrup", "gay", "speak english", "english dub", "for free", "free download", "VPN", "advertisement", "best buy", "anti-vax", "autism", "vaccines", "soccer", "soccer mom", "funny divorce", "abortion fetus", "nigga fetus", "inter-racial penis"];

module.exports.run = async (client, message, args) => {
        var title = [];
		var completeTitle = "";
		var titleInt = 0;
		let titleLength = args[0];
		var lang = 0;
		var i = 0;
		var i2 = 0;
		console.log("the length of this string is: " + titleLength);
		if(args[0] === null || args[0] === undefined){
			 console.log("YOU FORGOT THE FUNNY!");
			 message.channel.send('YOU FORGOT THE FUNNY!');
		}else if(titleLength >= 31){
			message.channel.send("Yo that's kind of cringe, make it shorter");
		}else if(args[0] != undefined && args[1] === undefined){
			message.channel.send({embed: {
					color: 0x0099b5,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "You gotta choose a language from these choices",
					fields: [
						{
						name: "Available Options",
						value: "Arab (arab, arabic, ar)" + "\n" + "Russian/Slavic (ru, russian, slav)" + "\n" + "Asia (as, asia, asian)" + 
						"\n" + "Spanish (es, esp, spanish)" + "\n" + "Euro/European (eu, euro, european)"+ "\n" + "English (en, us, america)" + "\n" + "More coming soon maybe idk"
						},
					],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Allah doesn't like you if you eat during fasting"
						}
			}
			});
		}else if(args[1] === "ar" || args[1] === "arab" || args[1] === "arabic")
				{
				console.log(words.length);
				words = words.concat(arab);
				var min = 0;
				var max = words.length - 1;
				console.log("arabic had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (arab.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}else if(args[1] === "ru" || args[1] === "russian" || args[1] === "slav")
				{
				console.log(words.length);
				words = words.concat(rus);
				var min = 0;
				var max = words.length - 1;
				console.log("arabic had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (rus.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
			else if(args[1] === "en" || args[1] === "us" || args[1] === "american")
				{
				console.log(words.length);
				words = words.concat(us);
				var min = 0;
				var max = words.length - 1;
				console.log("english had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (us.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
			else if(args[1] === "as" || args[1] === "asia" || args[1] === "asian")
				{
				console.log(words.length);
				words = words.concat(asia);
				var min = 0;
				var max = words.length - 1;
				console.log("ching chong had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (asia.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
			else if(args[1] === "es" || args[1] === "esp" || args[1] === "spanish")
				{
				console.log(words.length);
				words = words.concat(esp);
				var min = 0;
				var max = words.length - 1;
				console.log("ching chong had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (esp.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
}