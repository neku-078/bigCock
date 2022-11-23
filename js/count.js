var times = 0;
var text = "SELECT * FROM wine where name = ";
function count(item){
    if (times < 8) {
        var id = document.getElementById(item.id);
        var num = parseInt(id.getElementsByTagName("span").count.textContent);
        var name = id.getElementsByTagName("p").wineName.textContent;
        num++;
        id.getElementsByTagName("span").count.innerHTML = num;

        var record = document.getElementById("record");

        
        if (times > 0) {
            text += " OR name = ";
        }

        text += "\"" + name + "\"";
        times++;
        record.innerHTML = text;
    }
}