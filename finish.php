<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>調酒大師</title>
		<link href="css/menubar.css" type="text/css" rel="stylesheet"/>
        <link href="css/finish.css" type="text/css" rel="stylesheet"/>
    </head>

    <body>
        <?php
			require_once("inc/menubar.inc");

            require_once("inc/mysqlOpen.inc");
            $sql = $_POST["sqlText"];
            $result = mysqli_query($link, $sql);
            $total_records = mysqli_num_rows($result);
            $num = 100 / $total_records;
            $abv = 0;
            $subtitle = "";
            $warning = "";
            while ($item = mysqli_fetch_array($result, MYSQLI_NUM)) {
                $abv += $item[2] * $num;
            }

            if ($abv < 20) {
                $subtitle = "看來你是妹酒愛好者呢～下次可要喝更有挑戰性的酒才行呀！！";
                $warning = "即使是妹酒，酒精濃度再低，一樣都不能騎車開車ㄏㄚˋ，「喝車不開酒，開酒不喝車」才是至高無上的。";
            }
            else if ($abv < 40) {
                $subtitle = "酒精濃度還算正常，但飲用請記得要適量喔！！";
                $warning = "不要以為喝下去沒什麼事就肆無忌憚地喝呀，等一下後勁一起來，你就涼透了。";
            }
            else if ($abv < 60) {
                $subtitle = "哇～你也真敢喝，這種等級的我可是已經扛不住了......";
                $warning = "請注意身體安全，不要長年喝這種酒阿。阿餒欸怕派新ㄊㄟˋ嗚嗚嗚......";
            }
            else {
                $subtitle = "大神大神，小弟我甘拜下風，不曉得你是否還有力氣離開這個畫面......";
                $warning = "一路好走！！";
            }
            require_once("inc/mysqlClose.inc");
		?>
        <div class="text">
            <div>
                <h1 class="lightSpeedIn">你的酒調好囉！</h1>
                <h2 class="fadeInUp"><?php echo $subtitle; ?></h2>
                <hr>
                <p class="flipIn">酒精濃度：<?php echo number_format($abv, 2); ?>%</p>
                <p class="flipIn">注意事項：<?php echo $warning; ?></p>
                <img src="images\gameObject\warning.png" class="fadeIn">
            </div>
            <a href="game.php" class="fadeIn">* 回到調酒大師 *</a>
        </div>
    </body>
</html>