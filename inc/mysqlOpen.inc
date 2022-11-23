<?php
    $link = mysqli_connect("localhost", "root", "tea.zhen9078") 
            or die("無法開啟<br/>");
    mysqli_select_db($link, "cocktail");
    mysqli_query($link, 'SET NAMES utf8'); 
?>