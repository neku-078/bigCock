<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>六大基酒</title>
        <link href="css/menubar.css" type="text/css" rel="stylesheet"/>
		<link href="css/baseWine.css" type="text/css" rel="stylesheet"/>
		<style>.type ul li{padding: 20px 5px;}</style>
		<script src="js/renewInfoAndPic.js"></script>
    </head>

    <body>
		<?php
			require_once("inc/menubar.inc");
		?>
		<div class="type">
			<ul style="text-align: center">
				<li><a href='javascript:slide(1)'>伏特加&nbsp;&nbsp;Vodka</a></li>
				<li><a href='javascript:slide(2)'>琴酒&nbsp;&nbsp;Gin</a></li>
				<li><a href='javascript:slide(3)'>蘭姆酒&nbsp;&nbsp;Rum</a></li>
				<li><a href='javascript:slide(4)'>威士忌&nbsp;&nbsp;Whiskey</a></li>
				<li><a href='javascript:slide(5)'>白蘭地&nbsp;&nbsp;Brandy</a></li>
				<li><a href='javascript:slide(6)'>龍舌蘭&nbsp;&nbsp;Tequila</a></li>
			</ul>
		</div>

		<div class="intro fadeIn" id="intro1">
			<p id="slideIntro1">伏特加的酒精濃度約在35%~50%，但是現在常見的濃度幾乎都是40%，因為在19世紀末蘇俄的末代皇帝尼古拉二世見貴族與大臣們特愛喝酒，於是以健康為由，將伏特加的濃度限制在40%所造成的。<br><br>伏特加在六大基酒中，可以說是始祖，也是歷史上最早出現的蒸餾酒，但在身世上總是飽受存疑。比較可信的起源是在12世紀左右的俄羅斯，受到煉金術的影響，發現了蒸餾酒的方式後，提煉出了有著禦寒功效的生命之水，漸漸的在寒冷的俄羅斯受到歡迎。</p>
		</div>
		
		<div class="photo bounceIn" id="photo">
			<img id="slidePhoto" src="images/baseWine/vodka.png">
		</div>
		
		<div class="introInfo fadeIn" id="intro2">
			<p id="slideIntro2">酒精含量：35%～50%<br>發源地：俄羅斯和波蘭<br>製造方式：蒸餾(三重蒸餾)<br>經典調酒：螺絲起子、血腥瑪莉、vodkalime<br>推薦品牌：ABSOLUT VODKA、Grey Goose、Belvedere Vodka</p>
		</div>
	</body>
</html>