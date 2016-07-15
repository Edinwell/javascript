/**
 * 画面上の画像をカーソルキーで移動
 */

var x = 219;
var y = 285;
var pv = 20;

var img = document.createElement("img");
img.src = "./img/ys_susi01.jpg";
img.style = "position:absolute;top:" + y + "px;left:" + x + "px;"
img.id = "susi";

document.body.appendChild(img);

function keydown(e) {

	if(e.keyCode == 37) {
		x = x - pv;
	}

	if(e.keyCode == 38) {
		y = y - pv;
	}

	if(e.keyCode == 39) {
		x = x + pv;
	}

	if(e.keyCode == 40) {
		y = y + pv;
	}
	
	var displayImg = document.getElementById("susi");
	displayImg.style.top = y + "px";
	displayImg.style.left = x + "px";
}

if(document.addEventListener){
	document.addEventListener("keydown", keydown);
}
