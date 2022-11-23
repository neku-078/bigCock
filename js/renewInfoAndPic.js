function slide(num)
{
    var photo = document.getElementById("slidePhoto");
	var intro1 = document.getElementById("slideIntro1");
	var intro2 = document.getElementById("slideIntro2");
	var body = document.getElementById("background");
	
    if (num == "1"){
        photo.src = "images/baseWine/vodka.png";
		intro1.innerHTML = "伏特加的酒精濃度約在35%~50%，但是現在常見的濃度幾乎都是40%，因為在19世紀末蘇俄的末代皇帝尼古拉二世見貴族與大臣們特愛喝酒，於是以健康為由，將伏特加的濃度限制在40%所造成的。<br><br>伏特加在六大基酒中，可以說是始祖，也是歷史上最早出現的蒸餾酒，但在身世上總是飽受存疑。比較可信的起源是在12世紀左右的俄羅斯，受到煉金術的影響，發現了蒸餾酒的方式後，提煉出了有著禦寒功效的生命之水，漸漸的在寒冷的俄羅斯受到歡迎。";
		intro2.innerHTML = "酒精含量：35%～50%<br>發源地：俄羅斯和波蘭<br>製造方式：蒸餾(三重蒸餾)<br>經典調酒：螺絲起子、血腥瑪莉、vodkalime<br>推薦品牌：ABSOLUT VODKA、Grey Goose、Belvedere Vodka";
	
	} else if (num == "2"){
        photo.src = "images/baseWine/gin.png";
		intro1.innerHTML = "琴酒通常被稱為六大基酒之首，大多利用杜松子作為原料下去發酵蒸餾而成，透明無色略帶點果香氣，又常被稱為杜松子酒，帶有類似薄荷草的風味是它的特色。<br><br>琴酒在六大基酒中，是最晚出現的一種，但卻能闖出一片天其實都要歸功於當時美國的禁酒令。早期的琴酒是拿來作為藥物使用的，所以在1920年美國開始禁酒令時，作為醫藥用品、無色又便宜的琴酒就被大量拿來當調酒的基底，進而紅遍世界，在酒界裡琴酒都有這種說法：「荷蘭人誕生了琴酒，英國人精煉了琴酒，美國人則賦予琴酒榮耀」。";
		intro2.innerHTML = "酒精含量：40%～50%<br>發源地：荷蘭<br>製造方式：發酵與蒸餾<br>經典調酒：Gin Tonic、馬丁尼、白色佳人<br>推薦品牌：Beefeaters、Bombay、Hendrick’s Gin";
	} else if (num == "3"){
        photo.src = "images/baseWine/rum.png";
		intro1.innerHTML = "蘭姆酒，又稱朗姆酒(不是萊姆酒)，是以甘蔗做為主原料，經過搾出的甘蔗汁熬煮，分離出蔗糖的結晶，再利用剩下的蜜糖用水稀釋、醱酵、蒸餾而成。完成後的酒會放在橡木桶裡放置數年等待熟成，成為真正的蘭姆酒。<br><br>蘭姆酒最著名的傳說莫過於海軍中將Horatio Nelson(霍雷肖·納爾遜)，在特拉法加戰役中，納爾遜將軍不幸中彈身亡，而船上沒有棺材，又加上需要防腐劑，於是就將他的遺體放進蘭姆酒桶裡。因為這個原因，蘭姆酒也被稱為「納爾遜之血」。";
		intro2.innerHTML = "酒精含量：35%～40%<br>發源地：加勒比地區<br>製造方式：發酵與蒸餾<br>經典調酒：Mojito、自由古巴、Daiquiri<br>推薦品牌：Bacardi、Captain Morgan、Havana Club";
    } else if (num == "4"){
        photo.src = "images/baseWine/whiskey.png";
		intro1.innerHTML = "威士忌是一種以發酵穀物製成的蒸餾酒精飲料。不同種類的穀物能夠製成不同種類的威士忌，像是：大麥、黑麥、小麥、玉米。威士忌通常於木桶中陳放，這些木桶的材質大多為北美白橡。<br><br>威士忌是一個種類繁多，隨著酒齡影響而變化極大的蒸餾酒，也是六大基酒中最複雜的烈酒，通常威士忌的分類依照原物料作為分類，分類如下：單一純麥、單一桶、調和純麥、調和、單一穀物。";
		intro2.innerHTML = "酒精含量：40%～60%<br>發源地：蘇格蘭<br>製造方式：蒸餾<br>經典調酒：Old Fashioned、Manhattan、Highball<br>推薦品牌：Johnnie Walker、The Macallan、The Singleton";
    } else if (num == "5"){
		photo.src = "images/baseWine/brandy.png";
        intro1.innerHTML = "白蘭地是一種以水果酒為基底，加以蒸餾製成的酒。一般的不加任何前綴的白蘭地指的是葡萄酒的蒸餾酒；而其他白蘭地則需要名稱前面加上該基底酒的水果名稱，例如：酪梨白蘭地、白桃白蘭地、草莓白蘭地及歐李白蘭地等。<br><br>白蘭地的分類有很多種，基本上依照年份(VSOP(4年)、XO-(大於6年))、地區(干邑、雅文邑)、原料區分(葡萄、渣釀)。";
		intro2.innerHTML = "酒精含量：40%<br>發源地：荷蘭<br>製造方式：水果酒蒸餾<br>經典調酒：側車、老廣場、床笫之間<br>推薦品牌：Hennessy、Remy Martin、Martell";
    } else if (num == "6"){
		photo.src = "images/baseWine/tequila.png";
        intro1.innerHTML = "龍舌蘭酒，又稱為特基拉。原料是墨西哥特有植物，長得像蘆薈的多肉植物：「龍舌蘭草」的心(植物的鱗莖)製造而成蒸餾酒！龍舌蘭草又被當地原住名視為神給予人們的恩賜。其煙燻味是龍舌蘭酒的特色！<br><br>在西班牙佔領墨西哥前，墨西哥人便會用龍舌蘭的汁液去發酵成酒類飲品，稱為Pulque。16世紀，西班牙入侵中南美洲，並將蒸餾技術帶入墨西哥，便出現龍舌蘭蒸餾酒Mezcal。再到18世紀，墨西哥人發現藍色龍舌蘭（Blue Agave）更適合釀酒，於是便出現Mezcal的高階酒款——Tequila。";
		intro2.innerHTML = "酒精含量：38%～40%<br>發源地：墨西哥<br>製造方式：蒸餾<br>經典調酒：瑪格麗特、龍舌蘭日出、迪亞布羅<br>推薦品牌：Jose Cuervo、Don Julio、Patrón";
    } else if (num == "7"){
		intro1.innerHTML = "萬年不敗的經典伏特加調酒”Vodka Lime”，只要去酒吧或夜店都一定點得到，其實它的作法也相當單純，只需將伏特加與萊姆汁按照2：1的比例調製，再以「鹽口杯」盛裝就行了。（補充：【鹽口杯作法】使用大杯口的玻璃杯，用切片檸檬繞過杯緣，再將杯子倒蓋在鋪滿鹽巴的碟子上，就大功告成了）";
		intro2.innerHTML = "酒譜：<br>伏特加 30ml<br>萊姆汁 15ml<br><br>酒精濃度：20%～30%<br><br>做法：伏特加＋萊姆汁（青檸檬），然後鹽杯，用啜飲的方式。";
		body.style.backgroundImage='url(images/cocktail/vodkaLime.jpg)';
	} else if (num == "8"){
		intro1.innerHTML = "有著女性時尚雜誌名稱的「柯夢波丹」，正如其名，其粉紅色澤也是相當受女孩的歡迎，有著甜美的味道與紅豔的外貌，似乎講述著極富魅力的女性一般，雖然有蔓越莓、檸檬帶出其酸甜，畢竟是40度烈酒的伏特加和橙酒混喝，後勁還蠻強的，女生一口乾可能很快就暈了。如果不擅長喝酒的話，可以要求蔓越莓汁比例多一些喔！";
		intro2.innerHTML = "酒譜：<br>伏特加 45 ml<br>君度橙酒 15 ml<br>萊姆汁 15 ml<br>蔓越莓汁 30 ml<br><br>酒精濃度：10%～15%<br><br>做法：柯夢波丹使用搖盪法調製，再倒入高腳杯中即可。裝飾可以使用檸檬皮，並噴附皮油。";
		body.style.backgroundImage='url(images/cocktail/cosmopolitan.jpg)';
	} else if (num == "9"){
		intro1.innerHTML = "這杯雞尾酒之所以會被稱之為海風，更是因為它的風味清爽，猶如身在海邊吹上一拂涼爽的微風。1995年的電影「情定巴黎」(French Kiss)的主角梅格˙萊恩(Meg Ryan)在法國海邊吹著微風時，喝的就是這一款雞尾酒。";
		intro2.innerHTML = "酒譜：<br>伏特加 40 ml<br>蔓越莓汁 120 ml<br>葡萄柚汁 30 ml<br><br>酒精濃度：10%～15%<br><br>做法：使用直調法調製，也就是將所有材料加入杯中，與冰塊一起攪拌，是相當簡易的調法。";
		body.style.backgroundImage='url(images/cocktail/seaBreeze.jpg)';
	} else if (num == "10"){
		intro1.innerHTML = "琴通寧是很受歡迎的調酒，材料與作法也相當簡單，只要混合琴酒與通寧水，再加入檸檬片即可，不過，有人認為像琴通寧這樣材料與作法越簡單的調酒，越能顯現調製者的技術。";
		intro2.innerHTML = "酒譜：<br>琴酒 45 ml<br>通寧水 100 ml<br><br>酒精濃度：10%～15%<br><br>做法：將琴酒倒入裝滿冰塊的杯中，然後加入通寧水輕輕攪拌，將檸檬片放入杯中或掛於杯緣，放入吸管與攪拌棒即可飲用。";
		body.style.backgroundImage='url(images/cocktail/ginTonic.jpg)';
	} else {
	    intro1.innerHTML = "";
        intro2.innerHTML = "";
	}

	
	intro1.classList.remove('fadeIn');
	intro2.classList.remove('fadeIn');
	void intro1.offsetWidth;
	void intro2.offsetWidth;
	intro1.classList.add('fadeIn');
	intro2.classList.add('fadeIn');
	
	photo.classList.remove('bounceIn');
	void photo.offsetWidth;
	photo.classList.add('bounceIn');
}