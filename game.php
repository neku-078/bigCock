<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>調酒大師</title>
		<link href="css/menubar.css" type="text/css" rel="stylesheet"/>
        <link href="css/game.css" type="text/css" rel="stylesheet"/>
		<script src="js/count.js"></script>
    </head>

    <body>
        <?php
			require_once("inc/menubar.inc");
		?>
        <div class="wine">
			<?php
                require_once("inc/mysqlOpen.inc");

                $sql = "SELECT * FROM wine";
                $result = mysqli_query($link, $sql);
                $totalRecords = mysqli_num_rows($result);

                for ($i = 0; $i < $totalRecords - 2; $i++) {
                    $item = mysqli_fetch_array($result, MYSQLI_ASSOC);
                    echo'<div class="item jackInTheBox" id="item_' . $item['id'] . '" tag="0" onclick="count(this)" style="background-image: url(\'./images/gameObject/item/item_' . $item['id'] . '.png\')">' . 
                            '<p id="wineName">' . $item['name'] . '</p>' .
                            '<span id="count">0</span>' . 
                        '</div>';
                }
            ?>
        </div>

        <div class="workbench">
            <div class="ingredients">
                <?php
                    for ($i = 0; $i < 2; $i++) {
                        $item = mysqli_fetch_array($result, MYSQLI_ASSOC);
                        echo'<div class="item jackInTheBox" id="item_' . $item['id'] . '" tag="0" onclick="count(this)" style="background-image: url(\'./images/gameObject/item/item_' . $item['id'] . '.png\')">' . 
                                '<p id="wineName">' . $item['name'] . '</p>' .
                                '<span id="count">0</span>' . 
                            '</div>';
                    }
                    require_once("inc/mysqlClose.inc");
                ?>
            </div>
            
            <form class="shake fadeIn shake-vertical" action="finish.php" method="POST">
                <textarea class="record" id="record" name="sqlText" rows="1" cols="100"></textarea>
                <input type="submit" value=""/>
            </form>
        </div>
    </body>
</html>